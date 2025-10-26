<!doctype html>
<html lang="vi">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Admin Template - Demo</title>

    <!-- Roboto Condensed -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
        rel="stylesheet">

    <!-- Bootstrap CSS (latest 5.x CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- jQuery UI CSS (smoothness theme) -->
    <link href="https://code.jquery.com/ui/1.13.2/themes/smoothness/jquery-ui.css" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="assets/css/styles.css" rel="stylesheet">
    <script>
    window.APP = {
        primary: '#009688'
    };
    </script>
</head>

<body>
    <div class="app d-flex">
        <!-- SIDEBAR -->
        <aside id="sidebar" class="sidebar" role="navigation" aria-label="Sidebar">
            <div class="sidebar-top d-flex align-items-center justify-content-between px-3 py-2">
                <div class="d-flex align-items-center gap-2">
                    <div class="brand-icon">🌿</div>
                    <div class="brand-text">Ace Admin</div>
                </div>
                <button id="btnCollapseSmall" class="btn btn-sm btn-light d-md-none"><i class="bi bi-list"></i></button>
            </div>

            <nav class="sidebar-nav" id="sidebarNav">
                <ul class="menu-root list-unstyled mb-0">
                    <li class="menu-item">
                        <a href="#" class="nav-link" data-title="Bàn làm việc">
                            <i class="bi bi-speedometer2"></i><span class="label">Bàn làm việc</span>
                        </a>
                    </li>

                    <li class="menu-item has-children">
                        <a href="#" class="nav-link parent" data-title="Người dùng">
                            <i class="bi bi-people"></i><span class="label">Người dùng</span><i
                                class="bi bi-chevron-down ms-auto arrow"></i>
                        </a>
                        <ul class="menu-children list-unstyled">
                            <li><a href="#" class="nav-link child" data-title="Danh sách người dùng"><i
                                        class="bi bi-list"></i><span class="label">Danh sách</span></a></li>
                            <li><a href="#" class="nav-link child" data-title="Phân quyền"><i
                                        class="bi bi-shield-lock"></i><span class="label">Phân quyền</span></a></li>
                        </ul>
                    </li>

                    <li class="menu-item has-children">
                        <a href="#" class="nav-link parent" data-title="Cài đặt">
                            <i class="bi bi-gear"></i><span class="label">Cài đặt</span><i
                                class="bi bi-chevron-down ms-auto arrow"></i>
                        </a>
                        <ul class="menu-children list-unstyled">
                            <li><a href="#" class="nav-link child" data-title="Hệ thống"><i class="bi bi-hdd"></i><span
                                        class="label">Hệ thống</span></a></li>
                            <li><a href="#" class="nav-link child" data-title="Giao diện"><i
                                        class="bi bi-palette"></i><span class="label">Giao diện</span></a></li>
                        </ul>
                    </li>

                    <!-- long list demo to test scrollbar -->
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 1"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 1</span></a></li>
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 2"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 2</span></a></li>
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 3"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 3</span></a></li>
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 4"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 4</span></a></li>
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 5"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 5</span></a></li>
                    <li class="menu-item"><a href="#" class="nav-link" data-title="Mục dài 6"><i
                                class="bi bi-folder"></i><span class="label">Mục dài 6</span></a></li>
                </ul>
            </nav>

            <div class="sidebar-footer px-2 py-2 text-center">
                <button id="btnToggleCollapse" class="btn btn-sm btn-light" title="Thu gọn/ Mở rộng"><i
                        class="bi bi-chevron-left"></i></button>
            </div>
        </aside>

        <!-- MAIN -->
        <div class="main d-flex flex-column flex-grow-1">
            <!-- TOPBAR -->
            <header class="topbar d-flex align-items-center justify-content-between px-3">
                <div class="d-flex align-items-center gap-3">
                    <button id="btnMobileToggle" class="btn btn-light btn-sm d-md-none"><i
                            class="bi bi-list"></i></button>
                    <h5 class="mb-0">Dashboard</h5>
                </div>

                <div class="d-flex align-items-center gap-2">
                    <button id="btnTheme" class="btn btn-outline-light btn-sm" title="Toggle dark mode"><i
                            class="bi bi-moon-stars"></i></button>
                    <div class="dropdown">
                        <a class="d-flex align-items-center text-decoration-none" href="#" data-bs-toggle="dropdown">
                            <img src="https://i.pravatar.cc/36" class="rounded-circle me-2" alt="avatar">
                            <div class="d-none d-md-block text-white small">Admin</div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Tài khoản</a></li>
                            <li><a class="dropdown-item" href="#" id="btnLogout">Đăng xuất</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <!-- CONTENT -->
            <main id="mainContent" class="main-content p-3">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <h4>Chào mừng</h4>
                            <p>Đây là khung admin demo. Sidebar 2 cấp, collapsed chỉ show icon, hover shows
                                tooltip/flyout, dark mode toàn diện.</p>
                            <p>Thêm nội dung module vào vùng này (datagrid, form, v.v.)</p>
                        </div>
                    </div>
                    <!-- filler to allow scrolling -->
                    <div style="height:800px;"></div>
                </div>
            </main>

            <!-- FOOTER -->
            <footer class="footer d-flex align-items-center justify-content-center">
                <small class="text-white">© 2025 — Admin template</small>
            </footer>
        </div>
    </div>

    <!-- jQuery, jQuery UI, Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JS -->
    <script src="assets/js/app.js"></script>
</body>

</html>