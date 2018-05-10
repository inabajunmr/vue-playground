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


// TODO イベント修飾子
