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
});