var App = new Vue(
    {
        el: "#root",
        data:{
            todolist:[
                {
                    text: "Andare a fare la spesa",
                    done: true
                },
                {
                    text: "Chiamare il dottore",
                    done: false
                },
                {
                    text: "Controllare le Email",
                    done: false
                },
                {
                    text: "Mettere la benzina nella macchina",
                    done: false
                },
                {
                    text: "Salutare il vicino",
                    done: true
                },
                {
                    text: "Portare fuori la spazzatura",
                    done: false
                },
                {
                    text: "Passare al bar",
                    done: true
                }
            ],
            userInput: ""
        },
        methods:{
            removetodoElement(index){
                this.todolist.splice(index, 1);
            },
            addtodoElement(){
                this.todolist.push({text: this.userInput, done: false});
                this.userInput = "";
            },
            checkElement(index){
                this.todolist[index].done = !this.todolist[index].done;
            }
        },
        mounted(){

        }
    }
)