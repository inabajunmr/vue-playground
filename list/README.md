
# 条件付きレンダリング
## v-forディレクティブ
配列の要素数だけ反復する。

### JS
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    items : [
      {name : 'item1'},
      {name : 'item2'},
    ]
  }
})

```

### HTML
```html
    <div id="app">
        <li v-for="item in items">{{ item.name }}</li>
    </div>
```

itemにitemsの各要素が代入され参照できる。
`in`は`of`でも良い。違いはよくわからない。

### インデックスの参照
v-forの第二引数でインデックスを参照できる。
#### HTML
```
    <div id="app">
        <li v-for="(item, index) in items">名前:{{ item.name }} インデックス:{{ index }}</li>
    </div>
```

### 配列じゃなくてオブジェクトのプロパティに対しても反復できる
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    item: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    }

  }
})

```
```html
            <li v-for="(val, key, index) in item">名前:{{ val }} キー:{{ key }} インデックス:{{ index }}</li>
```

この場合`v-for`の第二引数はキーの名前になる。第三引数はインデックス。インデックスの順序は保証されない。

## key
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    items : [
      {name : 'item1', id:1},
      {name : 'item2', id:2},
    ]
  }
})

```

```html
<li v-for="(item) in items">名前:{{ item.name }}<input></li>                
```
このときitem.name=item1の`input`要素に何か入力した状態で、`vm.items.unshift({name:"item3", id:"3"})`すると、`item3`のlistの`input`に値が入力された状態になる。

```html
<li v-for="(item) in items" :key="item.id">名前:{{ item.name }}<input></li>                

```
とすると、子要素とkeyがセットで管理される？ので、`vm.items.unshift({name:"item3", id:"3"})`したあとも`item1`の`input`に値が入力された状態が保たれる。

 * 配列に対する破壊的なメソッドに対して描画は追跡される。
 * 配列の変数に別の配列を代入した際に、配列に同じオブジェクトが含まれている場合、リスト全体の再描画にならない。
 * 配列のインデックスを指定して要素を変更したとき、Vueは変更を検出できない。
 * 配列の長さを変更したとき、Vueは変更を検出できない。

 ## プロパティの追加
 ルートレベルのプロパティを追加することはできない。
 ```html
<div>{{ newValue }}</div>
```
にたいして、vm.newValue = "value"とかやってもだめ。

すでにあるプロパティに要素を追加することはできる。
```javascript
var vm = new Vue({
  el: '#app',
  data:{
    nest: {      
    }
  }
})

```
```html
            <div>{{ nest.value }}</div>
```
で、`Vue.set(vm.nest, "value", "aaaa")`を実行すると、`aaaa`が描画される。
`vm.$set(vm.nest, "value", "aaaa")`でもいい（エイリアス）。

## 配列を返す算出プロパティによるループ

```javascript
var vm = new Vue({
  el: '#app',
  data:{
    filterValues:[1,2,3,4,5]
  },
  computed:{
    filterNumbers : function() {
      return this.filterValues.filter(function(number){
        return number < 4;
      })
    }
  }
})
```

```html
<li v-for="num in filterNumbers">{{ num }}</li>
```

1,2,3がnumに代入される。

## 範囲つきv-for
```html
<li v-for="num in 100">{{ num }}</li>
```

1〜100までがnumに代入される。

## テンプレートのv-for
```html
            <template v-for="item in items">
                <li>{{ item.id }}</li>
                <li>{{ item.name }}</li>
            </template>
```

```javascript
  data:{
    items : [
      {name : 'item1', id:1},
      {name : 'item2', id:2},
    ]
  }
```

## v-forのループでに対して毎回v-ifが判定される
```html
            <template v-for="item in items" v-if="item.id === 1">
                <li>{{ item.id }}</li>
                <li>{{ item.name }}</li>
            </template>
```
v-forで格納されたitemに対して毎回判定がかかる。