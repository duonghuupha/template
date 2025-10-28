document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebarToggleMobile = document.getElementById("sidebarToggleMobile");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Sidebar toggle (desktop)
    sidebarToggle?.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("sidebar-collapsed");

        // Tooltip init when collapsed
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
    });

    // Sidebar toggle (mobile)
    sidebarToggleMobile?.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });

    // Click outside sidebar to close (mobile)
    document.addEventListener("click", (e) => {
        if (
            window.innerWidth <= 991 &&
            !sidebar.contains(e.target) &&
            !sidebarToggleMobile.contains(e.target)
        ) {
            sidebar.classList.remove("show");
        }
    });

    // Submenu toggle (click)
    sidebar.querySelectorAll(".has-submenu").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const submenu = link.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                submenu.classList.toggle("show");
                link.classList.toggle("active");
            }
        });
    });

    // Tooltip init
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

    // Dark mode toggle
    darkModeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
