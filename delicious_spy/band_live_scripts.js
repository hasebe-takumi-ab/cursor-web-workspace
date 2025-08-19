// DELICIOUS×SPY ライブページ - JavaScriptファイル

// スクロールアニメーション
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer のオプション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Intersection Observer のコールバック関数
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // フェードイン要素を監視対象に追加
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 初期表示で最初の要素（次回ライブセクション）を表示
    setTimeout(() => {
        const nextLiveSection = document.querySelector('.next-live-section');
        if (nextLiveSection) {
            nextLiveSection.classList.add('visible');
        }
    }, 300);
});

