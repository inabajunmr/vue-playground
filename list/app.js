var vm = new Vue({
  el: '#app',
  data:{
    items : [
      {name : 'item1', id:1},
      {name : 'item2', id:2},
    ],
    item: {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    },
    test:"test",
    nest: {

    },
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

