# 条件付きレンダリング
## v-onディレクティブ
```html
    <div id="app">
        <button v-on:click="counter += 1"></button>
        <span>{{ counter }}</span>
    </div>
```

```javascript
var vm = new Vue({
  el: '#app',
  data:{
    counter:1
  }
})
```
v-onに指定したイベントに対して関数が発火する。

## メソッド呼び出し
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    counter:1
  },
  methods:{
    call: function(event){
      alert("PeeHoo!");
      if(event) {
        alert(event.target.tagName);
        alert(event.shiftKey);
      }
    }
  }
})
```

```html
        <button v-on:click="call">Call</button>
```

[Eventインターフェース](https://developer.mozilla.org/ja/docs/Web/API/Event)

## 引数を指定
```html
        <button v-on:click="echo('PeeHoo')">Echo</button>
```
```javascript
var vm = new Vue({
  el: '#app',
  methods:{
    echo:function(value) {
      alert(value);
    }
  }
})
```

イベントオブジェクトを参照したい場合は`$event`

```html
        <button v-on:click="echo('PeeHoo', $event)">Echo</button>
```
```javascript
var vm = new Vue({
  el: '#app',
  methods:{
    echo:function(value, event) {
      alert(value);
      alert(event.shiftKey);
    }
  }
})
```

## イベント修飾子
```html
        <ul @click="echo('pee')">
            <li @click="echo('hoo')">list1</li>
            <li @click.stop="echo('hoo')">list2</li>
            <li @click.capture="echo('hoo')">list3</li>
        </ul>
```
`@click.stop`によって伝播が止まるためlist2はpeeが出力されない。（list1はhooもpeeも出力）

```html
        <ul @click.capture="echo('pee')">
            <li @click="echo('hoo')">list1</li>
        </ul>
```
`@click.capture`によってcaptureイベントが先に実行される。

[キャプチャ/バブリングについての参考](https://qiita.com/hosomichi/items/49500fea5fdf43f59c58)

## キー修飾子
```html
        <input @keyup.enter="echo('pee')">
```

フォームがフォーカスされてる状態でEnterを押すと発火する。