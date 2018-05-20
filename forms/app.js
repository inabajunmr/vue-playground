var vm = new Vue({
  el: '#app',
  data:{
    test: "",
    lazytest: "",
    check: true,
    picked: "Default"
    
  },
  computed:{
    checkedValue: function() {
      return this.check ? "YES" : "NO";
    }
  }
})

