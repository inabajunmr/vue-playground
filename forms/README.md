# フォーム入力バインディング
## input
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