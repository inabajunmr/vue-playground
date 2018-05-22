// Definition components
// Task
Vue.component('task', {
    props:["title", "done"],
    template: `
    <div class="row task">
        <div class="1 col"><button class="btn" v-bind:class="{ done : done, primary : !done }">DONE</button></div>
        <div class="1 col"><button class="btn">Edit</button></div>
        <div class="1 col"><button class="btn">Delete</button></div>
        <div class="11 col"><h4>{{ title }}<hr v-bind:class="{ done : done }"></h4></div>
    </div>`
})

// Card
Vue.component('card', {
    props:["title", "tasks"],
    template: `
    <div class="card">
    <div class="row">
        <div class="11 col"><h4>{{ title }}</h4></div>
        <div class="1 col"><button class="btn primary">Add task</button></div>
        <div class="1 col"><button class="btn primary">Remove Card</button></div>
    </div>
    <task v-for='task in tasks' v-bind:title="task.title" v-bind:done="task.done"></task>
    </div>`
})

// Vue
vm = new Vue({ 
    el: '#components-todo',
    data: {
        cards: [
            {
                tasks: [
                    {title:"クレカ止める", done: true},
                    {title:"再発行する", done: false}
                ],
                title: "クレカ無くした"
            },
            {
                tasks: [
                    {title:"いっぱい頑張る", done: false},
                    {title:"すごい頑張る", done: false}
                ],
                title: "頑張る"
            }
    ]
      }
})
  
  