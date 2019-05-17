---
id: 7
title: '多段SSHを簡単にする.ssh/confingの設定'
published: '2019-05-16'
updated: '2019-05-16'
---

## 目的

SSHによる踏み台サーバーを経由した目的のサーバーへのアクセスを簡単にしたい。

## 解決法

`~/.ssh/config` に以下の設定を追加する。（bastionが踏み台サーバー、targetが目的のサーバー） 

```
Host bastion
    Hostname bastion.com
    IdentityFile ~/.ssh/<秘密鍵>

Host target
    Hostname target.com
    ProxyCommand ssh bastion nc %h %p
```

`ssh target` で目的のサーバーにアクセスできる。
