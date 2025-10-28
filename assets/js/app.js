/* Minimal JS for toggles:
   - collapse/expand sidebar (only toggling a class)
   - mobile show/hide
   - dark mode toggle (persisted)
   - small flytip for collapsed items without children
*/
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const sidebar = document.getElementById('sidebar');
        const btnToggle = document.getElementById('btnToggleCollapse');
        const btnTheme = document.getElementById('btnTheme');
        const btnMobileToggle = document.getElementById('btnMobileToggle');
        const btnCollapseSmall = document.getElementById('btnCollapseSmall');
        let flytip = null;

        // Toggle collapse
        btnToggle && btnToggle.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
            // switch icon
            const i = this.querySelector('i');
            if (i) i.classList.toggle('bi-chevron-right');
        });

        // Mobile toggle
        btnMobileToggle && btnMobileToggle.addEventListener('click', function (e) {
            e.preventDefault();
            sidebar.classList.toggle('show');
            body.classList.toggle('sidebar-open');
        });
        btnCollapseSmall && btnCollapseSmall.addEventListener('click', function () {
            sidebar.classList.toggle('show');
            body.classList.toggle('sidebar-open');
        });

        // Dark mode toggle
        btnTheme && btnTheme.addEventListener('click', function () {
            body.classList.toggle('dark');
            try { localStorage.setItem('themeDark', body.classList.contains('dark') ? '1' : '0'); } catch (e) { }
        });
        // Load preference
        try {
            if (localStorage.getItem('themeDark') === '1') body.classList.add('dark');
        } catch (e) { }

        // Flytip for collapsed items without children
        const sidebarNav = document.getElementById('sidebarNav');
        if (sidebarNav) {
            sidebarNav.addEventListener('mouseover', function (e) {
                const item = e.target.closest('.menu-item');
                if (!item) return;
                // remove old
                removeFlytip();
                const isCollapsed = sidebar.classList.contains('collapsed');
                if (!isCollapsed) return;
                if (item.classList.contains('has-children')) return; // children handled by CSS flyout
                const link = item.querySelector('.nav-link');
                const title = link ? (link.dataset.title || link.innerText.trim()) : null;
                if (!title) return;
                // position
                const rect = item.getBoundingClientRect();
                flytip = document.createElement('div');
                flytip.className = 'flytip';
                flytip.innerText = title;
                document.body.appendChild(flytip);
                const left = sidebar.getBoundingClientRect().right + 8;
                flytip.style.top = (rect.top + rect.height / 2 - flytip.offsetHeight / 2 + window.scrollY) + 'px';
                flytip.style.left = left + 'px';
            });
            sidebarNav.addEventListener('mouseleave', function () { setTimeout(removeFlytip, 80); });
            document.addEventListener('mousemove', function (e) {
                // if moving far away remove
                if (!flytip) return;
                const within = e.target.closest('.menu-item') || e.target.closest('.flytip') || e.target.closest('.menu-children');
                if (!within) removeFlytip();
            });
        }
        function removeFlytip() { if (flytip) { flytip.remove(); flytip = null; } }

        // close mobile sidebar on outside click
        document.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                if (!e.target.closest('#sidebar') && !e.target.closest('#btnMobileToggle') && sidebar.classList.contains('show')) {
                    sidebar.classList.remove('show'); body.classList.remove('sidebar-open');
                }
            }
        });

        // small: clicking nav links sets title (demo)
        sidebarNav && sidebarNav.addEventListener('click', function (e) {
            const a = e.target.closest('a.nav-link');
            if (!a) return;
            e.preventDefault();
            const all = sidebarNav.querySelectorAll('a.nav-link');
            all.forEach(x => x.classList.remove('active'));
            a.classList.add('active');
            const t = a.dataset.title || a.querySelector('.label')?.innerText || '';
            const topTitle = document.querySelector('.topbar-title');
            if (topTitle) topTitle.innerText = t;
            if (window.innerWidth < 992) { sidebar.classList.remove('show'); body.classList.remove('sidebar-open'); }
        });
    });
})();
