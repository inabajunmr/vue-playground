# クラスとスタイルのバインディング
## オブジェクト構文

クラスを切り替えられる。複数もいける。

### HTML
```html
    <div id="app" v-bind:class="{yes: isYes, no: isNo}">TEST</div>
```

### JS
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    isNo : true,
    isYes : true
  }
})
```

### 最終的に描画されるHTML
```html
    <div id="app" class="yes no">TEST</div>
```

### isYes, isNoを変えるとclassも更新される

#### コンソール
```
vm.isNo = false
```

#### 更新後描画されるHTML
```html
    <div id="app" class="yes">TEST</div>
```

## これでもいける
### HTML
```html
    <div id="app2" v-bind:class="classObj">TEST</div>    
```

### JS
```javascript
var vm2 = new Vue({
  el:'#app2',
  data:{
    classObj:{
      yes: true,
      no: true
    }
  }
})
```

このケースどうやって更新すればいいんだ？

## 算出プロパティをバインド
### HTML
```html
    <div id="app3" v-bind:class="classObj2">TEST</div>
```

### JS
```javascript
var vm3 = new Vue({
  el:'#app3',
  data:{
    isYes: true,
    isNo: true
  },
  computed: {
    classObj2: function(){
      return {
        yes: this.isYes, no: this.isNo
      }
    }
  }
})
```

これなら更新できる。

## 配列構文

### HTML
```html
    <div id="app4" v-bind:class="[yesClass, noClass, isHello ? 'hello' : 'goodbye', { active: isActive }]">TEST</div>    
```
三項演算子が使える。オブジェクト構文も使える。

### JS
```javascript
var vm4 = new Vue({
  el:'#app4',
  data:{
    yesClass: "yes",
    noClass: "no",
    isHello: false,
    isActive: true
  }
})
```

### 描画されるHTML
```html
    <div id="app4" v-bind:class="yes no goodbye active">TEST</div>    
```

## v-bind:style向けのオブジェクト構文
### HTML
```html
    <div id="app5" :style="{ color: activeColor, fontSize: fontSize + 'px' }">TEST</div>
```

### JS
```javascript
var vm5 = new Vue({
  el:'#app5',
  data:{
    activeColor: 'red',
    fontSize: 30
  }
})
```


```
vm5.fontSize = 100
```
で動的にフォントサイズを変更したりとか。