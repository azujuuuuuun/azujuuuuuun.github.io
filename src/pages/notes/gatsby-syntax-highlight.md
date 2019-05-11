---
id: 2
title: Gatsbyでコードをシンタックスハイライト
published: '2019-05-07'
updated: '2019-05-07'
---

Gatsbyでコードにシンタックスハイライトを入れた。

## gatsby-remark-prismjs

Gatsbyのプラグイン [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) を使った。

オプションは以下の通り。

| オプション | 内容 |
| --- | --- |
| classPrefix | classのprefix |
| inlineCodeMarker | インラインコードに言語を設定するためのマーカー |
| aliases | 言語のエイリアス |
| showLineNumbers | 行数を表示するかどうか |
| noInlineHighlight | インラインコードをハイライトしないかどうか |

デフォルトの設定でよかったので、optionは設定しなかった。

## テーマの設定

colorThemeをOKAIDIAにした。

[Required: Pick a PrismJS theme or create your own](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#required-pick-a-prismjs-theme-or-create-your-own) 
を参考にして、`gatsby-browser.js`に下のコードを追加した。

```js
require("prismjs/themes/prism-okaidia.css")
```
