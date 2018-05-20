var vm = new Vue({
  el: '#app',
  data:{
    counter:1
  },
  methods:{
    call: function(event){
      alert("PeeHoo!");
      if(event) {
        alert(event.target.tagName);
        alert(event.shiftKey);
      }
    },
    echo:function(value, event) {
      alert(value);
      alert(event.shiftKey);      
    }
  }
})

