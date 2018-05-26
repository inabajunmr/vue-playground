`use strict`;

// Definition components
// Task
Vue.component('task', {
    props:["task", "card"],
    template: `
    <div class="row task">
        <div class="1 col"><button class="btn" v-bind:class="{ done : task.done, primary : !task.done }" @click="changeStatus">DONE</button></div>
        <div class="1 col"><button class="btn" @click="deleteTask">Delete</button></div>
        <div class="11 col" v-show="!editable" @click="edit=!edit"><h4>{{ task.title }}<hr v-bind:class="{ done : task.done }"></h4></div>
        <div class="11 col" v-show="editable"><input class="card w-100" v-model="ttask.title" @blur="fixTitle" ref="input"><hr v-bind:class="{ done : task.done }"></div>
    </div>`,
    data: function() {
        return {
            ttask: this.task,
            tcard: this.card,
            edit: false
        }
    },
    methods: {
        deleteTask: function() {
            this.tcard.tasks.splice(this.tcard.tasks.indexOf(this.ttask), 1);
            todo.save();
        },
        fixTitle: function() {
            this.edit=!this.edit;
            todo.save();
        },
        changeStatus: function() {
            this.ttask.done=!this.ttask.done;
            if(this.ttask.title != ''){
                todo.save();
            }

        }
    },
    computed: {
        editable: function(){
            if(this.edit) {
                this.$nextTick(() => this.$refs.input.focus())
                return true;
            }

            if(this.ttask.title == '') {
                this.edit = true;
                return true;
            }

            return this.edit;
        }
    }
})

// Card
Vue.component('card', {
    props:["card", "cards"],
    template: `
    <div class="card" v-bind:class="{ done_card: allAchievement}">
    <div class="row">
        <div class="10 col" v-show="!editable" @click="edit=!edit"><h4>{{ card.title }}</h4></div>
        <div class="10 col" v-show="editable"><input class="card w-100" v-model="tcard.title" @blur="fixTitle" ref="input"></div>
        <div class="1 col"><h4>{{ achievementRate }}</h4></div>
        <div class="1 col"><button class="btn primary" @click="addTask">Add task</button></div>
        <div class="1 col"><button class="btn primary" @click="deleteCard">Remove Card</button></div>
    </div>
    <task v-for='task in card.tasks' v-bind:card="card" v-bind:task="task" :key="task.id"></task>
    </div>`,
    data: function() {
        return {
            tcard: this.card,
            tcards: this.cards,
            edit: false
        }
    },
    methods: {
        addTask: function() {
            this.tcard.tasks.unshift({title:"", done: false, id: uuidv4()});
            // Not persist. Persist by input title.
        },
        deleteCard: function() {
            this.tcards.splice(this.tcards.indexOf(this.tcard), 1);
            todo.save();
        },
        fixTitle: function() {
            this.edit=!this.edit;
            todo.save();
        },
    },
    computed: {
        editable: function(){
            if(this.edit) {
                this.$nextTick(() => this.$refs.input.focus())
                return true;
            }
            
            if(this.tcard.title == '') {
                this.edit = true;
                return true;
            }

            return this.edit;
        },
        achievementRate: function(){
            return this.tcard.tasks.filter(task => task.done).length + "/" + this.tcard.tasks.length;
        },
        allAchievement: function(){
            return this.tcard.tasks.filter(task => task.done).length == this.tcard.tasks.length;
        }
    }
})

startCards = (localStorage.getItem("todo") != null) ? JSON.parse(localStorage.getItem("todo")) : {
    cards: [
        {
            tasks: [
                {title:"クレカ止める", done: true, id: uuidv4()},
                {title:"再発行する", done: false, id: uuidv4()}
            ],
            title: "クレカ無くした",
            id: uuidv4()
        },
        {
            tasks: [
                {title:"いっぱい頑張る", done: false, id: uuidv4()},
                {title:"すごい頑張る", done: false, id: uuidv4()}
            ],
            title: "頑張る",
            id: uuidv4()
        }
    ]
  }

// Vue
vm = new Vue({ 
    el: '#components-todo',
    data: startCards,
    methods: {
        addCard: function() {
            this.cards.unshift({
                tasks: [{title:"", done: false, id: uuidv4()}],
                title: "",
                id: uuidv4()
            })
        }
    }
})

var todo = {};
todo.save = function() {
    // remove card with empty title and no task
    data = JSON.parse(JSON.stringify(vm.$data));
    filteredCards = data.cards.filter(card => (!todo.emptyTitle(card) || card.tasks.filter(task => !todo.emptyTitle(task)).length != 0));

    // remove task without title
    filteredCards.forEach( function(card) {
        card.tasks = card.tasks.filter(task => task.title != '');
        if(card.tasks.length == 0){
            card.tasks = [
                {title:"", done: false, id: uuidv4()}
            ]
        }
    });

    data.cards = filteredCards;
    localStorage.setItem("todo", JSON.stringify(data));
}

todo.emptyTitle = function(data){
    return data.title == '';
}
