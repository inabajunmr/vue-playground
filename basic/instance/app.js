var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch はインスタンスメソッドです
vm.$watch('a', function (newValue, oldValue) {
   // このコールバックは `vm.a` の値が変わる時に呼ばれます
   console.log("newValue")
})


new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` は vm インスタンスを指します
      console.log('a is: ' + this.a)
    }
  })