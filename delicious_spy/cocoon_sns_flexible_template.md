# DELICIOUS×SPY SNSアイコン 選択式テンプレート

## 🎯 コンセプト
- **必要なSNSアイコンだけ選択**
- **リンクは後から簡単設定**
- **メンバーが自由にカスタマイズ**

---

## 🛠️ 実装方法

### **方法1: ボタンブロック活用【推奨・最も簡単】**

#### Step 1: 各SNS用ボタンブロックテンプレートを作成

##### 🔹 X (Twitter) ボタン
```
ブロック追加 → 「ボタン」選択
├── テキスト: 「🐦 X (Twitter)」
├── リンク: 「#」（後で変更）
├── スタイル: 塗りつぶし
├── 色設定:
│   ├── テキスト色: 白 (#ffffff)
│   └── 背景色: Twitter青 (#1DA1F2)
├── ボーダー: 丸角 (50px)
└── サイズ: 中
```

##### 🔹 Instagram ボタン
```
ブロック追加 → 「ボタン」選択
├── テキスト: 「📷 Instagram」
├── リンク: 「#」（後で変更）
├── スタイル: 塗りつぶし
├── 色設定:
│   ├── テキスト色: 白 (#ffffff)
│   └── 背景色: Instagram色 (#E4405F)
├── ボーダー: 丸角 (50px)
└── サイズ: 中
```

##### 🔹 YouTube ボタン
```
ブロック追加 → 「ボタン」選択
├── テキスト: 「🎥 YouTube」
├── リンク: 「#」（後で変更）
├── スタイル: 塗りつぶし
├── 色設定:
│   ├── テキスト色: 白 (#ffffff)
│   └── 背景色: YouTube赤 (#FF0000)
├── ボーダー: 丸角 (50px)
└── サイズ: 中
```

##### 🔹 TikTok ボタン
```
ブロック追加 → 「ボタン」選択
├── テキスト: 「🎵 TikTok」
├── リンク: 「#」（後で変更）
├── スタイル: 塗りつぶし
├── 色設定:
│   ├── テキスト色: 白 (#ffffff)
│   └── 背景色: TikTok黒 (#000000)
├── ボーダー: 丸角 (50px)
└── サイズ: 中
```

##### 🔹 LINE ボタン
```
ブロック追加 → 「ボタン」選択
├── テキスト: 「💬 LINE」
├── リンク: 「#」（後で変更）
├── スタイル: 塗りつぶし
├── 色設定:
│   ├── テキスト色: 白 (#ffffff)
│   └── 背景色: LINE緑 (#00B900)
├── ボーダー: 丸角 (50px)
└── サイズ: 中
```

#### Step 2: ボタンをグループ化
```
1. 必要なSNSボタンを選択
2. 「グループ」ブロックで囲む
3. グループ設定:
   ├── 配置: 中央寄せ
   ├── 幅: コンテンツ幅
   └── 間隔: 1rem
```

#### Step 3: 再利用可能ブロック化
```
1. グループブロック全体を選択
2. [...] → 「再利用ブロックに追加」
3. 名前: 「SNSボタンセット（リンク未設定）」
4. 保存
```

---

## 🔄 メンバーの使用手順

### **Step 1: テンプレート挿入**
```
1. [+] ブロック追加
2. 「再利用可能」→ 「SNSボタンセット（リンク未設定）」選択
3. 「通常のブロックに変換」をクリック
```

### **Step 2: 不要なボタン削除**
```
1. 使わないSNSボタンをクリック
2. [Delete] キーで削除
3. 必要なボタンのみ残す
```

### **Step 3: リンク設定**
```
各ボタンをクリックして:
1. ツールバーの「🔗」（リンク）をクリック
2. 自分のSNSアカウントURLを入力
3. 「新しいタブで開く」にチェック
4. [Enter] で確定
```

### **使用例:**
```
池田華桜の場合:
├── 🐦 X (Twitter) → https://x.com/kagu_mama
├── 📷 Instagram → https://www.instagram.com/kaguratomama/
└── 🎥 YouTube → （削除）
    🎵 TikTok → （削除）
    💬 LINE → （削除）
```

---

## 🛠️ 方法2: カスタムHTMLブロック【上級者向け】

### テンプレートHTML
```html
<!-- SNSアイコン選択式テンプレート -->
<div class="sns-flexible-container">
<style>
.sns-flexible-container {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
}
.sns-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    color: white;
}
.sns-btn:hover { 
    transform: translateY(-2px);
    color: white;
}
.twitter { background-color: #1DA1F2; }
.instagram { background-color: #E4405F; }
.youtube { background-color: #FF0000; }
.tiktok { background-color: #000000; }
.line { background-color: #00B900; }
</style>

<!-- 🔹 X (Twitter) - 必要に応じて削除 -->
<a href="ここに自分のXアカウントURL" target="_blank" class="sns-btn twitter">
    🐦 X (Twitter)
</a>

<!-- 🔹 Instagram - 必要に応じて削除 -->
<a href="ここに自分のInstagramアカウントURL" target="_blank" class="sns-btn instagram">
    📷 Instagram
</a>

<!-- 🔹 YouTube - 必要に応じて削除 -->
<a href="ここに自分のYouTubeアカウントURL" target="_blank" class="sns-btn youtube">
    🎥 YouTube
</a>

<!-- 🔹 TikTok - 必要に応じて削除 -->
<a href="ここに自分のTikTokアカウントURL" target="_blank" class="sns-btn tiktok">
    🎵 TikTok
</a>

<!-- 🔹 LINE - 必要に応じて削除 -->
<a href="ここに自分のLINEアカウントURL" target="_blank" class="sns-btn line">
    💬 LINE
</a>

</div>

<!-- 
📝 編集方法:
1. 不要なSNSの行を削除
2. 「ここに自分の〜URL」部分を実際のURLに変更
3. プレビューで確認
-->
```

---

## 🎯 どちらの方法を選ぶべき？

### **ボタンブロック方式【推奨】**
✅ **GUI操作のみ**で完結  
✅ **HTMLの知識不要**  
✅ **直感的**な操作  
✅ **リンク設定が簡単**  
✅ **Cocoon完全対応**  

### **カスタムHTML方式**
✅ **デザインカスタマイズ自由度高**  
✅ **細かい調整可能**  
❌ **HTML編集必要**  
❌ **メンバーの学習コスト高**  

---

## 💡 運用のコツ

### **テンプレート管理:**
```
1. 管理者が基本テンプレート作成
2. メンバーは「コピー&カスタマイズ」
3. 不要な部分は削除
4. リンクのみ後から設定
```

### **メンバー向け簡単ガイド:**
```
✅ テンプレート挿入
✅ 不要なボタン削除  
✅ リンクURL設定
✅ プレビュー確認
✅ 保存
```

この方式なら、各メンバーが**必要なSNSだけ選んで**、**後からリンクを自由に設定**できます！🎵✨







