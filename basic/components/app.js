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

Vue.component('post', {
  props:["value"],
  template: `<li>{{ value }}</li>`
})


Vue.component('postx', {
  props:["value1", "value2"],
  template: `<li>{{ value1 }}, {{ value2 }}</li>`
})

Vue.component('emittion', {
  template: `<button v-on:click="$emit('emittion')">EMIT</button>`,
})

Vue.component('emittion2', {
  template: `<button v-on:click="$emit('emittion2', 100)">EMIT</button>`,
})

Vue.component('emittion3', {
  template: `<button v-on:click="$emit('emittion3', 100, 200)">EMIT</button>`,
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})

Vue.component('slot-sample', {
  template: `
  <div>
    <p><slot></slot></p>
  </div> 
  `
})

Vue.component('A', {
  template: `
  <div>A</div> 
  `
})

Vue.component('B', {
  template: `
  <div>B</div> 
  `
})


Vue.component('trComponent', {
  template: `
  <tr><td>a</td><td>a</td><td>a</td><td>a</td><tr>
  `
})

vm = new Vue({ 
  el: '#components-demo',
  data: {
    posts:[
      {title:"post1", value:"value1"},
      {title:"post2", value:"value2"},
      {title:"post3", value:"value3"}
    ],
    count : 0,
    text: "",
    customValue: "",
    componentOpts: ""
  },
  methods: {
    echo: function(){
      alert("AAA");
    },
    emittionMethod :function(value1, value2){
      alert(value1);
      alert(value2);
    },
    changeA: function(){
      this.componentOpts = "A"
    },
    changeB: function(){
      this.componentOpts = "B"
    }
  },
  computed: {
    selectComponent: function(){
      return this.componentOpts;
    }
  }
}
)

