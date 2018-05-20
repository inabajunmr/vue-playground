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

## Keyによる再描画の制御
```html
            <template v-if="num === 1">
                    <input>
            </template>
            <template v-else-if="num === 2">
                    <input>
            </template>
```

この場合、numの値が変わってもinputの入力値は残る。効率的な描画のために要素を再利用している。

```html
            <template v-if="num === 1">
                    <input key="key1">
            </template>
            <template v-else-if="num === 2">
                    <input key="key2">
            </template>
            <template v-else-if="num === 3">
                    <input key="key2">
            </template>
```
keyによって再描画をコントロールできる。num=1からnum=2に変わった際は、input要素が再描画され、入力値がリセットされる。num=2とnum=3はkeyが同様なので再描画されない。


## v-showディレクティブ
動作的には`v-if`と一緒？
`v-if`は条件が変わるごとに再描画され、不要な要素は遅延で描画されるが、`v-show`は最初に描画されてCSSベースで見える、見えないの切り替えが行われる。
ので、

 * `v-if`・・・初期表示は早い（条件に一致しないやつを描画しない）。切り替えは遅い（都度描画）
 * `v-show`・・・初期表示遅い（条件に一致しないやつも描画する）。切り替えは早い（見た目だけ切り替え）

切り替えが頻繁なケースは`v-show`のが良い。