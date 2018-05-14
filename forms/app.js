var vm = new Vue({
  el: '#app',
  data:{
    test: "",
    check: true
  },
  computed:{
    checkedValue: function() {
      return this.check ? "YES" : "NO";
    }
  }
})

