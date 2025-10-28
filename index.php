<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ACE Bootstrap 5 Base</title>

    <!-- Bootstrap & Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/css/theme.css" rel="stylesheet" />
</head>

<body>
    <div class="layout-wrapper">
        <!-- Sidebar -->
        <nav id="sidebar" class="sidebar">
            <div class="sidebar-header">
                <h3><i class="bi bi-grid"></i> <span class="sidebar-text">ACE Base</span></h3>
            </div>

            <ul class="nav flex-column mt-3 flex-grow-1">
                <li class="nav-item"><a class="nav-link active" href="#"><i class="bi bi-house"></i> <span
                            class="sidebar-text">Dashboard</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="bi bi-gear"></i> <span
                            class="sidebar-text">Settings</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-users"></i> <span
                            class="sidebar-text">Users</span></a></li>
            </ul>

            <!-- Footer area in sidebar -->
            <div class="sidebar-footer border-top">
                <button id="sidebarToggle" class="btn btn-outline-light w-100"><i class="bi bi-list"></i></button>
            </div>
        </nav>

        <!-- Main -->
        <div id="content" class="main-content">
            <!-- Header -->
            <!-- Header -->
            <header class="header d-flex align-items-center justify-content-between px-3 border-bottom">
                <div class="d-flex align-items-center">
                    <button id="sidebarToggleMobile" class="btn btn-link d-lg-none me-2 text-dark"><i
                            class="bi bi-list"></i></button>
                    <h5 class="mb-0">ACE Bootstrap 5 Template</h5>
                </div>

                <div class="d-flex align-items-center">
                    <!-- Dark mode toggle -->
                    <button id="darkModeToggle" class="btn btn-link text-dark me-3"><i class="bi bi-moon"></i></button>

                    <!-- User dropdown -->
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                            id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://via.placeholder.com/32" alt="User" class="rounded-circle me-2">
                            <span class="d-none d-sm-inline fw-semibold">Admin</span>
                        </a>
                        <ul class="nav flex-column mt-3 flex-grow-1">
                            <li class="nav-item">
                                <a class="nav-link active" href="#" title="Dashboard" data-bs-toggle="tooltip"
                                    data-bs-placement="right">
                                    <i class="bi bi-house"></i> <span class="sidebar-text">Dashboard</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link has-submenu" href="#" title="Cấu hình" data-bs-toggle="tooltip"
                                    data-bs-placement="right">
                                    <i class="bi bi-gear"></i> <span class="sidebar-text">Cấu hình</span> <i
                                        class="bi bi-chevron-right ms-auto submenu-arrow"></i>
                                </a>
                                <ul class="submenu list-unstyled">
                                    <li><a href="#" class="nav-link">Hệ thống</a></li>
                                    <li><a href="#" class="nav-link">Giao diện</a></li>
                                    <li><a href="#" class="nav-link has-submenu">Thêm mục <i
                                                class="bi bi-chevron-right ms-auto submenu-arrow"></i></a>
                                        <ul class="submenu list-unstyled">
                                            <li><a href="#" class="nav-link">Mục 1</a></li>
                                            <li><a href="#" class="nav-link">Mục 2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#" title="Người dùng" data-bs-toggle="tooltip"
                                    data-bs-placement="right">
                                    <i class="fa fa-users"></i> <span class="sidebar-text">Người dùng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>


            <!-- Page content -->
            <main class="p-4 content-scroll">
                <h4>Welcome to ACE Base Template (Bootstrap 5)</h4>
                <p>This layout now has fixed header, sidebar and footer.</p>
                <p>Scroll this area to test fixed layout behavior.</p>
                <p style="height: 1200px;"></p>
            </main>

            <!-- Footer -->
            <footer class="footer text-center py-2 border-top">
                <small>&copy; 2025 ACE Base Template - Powered by Bootstrap 5</small>
            </footer>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/base.js"></script>
</body>

</html>