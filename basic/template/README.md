# テンプレート構文

https://jp.vuejs.org/v2/guide/syntax.html

## Mustache
 * テキストの展開ができる
 * Vueインスタンスが持っているデータを変えると、展開された値も切り替わる

### HTML
```html
<div id="test">
    <div>{{ value }}</div>
</div>
```

### JS
```Javascript
var app = new Vue({
    el: '#test',
    data: {
      value: 'Hello Vue!',
    }
})
```

これで{{ value }}に`Hello Vue`が埋め込まれる。
ここで埋め込まれる値はプレーンテキストなので、例えば`value`に`<span style="color:red">'Hello Vue!</span>`を代入しても、spanタグごと描画される。

### コンソール
```
app.value = "Goodbye Vue!"
```
これで描画された`Hello Vue!`が`Goodbye Vue!`に切り替わる。

## v-htmlディレクティブ
データをHTMLとして埋め込みたい場合は、v-htmlディレクティブを利用する。

### HTML
```html
<div id="test">
    <div><span v-html="value"></span></div>
</div>
```

### JS
```Javascript
var app = new Vue({
    el: '#test',
    data: {
      value: "<span style='color:red'>'Hello Vue!</span>",
    }
})
```

## v-bindディレクティブ
属性を埋め込む場合は、v-bindディレクティブを使う。

```html
<style>
    .red {
        color:"red"
    }
</style>
<div id="test">
    <div v-bind:class="value"></div>
</div>
```

### JS
```Javascript
var app = new Vue({
    el: '#test',
    data: {
      value: "red",
    }
})
```

## 式がかける
```html
<div id="test">
    <div>{{ value + 10 }}</div>
</div>
```

### JS
```Javascript
var app = new Vue({
    el: '#test',
    data: {
      value: 10,
    }
})

```

20が描画される。

## 省略
### v-bindは:で省略できる
#### 省略前
```html
<div v-bind:class="value></div>
```
#### 省略後
```html
<div :class="value></div>
```

### v-onは@で省略できる
```html
<div v-on:click="do></div>
```
#### 省略後
```html
<div @click="do></div>
```

