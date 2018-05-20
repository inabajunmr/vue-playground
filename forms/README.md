# フォーム入力バインディング
## テキスト
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    test: ""
  },
  computed:{
  }
})
```

```html
        <input v-model="test">
        <p>INPUT:{{ test }}</p>
```
inputの入力値がtestにバインディングされる。textareaも同じ。

formのvalue、checked、selectedの処理値はバインディングされない。Vueインスタンスのdataとして扱う必要がある。

## checkbox
```javascript
  computed:{
    checkedValue: function() {
      return this.check ? "YES" : "NO";
    }

```

```html
        <input type="checkbox" v-model="check">
        <p>{{ checkedValue }}</p>
```

チェックしてる時はYES、してないときはNO。

## radio
```html
        <input type="radio" v-model="picked" value="Test1"/>
        <input type="radio" v-model="picked" value="Test2"/>
        <p>RADIO: {{ picked }}</p>
```

```javascript
  data:{
    test: "",
    check: true,
    picked: "Default"
    
  }
```

## lazy
```html
        <input v-model="test">
        <p>INPUT:{{ test }}</p>
```

lazyをつけると`input`インベントではなく`change`イベントのタイミングでバインドされる。
