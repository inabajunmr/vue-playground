# 条件付きレンダリング
## v-ifディレクティブ

```html
        <h1 v-if="ok">Yes</h1>
```
ok=trueの場合のみ描画される。


```html
        <h1 v-if="ok">Yes</h1>
        <h1 v-else>No</h1>
```
elseもいける。

## テンプレートによるv-ifのグルーピング



```html
        <template v-if="ok">
            <li>i say yes</li>
            <li>you say no</li>
        </template>
```

ok=trueの場合にtemplateの内側が描画される。templateタグそのものは描画されない。

```html
        <div>
            <li v-if="num === 1">ONE</li>
            <li v-else-if="num === 2">TWO</li>
            <li v-else-if="num === 3">THREE</li>
            <li v-else-if="num === 1">SECOND ONE</li>
            <li v-else>OTHER</li>
        </div>
```
elseとかelse-ifとかできる。
`v-else`とか`v-else-if`とかは`v-if`とか`v-else-if`の直後に来る必要がある。