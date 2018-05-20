# コンポーネントの基本
## 基本

```javascript
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<button v-on:click="countup">You clicked me {{ count }} times.</button>`,
  methods : {
    countup :function(){
      this.count++;
    }
  }
})

new Vue({ el: '#components-demo' })

```

```html
    <div id="components-demo">
            <button-counter></button-counter>
            <button-counter></button-counter>
    </div>
```

以下のようにコンポーネント定義すると、グローバルな領域に`button-counter`コンポーネントが定義される。
グローバルなのであらゆるVueインスタンスでこのコンポーネントが利用できる。
```javascript
Vue.component('button-counter', {

})
```

複数箇所で利用可能で、利用するたびにコンポーネントのインスタンスが再作成されるため、同じ定義のコンポーネント間でスコープは別となる。

`data`はfunctionで定義する必要がある。
（これによってコンポーネントのインスタンスごとにdataのインスタンスを別にしてる？）

## props
```javascript
Vue.component('post', {
  props:[value],
  template: `<li>{{ value }}</li>`
})

new Vue({ el: '#components-demo' })
```

```html
    <div id="components-demo">
            <button-counter></button-counter>
            <button-counter></button-counter>
        <ul>
            <post value="post1"></post>
            <post value="post2"></post>
            <post value="post3"></post>
        </ul>
     </div>
```
postコンポーネントからvalueの値を参照できる。

v-bindを使うと動的に値を渡せる。

```javascript
Vue.component('postx', {
  props:["value1", "value2"],
  template: `<li>{{ value1 }}, {{ value2 }}</li>`
})

new Vue({ 
  el: '#components-demo',
  data: {
    posts:[
      {title:"post1", value:"value1"},
      {title:"post2", value:"value2"},
      {title:"post3", value:"value3"}
    ]
  }
})
```
```html
    <div id="components-demo">
        <ul>
            <postx v-for="post in posts" v-bind:value1="post.title" v-bind:value2="post.value"></postx>
        </ul>
     </div>
```

## emit
```html
    <div id="components-demo">
        <div>
            <emittion v-on:emittion="count++"></emittion>
            {{ count }}
        </div>
     </div>
```

```javascript
Vue.component('emittion', {
  template: `<button v-on:click="$emit('emittion')">EMIT</button>`,
})

vm = new Vue({ 
  el: '#components-demo',
  data: {
    count : 0
  },
})
```

親コンポーネントのスコープでイベントを発火できる？いまいちわかってない。関数ではなく**イベント**を発火できる。
以下はだめ。（これがわからん）

```html
    <div id="components-demo">
        <div v-on:emittion="count++">
            <emittio></emittion>
            {{ count }}
        </div>
     </div>
```

## emitで値を送る
```html
        <div>
            <emittion2 v-on:emittion2="count += $event"></emittion>
        </div>
        
```

```javascript
Vue.component('emittion2', {
  template: `<button v-on:click="$emit('emittion2', 100)">EMIT</button>`,
})

```

`$emit`の第二引数に指定した値を親コンポーネントの$eventで参照できる。

```javascript
Vue.component('emittion3', {
  template: `<button v-on:click="$emit('emittion3', 100)">EMIT</button>`,
})

vm = new Vue({ 
  el: '#components-demo',
  methods: {
    emittionMethod :function(value){
      alert(value);
    }
  }
}
```
```html
        <div>
            <emittion3 v-on:emittion3="emittionMethod"></emittion>
        </div>

```

この場合emittionMehtodの引数に100が代入される。

以下のように複数も渡せる。

```javascript
Vue.component('emittion3', {
  template: `<button v-on:click="$emit('emittion3', 100, 200)">EMIT</button>`,
})

vm = new Vue({ 
  el: '#components-demo',
  methods: {
    emittionMethod :function(value1, value2){
      alert(value1);
      alert(value2);
    }
  }
})
```

## コンポーネントにおけるv-model
```html
        <custom-input v-model="customValue"></custom-input>
        {{ customValue }}
```
```javascript
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

```
これで`v-model`が動作する。（この場合の`v-model`は以下のシンタックスシュガーになるのかな？）
```html
        <custom-input v-bind:value="customValue" @input="customValue = $event"></custom-input>
        {{ customValue }}
```
要するにvalueをバインドしてinputイベントに入力値をemitしている。


## slot
```javascript
Vue.component('slot-sample', {
  template: `
  <div>
    <p><slot></slot></p>
  </div> 
  `
})
```
```html
        <slot-sample>SLOT!</slot-sample>
```
カスタム要素の子要素を<slot>の値として利用できるだけ？


## v-bind:isによるコンポーネントの切り替え