---
id: 4
title: Redux-SagaでStoreのstateを使う方法
published: '2019-05-12'
updated: '2019-05-12'
---

## 目的

Redux-SagaでStoreのstateを使いたい。

## 解決法

1. actionのpayloadで渡す
2. Redux-Sagaのselectを使う

### 2. Redux-Sagaのselectを使う

Redux-SagaのselectのAPI Reference: https://redux-saga.js.org/docs/api/#selectselector-args

下のコードでStoreのstateを取得することができる。

```js
import { select } from 'redux-saga/effects';

function* hoge() {
  const state = yield select();
  ...
}
```

引数にselector関数を渡してstateからデータを取り出すことができる。

```js
import { select } from 'redux-saga/effects';

const getCurrentUser = state => state.currentUser;

function* hoge() {
  const currentUser = yield select(getCurrentUser);
  ...
}
```

