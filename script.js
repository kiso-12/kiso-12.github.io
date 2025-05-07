// ナビゲーションのインタラクションロジックを追加する場合はここに記述してください

// たとえば、現在のページに応じてナビゲーションを動的に変更する
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navigation a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
