<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hệ thống quản lý</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
    <link href="assets/css/styles.css" rel="stylesheet">
</head>

<body>
    <div class="layout-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <img src="assets/img/logo.png" alt="logo" class="logo">
                <span class="title">Hệ thống quản lý</span>
            </div>
            <ul class="menu">
                <li><a href="#"><i class="fa-solid fa-house"></i><span>Bàn làm việc</span></a></li>
                <li class="has-submenu">
                    <a href="#"><i class="fa-solid fa-users"></i><span>Người dùng</span></a>
                    <ul class="submenu">
                        <li><a href="#">Danh sách</a></li>
                        <li><a href="#">Phân quyền</a></li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <a href="#"><i class="fa-solid fa-gear"></i><span>Cài đặt</span></a>
                    <ul class="submenu">
                        <li><a href="#">Cấu hình</a></li>
                        <li><a href="#">Sao lưu</a></li>
                    </ul>
                </li>
            </ul>
            <div class="sidebar-footer">
                <button id="toggleSidebar" class="btn-toggle"><i class="fa-solid fa-chevron-left"></i></button>
            </div>
        </aside>

        <!-- Main area -->
        <div class="main-area">
            <header class="main-header">
                <div class="header-left">
                    <button id="mobileToggle" class="btn-mobile d-lg-none"><i class="fa fa-bars"></i></button>
                    <h6 class="mb-0 text-white">Bảng điều khiển</h6>
                </div>
                <div class="header-right">
                    <button id="darkModeBtn" class="btn btn-sm btn-outline-light"><i class="fa fa-moon"></i></button>
                    <img src="https://i.pravatar.cc/40" class="user-avatar ms-2" alt="user">
                </div>
            </header>

            <main class="main-content">
                <div class="container-fluid py-3">
                    <div class="card p-3 mb-3">
                        <h5>Bảng điều khiển</h5>
                        <p>Đây là khu vực hiển thị dữ liệu chính.</p>
                    </div>
                    <div class="card p-3">
                        <h5>Ví dụ nội dung</h5>
                        <p>Phần này để test cuộn và dark mode...</p>
                    </div>
                </div>
            </main>

            <footer class="main-footer text-center">
                © 2025 – Hệ thống quản lý nội bộ
            </footer>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="assets/js/app.js"></script>
</body>

</html>