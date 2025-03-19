window.addEventListener('load', function(){
    const radioFunc = () => {
        this.document.querySelectorAll('input[name="payment"]').forEach(element => {
            element.addEventListener('change', function(){
                var radioId = this.getAttribute('id');
                document.querySelectorAll('label.payment_label').forEach(label => {label.classList.remove("active")});
                document.querySelector(`label[for="${radioId}"]`).classList.add('active');
            });
        });
    }; radioFunc();

    const popupOpen = () => {
        this.document.addEventListener('click', (e) => {
            if(e.target.getAttribute('data-target') != null){
                let popupTarget = e.target.getAttribute('data-target');
                this.document.querySelector(`.popup[data-popup="${popupTarget}"]`).classList.add("active");
            }
        });
    }; popupOpen();

    const popupClose = () => {
        this.document.addEventListener('click', (e) => {
            if(e.target.classList.contains('over')){
                e.target.parentNode.classList.remove('active');
            }
        });
    }; popupClose();

    // Находим все select с классом custom__select
    const selectElements = document.querySelectorAll("select.custom__select");

    // Для каждого select создаем кастомную структуру
    selectElements.forEach(createCustomSelect);
});

function createCustomSelect(selectElement) {
    // Создаем контейнер для кастомного select
    const customContainer = document.createElement("div");
    customContainer.classList.add("custom__select_container");

    // Создаем заголовок (активный элемент)
    const activeItem = document.createElement("p");
    activeItem.classList.add("active__item");
    activeItem.innerHTML = `
        <span class="value">${selectElement.options[selectElement.selectedIndex].text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M12 0L12 2.57L6 9L0 2.57L0 0L6 6.42L12 0Z" fill="#BDBDBD"/>
        </svg>
    `;

    // Создаем список элементов
    const itemList = document.createElement("ul");
    itemList.classList.add("list__item");

    // Заполняем список элементами из оригинального select
    Array.from(selectElement.options).forEach((option, index) => {
        const item = document.createElement("p");
        item.setAttribute("data-value", option.value);
        item.setAttribute("data-selected", index === selectElement.selectedIndex);
        item.textContent = option.text;

        // Добавляем обработчик клика для выбора элемента
        item.addEventListener("click", () => {
            // Обновляем значение оригинального select
            selectElement.selectedIndex = index;
            selectElement.dispatchEvent(new Event("change")); // Триггерим событие change

            // Обновляем активный элемент в кастомном select
            updateActiveItem();
            closeDropdown();
        });

        itemList.appendChild(item);
    });

    // Добавляем заголовок и список в контейнер
    customContainer.appendChild(activeItem);
    customContainer.appendChild(itemList);

    // Вставляем кастомный select после оригинального select
    selectElement.style.display = "none"; // Скрываем оригинальный select
    selectElement.parentNode.insertBefore(customContainer, selectElement.nextSibling);

    // Функция для обновления активного элемента
    function updateActiveItem() {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        activeItem.querySelector(".value").textContent = selectedOption.text;

        // Обновляем атрибуты data-selected у элементов списка
        Array.from(itemList.children).forEach((item, index) => {
            item.setAttribute("data-selected", index === selectElement.selectedIndex);
        });
    }

    // Функция для открытия/закрытия выпадающего списка
    let isDropdownOpen = false;
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
        itemList.style.display = isDropdownOpen ? "flex" : "none";
    }

    function closeDropdown() {
        isDropdownOpen = false;
        itemList.style.display = "none";
    }

    // Добавляем обработчики для открытия/закрытия списка
    activeItem.addEventListener("click", toggleDropdown);
    document.addEventListener("click", (event) => {
        if (!customContainer.contains(event.target)) {
            closeDropdown();
        }
    });

    // Слушаем событие change на оригинальном select
    selectElement.addEventListener("change", () => {
        updateActiveItem();
    });
}