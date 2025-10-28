// assets/js/main.js
$(function () {
    const $body = $('body');
    const $sidebar = $('.sidebar');
    const $toggle = $('#toggleSidebar');
    const $mobileToggle = $('#mobileToggle');

    // toggle collapse
    $toggle && $toggle.on('click', function () {
        $sidebar.toggleClass('collapsed');
        $(this).find('i').toggleClass('fa-chevron-left fa-chevron-right');
    });

    // dark mode (if you have a button id #darkModeBtn)
    $('#darkModeBtn').on('click', function () {
        $body.toggleClass('dark');
    });

    // mobile toggle show/hide
    $mobileToggle && $mobileToggle.on('click', function () {
        $sidebar.toggleClass('active');
    });

    // close sidebar on mobile when clicking outside
    $(document).on('click touchstart', function (e) {
        if ($(window).width() < 992) {
            if (!$(e.target).closest('.sidebar, #mobileToggle').length) {
                $sidebar.removeClass('active');
            }
        }
    });

    // flytip for collapsed items (show text tooltip near icon)
    let flytip = null;
    $('.menu').on('mouseenter', 'li', function (e) {
        const li = this;
        if (!$sidebar.hasClass('collapsed')) return;
        // if has submenu, let CSS display it (we still want flytip only for items *without* children)
        if ($(li).hasClass('has-submenu')) return;
        const a = $(li).children('a').first();
        const txt = a.attr('data-title') || a.text().trim();
        if (!txt) return;
        // create tip
        flytip = $('<div class="flytip"></div>').text(txt).appendTo('body');
        const rect = li.getBoundingClientRect();
        const left = ($sidebar.offset().left || 0) + $sidebar.outerWidth() + 8;
        flytip.css({ top: rect.top + (rect.height / 2) - (flytip.outerHeight() / 2) + window.scrollY, left: left });
    });
    $('.menu').on('mouseleave', 'li', function () {
        if (flytip) { flytip.remove(); flytip = null; }
    });

    // ensure main content not hidden by fixed header on desktop/mobile
    function adjustContentPadding() {
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 56;
        if ($(window).width() < 992) {
            // mobile header fixed -> add padding-top
            $('.main-content').css('padding-top', headerH + 14 + 'px');
        } else {
            $('.main-content').css('padding-top', '18px');
        }
    }
    $(window).on('resize', adjustContentPadding);
    adjustContentPadding();
});
