// WordPress用 DELICIOUS×SPY ライブページ - JavaScript

// WordPressで確実に動作させるため、複数のタイミングで初期化を試行
function initLivePageAnimations() {
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
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        observer.observe(el);
    });

    // 初期表示で最初の要素（次回ライブセクション）を表示
    setTimeout(() => {
        const nextLiveSection = document.querySelector('.next-live-section');
        if (nextLiveSection) {
            nextLiveSection.classList.add('visible');
        }
    }, 300);

    console.log('Live page animations initialized');
}

// DOMが読み込まれた時点で実行
document.addEventListener('DOMContentLoaded', function() {
    initLivePageAnimations();
});

// 念のため、ページが完全に読み込まれた後にも実行
window.addEventListener('load', function() {
    setTimeout(initLivePageAnimations, 100);
});

// WordPressの場合、ブロックエディタで動的にコンテンツが追加される場合もあるため
// MutationObserverで新しい要素の追加を監視
if (typeof MutationObserver !== 'undefined') {
    const mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // 新しい要素が追加された場合、少し遅延してからアニメーションを初期化
                setTimeout(initLivePageAnimations, 500);
            }
        });
    });

    // ページ全体を監視
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}

