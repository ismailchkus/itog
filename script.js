/* ============================================================
   ИНИЦИАЛИЗАЦИЯ TOOLTIP-ПОДСКАЗОК (Bootstrap)
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (el) {
        new bootstrap.Tooltip(el);
    });
});


/* ============================================================
   БУРГЕР-МЕНЮ
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (!burger || !nav) return;

    // Создаём оверлей (затемнение фона)
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        burger.classList.add('is-active');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрыть меню');
        nav.classList.add('is-open');
        overlay.classList.add('is-open');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        nav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        if (nav.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // Клик по бургеру — открыть/закрыть
    burger.addEventListener('click', toggleMenu);

    // Клик по затемнению — закрыть
    overlay.addEventListener('click', closeMenu);

    // Клик по ссылке — закрыть меню (кроме кнопки «Играть», у неё data-bs-toggle="modal")
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (link.dataset.bsToggle === 'modal') return;
            closeMenu();
        });
    });

    // Escape — закрыть меню
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Если окно расширили до десктопа (>992px) — сбрасываем состояние
    window.addEventListener('resize', function () {
        if (window.innerWidth > 992 && nav.classList.contains('is-open')) {
            closeMenu();
        }
    });
});
