// Definition components
// Task
Vue.component('task', {
    props:["task", "card"],
    template: `
    <div class="row task">
        <div class="1 col"><button class="btn" v-bind:class="{ done : task.done, primary : !task.done }" @click="ttask.done=!ttask.done">DONE</button></div>
        <div class="1 col"><button class="btn" @click="deleteTask">Delete</button></div>
        <div class="11 col" v-show="!edit" @click="edit=!edit"><h4>{{ task.title }}<hr v-bind:class="{ done : task.done }"></h4></div>
        <div class="11 col" v-show="edit"><input class="card w-100" v-model="ttask.title" @blur="edit=!edit"><hr v-bind:class="{ done : task.done }"></div>
    </div>`,
    data: function() {
        return {
            ttask: this.task,
            tcard: this.card,
            edit: (this.task.title == '')
        }
    },
    methods: {
        deleteTask: function() {
            this.tcard.tasks.splice(this.tcard.tasks.indexOf(this.ttask), 1);
        }
    }
})

// Card
Vue.component('card', {
    props:["card", "cards"],
    template: `
    <div class="card">
    <div class="row">
        <div class="11 col" v-show="!edit" @click="edit=!edit"><h4>{{ card.title }}</h4></div>
        <div class="11 col" v-show="edit"><input class="card w-100" v-model="tcard.title" @blur="edit=!edit"></div>
        <div class="1 col"><button class="btn primary" @click="addTask">Add task</button></div>
        <div class="1 col"><button class="btn primary" @click="deleteCard">Remove Card</button></div>
    </div>
    <task v-for='task in card.tasks' v-bind:card="card" v-bind:task="task" :key="task.id"></task>
    </div>`,
    data: function() {
        return {
            tcard: this.card,
            tcards: this.cards,
            edit: (this.card.title == '')
        }
    },
    methods: {
        addTask: function() {
            this.tcard.tasks.unshift({title:"", done: false, id: taskId++})
        },
        deleteCard: function() {
            this.tcards.splice(this.tcards.indexOf(this.tcard), 1);
        }
    }
})

var taskId = 0;
var cardId = 0;

// Vue
vm = new Vue({ 
    el: '#components-todo',
    data: {
        cards: [
            {
                tasks: [
                    {title:"クレカ止める", done: true, id: taskId++},
                    {title:"再発行する", done: false, id: taskId++}
                ],
                title: "クレカ無くした",
                id: cardId++
            },
            {
                tasks: [
                    {title:"いっぱい頑張る", done: false, id: taskId++},
                    {title:"すごい頑張る", done: false, id: taskId++}
                ],
                title: "頑張る",
                id: cardId++
            }
        ]
      },
    methods: {
        addCard: function() {
            this.cards.unshift({
                tasks: [{title:"", done: false, id: taskId++}],
                title: "",
                id: cardId++
            })
        }
    }
})
  
  