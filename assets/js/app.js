/**
 * assets/js/main.js
 * Sidebar (collapse/flyout), mobile toggle, dark mode, tooltips
 */
(function ($) {
    $(function () {
        const $sidebar = $('#sidebar');
        const $btnToggle = $('#btnToggleCollapse');
        const $btnMobileToggle = $('#btnMobileToggle');
        const $btnCollapseSmall = $('#btnCollapseSmall');
        const $btnTheme = $('#btnTheme');
        let flyoutEl = null;

        // Toggle collapse (desktop)
        $('#btnToggleCollapse').on('click', function () {
            $sidebar.toggleClass('collapsed');
            // rotate arrow icon
            $(this).find('i').toggleClass('bi-chevron-left bi-chevron-right');
        });

        // mobile toggle: show/hide sidebar
        $btnMobileToggle.on('click', function () {
            $sidebar.toggleClass('show');
            $('body').toggleClass('sidebar-open');
        });
        $btnCollapseSmall.on('click', function () {
            $sidebar.toggleClass('show');
            $('body').toggleClass('sidebar-open');
        });

        // submenu open/close (click)
        $sidebar.on('click', '.has-children > .parent', function (e) {
            e.preventDefault();
            const $li = $(this).closest('.menu-item');
            $li.toggleClass('open');
            $li.find('.menu-children').first().slideToggle(180);
            $(this).find('.arrow').toggleClass('rotated');
        });

        // flyout for collapsed sidebar: show submenu on hover or show tooltip
        $sidebar.on('mouseenter', '.menu-root .menu-item', function (e) {
            const isCollapsed = $sidebar.hasClass('collapsed');
            const $item = $(this);
            const title = $item.find('.nav-link').data('title') || $item.find('.label').text().trim();

            // remove any existing flyout
            removeFlyout();

            if (isCollapsed) {
                // if this item has children -> show flyout panel on right
                if ($item.hasClass('has-children')) {
                    const $children = $item.find('.menu-children').first().clone(true);
                    if ($children.length) {
                        flyoutEl = $('<div class="flyout"></div>').appendTo('body');
                        // convert children into links
                        $children.find('a').each(function () {
                            const $a = $(this).clone();
                            $a.removeClass('child').addClass('nav-link');
                            flyoutEl.append($a);
                        });
                        // position flyout to right of sidebar
                        const ofs = $item.offset();
                        const left = $sidebar.outerWidth() + 8;
                        flyoutEl.css({ top: ofs.top, left: left + $sidebar.offset().left });
                    }
                } else {
                    // no children => show small tooltip
                    flyoutEl = $('<div class="flyout"></div>').appendTo('body').text(title);
                    const ofs = $item.offset();
                    flyoutEl.css({ top: ofs.top, left: $sidebar.outerWidth() + $sidebar.offset().left + 8, padding: '8px 12px' });
                }
            }
        }).on('mouseleave', '.menu-root .menu-item', function () {
            // remove flyout on leave
            setTimeout(removeFlyout, 120);
        });

        // ensure flyout removes on click elsewhere or window resize
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.flyout, #sidebar').length) removeFlyout();
        });
        $(window).on('resize', removeFlyout);

        function removeFlyout() {
            if (flyoutEl && flyoutEl.length) { flyoutEl.remove(); flyoutEl = null; }
        }

        // menu link click (demo) - update main content title
        $('#sidebarNav').on('click', 'a.nav-link', function (e) {
            e.preventDefault();
            $('#sidebarNav a.nav-link').removeClass('active');
            $(this).addClass('active');
            // close mobile sidebar after click
            if ($(window).width() < 992) { $sidebar.removeClass('show'); $('body').removeClass('sidebar-open'); }
        });

        // theme toggle
        $btnTheme.on('click', function () {
            $('body').toggleClass('dark');
        });

        // keyboard escape to close mobile sidebar
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape' && $sidebar.hasClass('show')) {
                $sidebar.removeClass('show'); $('body').removeClass('sidebar-open');
            }
        });

        // accessibility: show title in aria-label for screen readers
        $('#sidebarNav a.nav-link').each(function () {
            const txt = $(this).find('.label').text().trim();
            if (txt) $(this).attr('aria-label', txt);
        });

        // initial: if viewport small hide sidebar
        if ($(window).width() < 992) {
            $sidebar.removeClass('collapsed');
        }

    });
})(jQuery);
