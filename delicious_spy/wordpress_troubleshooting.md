# WordPress + Cocoon トラブルシューティングガイド

## 🔍 問題診断チェックリスト

### 1. **ブラウザ開発者ツールでの確認**
1. プレビューページで **F12** を押す
2. **Console** タブでエラーメッセージを確認
3. **Elements** タブで実際のHTMLを確認

### 2. **Cocoonテーマ設定の確認**
1. WordPress管理画面 → **外観** → **カスタマイズ**
2. **追加CSS** セクションで競合するCSSがないか確認
3. **Cocoon設定** → **全体** → **サイト幅の中央寄せ** を確認

### 3. **プラグインの影響確認**
1. **プラグイン** → **インストール済みプラグイン**
2. CSS/JavaScript関連のプラグインを一時的に無効化
3. **キャッシュ系プラグイン**（WP Rocket、W3 Total Cache等）をクリア

### 4. **WordPressのブロックエディタ設定**
1. **設定** → **投稿設定**
2. **クラシックエディタ**の使用を確認
3. **ブロックエディタ**の完全な機能が有効か確認

## 🚀 最終手段：テーマファイル直接編集

### A. single.php または page.php を編集
```php
<?php
// 既存のコンテンツの後に追加
if (is_page('ライブ情報')) { // ページスラッグに応じて調整
    ?>
    <style>
    /* インラインCSSをここに記述 */
    </style>
    
    <div class="custom-live-page">
    <!-- HTMLコンテンツをここに記述 -->
    </div>
    <?php
}
?>
```

### B. functions.php にカスタム CSS/JS を追加
```php
function add_live_page_styles() {
    if (is_page('ライブ情報')) {
        wp_enqueue_style('live-page-style', get_template_directory_uri() . '/live-page.css');
        wp_enqueue_script('live-page-script', get_template_directory_uri() . '/live-page.js');
    }
}
add_action('wp_enqueue_scripts', 'add_live_page_styles');
```

## 🎯 Cocoon特有の対策

### 1. **Cocoonの設定を調整**
- **Cocoon設定** → **全体** → **コンテンツ幅**を「サイト幅」に設定
- **Cocoon設定** → **全体** → **サイドバー**を「なし」に設定（ライブページのみ）

### 2. **Cocoonの上書きCSS**
```css
/* Cocoonの強力なCSSを無効化 */
.entry-content {
    max-width: none !important;
    margin: 0 !important;
}

.article {
    background: none !important;
}

/* コンテナの幅制限を解除 */
.container, .wrap {
    max-width: none !important;
    width: 100% !important;
}
```

## 📞 サポートが必要な場合

上記の方法でも解決しない場合は、以下の情報をお知らせください：

1. **WordPressのバージョン**
2. **使用中のプラグイン一覧**
3. **ブラウザの開発者ツールでのエラーメッセージ**
4. **実際に表示されている画面のスクリーンショット**

これらの情報があれば、より具体的な解決策を提案できます。

