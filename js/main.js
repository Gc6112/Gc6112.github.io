// 加载导航栏的JavaScript代码
function loadNavbar() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            // 初始化导航栏功能
            initNavbar();
        })
        .catch(error => console.error('加载导航栏失败:', error));
}
// 初始化导航栏功能
function initNavbar() {
    // 添加事件监听器、高亮当前页面等
    // ...
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadNavbar);