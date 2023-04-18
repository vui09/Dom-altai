export default function phoneMask(els) {
    [].forEach.call(els, (input) => {
        if (input.classList.contains('phone-mask-activated')) return;
        input.classList.add('phone-mask-activated');
        let keyCode;

        function mask(event) {
            if (!(event.keyCode)) {
                keyCode = event.keyCode;
            }
            const pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            const matrix = '+7 (___) ___ ____';
            let i = 0;
            const def = matrix.replace(/\D/g, '');
            const val = this.value.replace(/\D/g, '');
            let newValue = matrix.replace(/[_\d]/g, (a) => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
            i = newValue.indexOf('_');
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = matrix.substr(0, this.value.length).replace(
                /_+/g,
                (a) => `\\d{1,${a.length}}`
                ).replace(/[+()]/g, '\\$&');
            reg = new RegExp(`^${reg}$`);
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
                this.value = newValue;
            }
            if (event.type === 'blur' && this.value.length < 5) this.value = '';
        }

        input.addEventListener('input', mask, false);
        input.addEventListener('focus', mask, false);
        input.addEventListener('blur', mask, false);
        input.addEventListener('keydown', mask, false);
    });
}
