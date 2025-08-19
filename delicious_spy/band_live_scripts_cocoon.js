// Cocoonテーマ専用 DELICIOUS×SPY ライブページ - JavaScript
// Cocoonテーマとの競合を最小限に抑えたシンプル版

(function() {
    'use strict';
    
    // CocoonテーマのjQueryと競合しないよう、ネイティブJSを使用
    function initLivePageForCocoon() {
        console.log('Cocoon Live Page Script Loading...');
        
        // シンプルなフェードイン効果（CSSトランジションは使用しない）
        function showElement(element) {
            if (element) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        }
        
        // 次回ライブセクションを即座に表示
        const nextLiveSection = document.querySelector('.next-live-section');
        if (nextLiveSection) {
            showElement(nextLiveSection);
        }
        
        // 他のセクションも順次表示
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach(function(element, index) {
            setTimeout(function() {
                showElement(element);
            }, 200 * (index + 1));
        });
        
        // 簡単なホバーエフェクトを追加
        const liveCards = document.querySelectorAll('.live-card');
        liveCards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        console.log('Cocoon Live Page Script Loaded Successfully');
    }
    
    // 複数のタイミングで初期化を試行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLivePageForCocoon);
    } else {
        initLivePageForCocoon();
    }
    
    // 念のため、少し遅れてもう一度実行
    setTimeout(initLivePageForCocoon, 1000);
    
    // Cocoonテーマで動的にコンテンツが変更される場合に備えて
    window.addEventListener('load', function() {
        setTimeout(initLivePageForCocoon, 500);
    });
    
})();

