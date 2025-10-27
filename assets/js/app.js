/* assets/js/script.js
   - collapse/expand sidebar
   - mobile toggle
   - flyout submenu on hover (works both collapsed and expanded)
   - dark mode toggle
*/

(function ($) {
    $(function () {
        const $body = $('body');
        const $sidebar = $('#sidebar');
        const $btnToggle = $('#btnToggleCollapse');
        const $btnMobileToggle = $('#btnMobileToggle');
        const $btnCollapseSmall = $('#btnCollapseSmall');
        const $btnTheme = $('#btnTheme');
        let $flyout = null;
        const sidebarWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-w')) || 250;
        const collapsedWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-collapsed-w')) || 80;

        // Toggle collapse (footer button)
        $('#btnToggleCollapse').on('click', function () {
            $sidebar.toggleClass('collapsed');
            // update arrow icon
            $(this).find('i').toggleClass('bi-chevron-left bi-chevron-right');
        });

        // Mobile show/hide
        $btnMobileToggle.on('click', function (e) {
            e.preventDefault();
            $sidebar.toggleClass('show');
            $body.toggleClass('sidebar-open');
        });
        $btnCollapseSmall.on('click', function () {
            $sidebar.toggleClass('show');
            $body.toggleClass('sidebar-open');
        });

        // Dark mode toggle
        $btnTheme.on('click', function () {
            $body.toggleClass('dark');
            // optional: store preference
            try { localStorage.setItem('themeDark', $body.hasClass('dark') ? '1' : '0'); } catch (e) { }
        });
        // load theme from storage
        try {
            if (localStorage.getItem('themeDark') === '1') $body.addClass('dark');
        } catch (e) { }

        // Handle hover to show flyout submenu or tooltip
        $('#sidebarNav').on('mouseenter', '.menu-item', function (e) {
            // remove old flyout
            removeFlyout();
            const $item = $(this);
            const hasChildren = $item.hasClass('has-children');
            const rect = this.getBoundingClientRect();
            const isCollapsed = $sidebar.hasClass('collapsed');
            const leftBase = $sidebar.hasClass('collapsed') ? collapsedWidth : sidebarWidth;
            if (hasChildren) {
                // clone submenu contents to flyout
                const $children = $item.find('.menu-children').first().clone(true, true);
                if ($children.length) {
                    $flyout = $('<div class="menu-flyout"></div>').css({
                        position: 'absolute',
                        top: rect.top + window.scrollY,
                        left: leftBase + $sidebar.offset().left + 8,
                        zIndex: 3000
                    }).appendTo('body');
                    // style wrapper
                    $flyout.css({ background: getComputedStyle(document.documentElement).getPropertyValue('--sidebar-bg'), borderRadius: '6px', boxShadow: '0 8px 24px rgba(0,0,0,0.35)', padding: '6px 0' });
                    $children.find('a').each(function () {
                        const $a = $(this).clone();
                        $a.css({ display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 14px', color: '#fff', textDecoration: 'none' });
                        $flyout.append($a);
                    });
                }
            } else {
                // show small tooltip label when collapsed
                if (isCollapsed) {
                    const title = $item.find('.nav-link').data('title') || $item.find('.label').text().trim();
                    if (title) {
                        $flyout = $('<div class="flytip"></div>').text(title).appendTo('body');
                        // position
                        $flyout.css({ top: rect.top + window.scrollY + (rect.height / 2) - ($flyout.outerHeight() / 2), left: leftBase + $sidebar.offset().left + 10 });
                    }
                }
            }
        });

        $('#sidebarNav').on('mouseleave', '.menu-item', function () {
            // remove after short delay (allow hover into flyout)
            setTimeout(removeFlyout, 150);
        });

        // If mouse enters flyout, keep it open until leave
        $(document).on('mouseenter', '.menu-flyout, .flytip', function () { clearTimeout($.data(this, 'timer')); });
        $(document).on('mouseleave', '.menu-flyout, .flytip', function () { removeFlyout(); });

        function removeFlyout() {
            if ($flyout && $flyout.length) { $flyout.remove(); $flyout = null; }
        }

        // Close mobile sidebar when clicking outside
        $(document).on('click touchstart', function (e) {
            if ($(window).width() < 992) {
                if (!$(e.target).closest('#sidebar,.btn-mobile').length && $sidebar.hasClass('show')) {
                    $sidebar.removeClass('show'); $body.removeClass('sidebar-open');
                }
            }
        });

        // handle nav link clicks (demo)
        $('#sidebarNav').on('click', 'a.nav-link', function (e) {
            e.preventDefault();
            $('#sidebarNav a.nav-link').removeClass('active');
            $(this).addClass('active');
            if ($(window).width() < 992) { $sidebar.removeClass('show'); $body.removeClass('sidebar-open'); }
            // optionally change main title
            const t = $(this).data('title') || $(this).find('.label').text();
            $('.topbar-title').text(t);
        });

        // accessibility: keyboard escape to close mobile sidebar
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape' && $sidebar.hasClass('show')) {
                $sidebar.removeClass('show'); $body.removeClass('sidebar-open');
            }
        });
    });
})(jQuery);
