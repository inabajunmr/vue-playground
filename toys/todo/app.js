// Definition components
// Task
Vue.component('task', {
    props:["title"],
    template: `
    <div class="row task">
        <div class="11 col"><h4>{{ title }}</h4></div>
        <div class="1 col"><button class="btn primary">Add task</button></div>
        <div class="1 col"><button class="btn primary">Remove Card</button></div>
    </div>`
})

// Card
Vue.component('card', {
    props:["title"],
    template: `
    <div class="card">
    <div class="row">
        <div class="11 col"><h4>{{ title }}</h4></div>
        <div class="1 col"><button class="btn primary">Add task</button></div>
        <div class="1 col"><button class="btn primary">Remove Card</button></div>
    </div>
    <task></task>
    </div>`
})

// Vue
vm = new Vue({ 
    el: '#components-todo',
    data: {
    }
})
  
  