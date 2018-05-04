# 算出プロパティとウォッチャ

## 算出プロパティ

テンプレートにロジックを持たせすぎるとカオスになる。
算出プロパティを使う。

### HTML
```html
    <div id="app">
        <li>{{ message }}</li>
        <li>{{ reverse }}</li>
    </div>
```

### JS
```javascript
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    computed: {
      reverse: function () {
        return this.message.split('').reverse().join('')
      }      
    }
})
```

### コンソール
```
>app.reverse
<"!euV olleH"
```

computedの配下に関数を定義すると、テンプレートの中で関数を呼び出し、戻り値を取得できる。
関数内のthisはVueインスタンスそのものを指す。

上記の`reverse`の結果はキャッシュされており、依存している変数が変更されない限り再評価されない。

メソッド呼び出しの場合は毎回式が評価されるのが違い。


## 監視プロパティ
watchプロパティに指定した値が変更された時に実行される処理を定義できる。
変数の変更をトリガーに何かをキックした算出プロパティで、画面からの入力をトリガーにしたい場合は監視プロパティという理解でいいのかな？

### HTML
```html
    <div id="app">
        <li>{{ message }}</li>
    </div>
```

### JS
```javascript
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    watch: {
      message: function () {
        console.log("AFTER:" this.message);
      }      
    }
})
```

watchに定義した関数の第一引数で変更前、第二引数で変更後の値を参照できる。

### コンソール
```
>app.message= "CHANGE MESSAGE"
<"CHANGE MESSAGE"
```

## 算出 Setter 関数
算出プロパティはデフォルトでGetterなので、プロパティの呼び出し時に関数が呼び出されるが、プロパティに値をセットした時に呼び出すこともできる。
（要するにするに引数持たせられるだけ？）

### HTML
```html
    <div id="app">
        <li>{{ message }}</li>
        <li>{{ reverse }}</li>
    </div>
```

### JS
```javascript
var app = new Vue({
    el: '#app',
    data: {
      firstName: "jun",
      lastNmae: "inaba"
    },
    computed: {
      fullName: {
          get: function(){
              return this.firstName + " " + this.lastName;
          },
          set: function(value) {
              var splitName = value.split(" ");
              this.firstName = splitName[0];
              this.lastName = splitName[1];
          }
        }
      }
    }
})
```

### コンソール
```
>app.fullName
<jun inaba

>app.fullName = "sansuke super"
<"sansuke super"
>app.fullName
<"sansuke super"

>app.lastName
<"super"
```