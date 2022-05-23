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
                isDone: true,
            },
            {
                text: "Portare a spasso il cane",
                isDone: true,
            }
        ]
    }
})