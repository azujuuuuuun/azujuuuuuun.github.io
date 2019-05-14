---
id: 6
title: 'Vimのインサートモードでdeleteキーを使えるようにした'
published: '2019-05-14'
updated: '2019-05-14'
---

Vimのインサートモードでdeleteキーを使えるようにした。以下の記事を参考にした。

- [vim で delete できない。](https://qiita.com/aki_55p/items/8b30f0d56ec7d70051a8)
- [vimのインサートモード中にカーソルキー及びBSキーが使えるようにする](https://sseze.hatenablog.com/entry/20120414/1334398422)

1番目のQiitaの記事は2番目のはてなブログを参考しているので、実質2番目の記事のみを参考にした。

.vimrcに以下の設定を追加した。

```
set nocompatible
set whichwrap=h,l
set backspace=indent,eol,start
```

