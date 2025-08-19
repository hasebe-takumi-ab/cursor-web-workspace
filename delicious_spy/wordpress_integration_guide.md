# WordPress統合ガイド - DELICIOUS×SPY ライブページ

## ファイル構成

- `band_live_styles.css` - スタイルシート
- `band_live_scripts.js` - JavaScript
- `band_live_content.html` - HTMLコンテンツ
- `wordpress_integration_guide.md` - このガイド

## WordPress での使用方法

### 1. CSSファイルの組み込み

#### 方法A: テーマのstyle.cssに追加
```css
/* band_live_styles.css の内容をコピー&ペーストするか、
   以下のようにインポート */
@import url('path/to/band_live_styles.css');
```

#### 方法B: functions.phpで読み込み
```php
function enqueue_band_live_styles() {
    wp_enqueue_style(
        'band-live-styles',
        get_template_directory_uri() . '/css/band_live_styles.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_band_live_styles');
```

### 2. JavaScriptファイルの組み込み

#### functions.phpで読み込み
```php
function enqueue_band_live_scripts() {
    wp_enqueue_script(
        'band-live-scripts',
        get_template_directory_uri() . '/js/band_live_scripts.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_band_live_scripts');
```

### 3. HTMLコンテンツの組み込み

#### 方法A: 固定ページテンプレート作成
1. `page-live.php` を作成
2. 以下のようにコンテンツを組み込み：

```php
<?php get_header(); ?>

<main class="main-content">
    <?php
    // band_live_content.html の内容をここに貼り付け
    ?>
</main>

<?php get_footer(); ?>
```

#### 方法B: ショートコード作成
```php
function band_live_shortcode() {
    ob_start();
    include get_template_directory() . '/templates/band_live_content.html';
    return ob_get_clean();
}
add_shortcode('band_live', 'band_live_shortcode');
```

使用方法：
```
[band_live]
```

#### 方法C: Gutenbergブロック（上級者向け）
カスタムブロックを作成してHTMLコンテンツを組み込む

### 4. 推奨ディレクトリ構成

```
wp-content/themes/your-theme/
├── css/
│   └── band_live_styles.css
├── js/
│   └── band_live_scripts.js
├── templates/
│   └── band_live_content.html
└── functions.php
```

## カスタマイズ方法

### ライブ情報の更新
`band_live_content.html` の以下の部分を編集：

- **次回ライブ**: `.next-live-card` 内の情報
- **今後のライブ**: `.live-grid` 内の `.live-card`
- **過去のライブ**: `.past-live-card` クラスの情報

### スタイルのカスタマイズ
`band_live_styles.css` で以下をカスタマイズ可能：

- **カラーテーマ**: CSS変数や色の値を変更
- **レイアウト**: グリッドシステムやスペーシング
- **アニメーション**: キーフレームやトランジション

### 機能の追加
`band_live_scripts.js` で以下を追加可能：

- **チケット購入リンク**: クリックイベント
- **カウントダウンタイマー**: 次回ライブまでの時間
- **ソーシャルシェア**: シェアボタン機能

## 注意事項

1. **レスポンシブデザイン**: モバイル表示を確認
2. **ブラウザ互換性**: 古いブラウザでの動作確認
3. **パフォーマンス**: 画像最適化やキャッシュ設定
4. **SEO**: メタタグやstructured dataの追加を検討

## トラブルシューティング

### CSSが適用されない場合
- ファイルパスを確認
- キャッシュをクリア
- ブラウザの開発者ツールでCSSの読み込みを確認

### JavaScriptが動作しない場合
- コンソールエラーを確認
- jQueryの依存関係を確認
- ファイルの読み込み順序を確認

### レイアウトが崩れる場合
- テーマのCSSとの競合をチェック
- CSS詳細度を調整
- `!important` の使用を検討（最終手段）

