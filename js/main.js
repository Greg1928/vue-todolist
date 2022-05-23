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
               
                


            }
        },
    }
    
})

