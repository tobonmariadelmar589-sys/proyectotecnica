document.addEventListener('DOMContentLoaded', function () {
    // Footer year
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Mobile nav toggle
    var toggle = document.querySelector('.site-header__toggle');
    var nav = document.querySelector('.site-header__nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('site-header__nav--open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Contact form: client-side validation + fake success notification
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var valid = true;

            form.querySelectorAll('.contact-form__field').forEach(function (field) {
                var input = field.querySelector('.contact-form__input, .contact-form__textarea');
                var error = field.querySelector('.contact-form__error-message');
                var isEmpty = !input.value.trim();
                var isBadEmail = input.type === 'email' && input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());

                if (isEmpty || isBadEmail) {
                    field.classList.add('contact-form__field--error');
                    if (error) error.hidden = false;
                    valid = false;
                } else {
                    field.classList.remove('contact-form__field--error');
                    if (error) error.hidden = true;
                }
            });

            if (!valid) return;

            showNotification('Mensaje enviado. Te escribimos en menos de un día.');
            form.reset();
        });
    }

    function showNotification(message) {
        var existing = document.getElementById('contact-notification');
        if (existing) existing.remove();

        var notification = document.createElement('div');
        notification.className = 'notification notification--success notification--enter';
        notification.id = 'contact-notification';
        notification.setAttribute('role', 'status');
        notification.innerHTML =
            '<span class="notification__icon">✓</span>' +
            '<p class="notification__message"></p>' +
            '<button class="notification__close" type="button" aria-label="Cerrar">×</button>';
        notification.querySelector('.notification__message').textContent = message;

        document.body.appendChild(notification);

        var dismiss = function () { notification.remove(); };
        notification.querySelector('.notification__close').addEventListener('click', dismiss);
        setTimeout(dismiss, 6000);
    }
});
