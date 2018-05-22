// Definition components
// Task
Vue.component('task', {
    props:["task"],
    template: `
    <div class="row task">
        <div class="1 col"><button class="btn" v-bind:class="{ done : task.done, primary : !task.done }" @click="ttask.done=!ttask.done">DONE</button></div>
        <div class="1 col"><button class="btn" @click="edit=!edit">Edit</button></div>
        <div class="1 col"><button class="btn">Delete</button></div>
        <div class="11 col" v-show="!edit"><h4>{{ task.title }}<hr v-bind:class="{ done : task.done }"></h4></div>
        <div class="11 col" v-show="edit"><input class="card w-100" v-model="ttask.title"><hr v-bind:class="{ done : task.done }"></div>
    </div>`,
    data: function() {
        return {
            ttask: this.task,
            edit: false
        }
    }
})

// Card
Vue.component('card', {
    props:["card"],
    template: `
    <div class="card">
    <div class="row">
        <div class="11 col"><h4>{{ card.title }}</h4></div>
        <div class="1 col"><button class="btn primary">Add task</button></div>
        <div class="1 col"><button class="btn primary">Remove Card</button></div>
    </div>
    <task v-for='task in card.tasks' v-bind:task="task" :key="task.id"></task>
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
  
  