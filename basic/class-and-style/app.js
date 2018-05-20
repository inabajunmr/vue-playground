var vm = new Vue({
  el: '#app',
  data:{
    isNo : true,
    isYes : true
  }
})

var vm2 = new Vue({
  el:'#app2',
  data:{
    classObj:{
      yes: true,
      no: true
    }
  }
})

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

var vm4 = new Vue({
  el:'#app4',
  data:{
    yesClass: "yes",
    noClass: "no",
    isHello: false,
    isActive :true
  }
})

var vm5 = new Vue({
  el:'#app5',
  data:{
    activeColor: 'red',
    fontSize: 30
  }
})
