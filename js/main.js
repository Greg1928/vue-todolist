const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Fare la spesa",
                isDone: true,
            },
            {
                text: "Fare i compiti",
                isDone: false,
            },
            {
                text: "Portare a spasso il cane",
                isDone: true,
            }
        ],
        newTodo: "",
    },
    methods: {
        addTodo(){
            if(this.newTodo !== ' '){
               let obj = {
                   text: this.newTodo,
                   isDone: false,
               }
               this.todos.push(obj);
               this.newTodo = "";
             }
        },

        removeTodo(i){
            this.todos.splice(i, 1);
        }
    }
})

