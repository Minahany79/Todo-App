class Todo {
    constructor() {

        this.addBtn = document.querySelector(".add");
        this.taskInpt = document.querySelector(".task-input");
        this.totalTasks = document.querySelector(".total-tasks");
        this.editBtn = document.querySelector(".edite");
        this.eTarget;
        this.taskInpt.focus();
        this.addBtn.addEventListener("click", this.addTask.bind(this));
        this.taskList = document.querySelector(".taskEle");
        this.editBtn.addEventListener('click', this.changeText.bind(this))

    }



    addTask() {
        let task = this.taskInpt.value;
        if (task == "") {
            document.querySelector(".alert").classList.remove("visually-hidden");
        }
        else {
            document.querySelector(".alert").classList.add("visually-hidden");
            let div = document.createElement("div");
            div.classList.add("taskEle", "position-relative");
            let updateBtn = document.createElement("button");
            updateBtn.classList.add("ctrl", "update", "btn", "btn-warning");
            updateBtn.append(document.createTextNode("Update"));
            let taskP = document.createElement("p");
            taskP.classList.add("task-name");
            let deleteBtn = document.createElement("button");
            deleteBtn.append(document.createTextNode("Delete"));
            deleteBtn.classList.add("ctrl", "delete", "btn", "btn-danger");
            let taskTxt = document.createTextNode(task);
            taskP.append(taskTxt);
            div.append(updateBtn);
            div.append(deleteBtn);
            div.append(taskP);
            document.querySelector(".task-list").append(div);
            this.increamentTotalTasks();
            this.reset();
            deleteBtn.addEventListener("click", this.deleteTask.bind(this))
            updateBtn.addEventListener("click", this.updateTask.bind(this))
            taskP.addEventListener("click", this.compeleteTask.bind(this))
        }

    }

    compeleteTask(e) {
        if (e.target.style[0] == undefined) {
            document.querySelector(".completed").innerHTML++;
            e.target.style.textDecoration = "line-through";
        }
    }

    updateTask(e) {
        this.eTarget = e;
        document.querySelector(".alert").classList.add("visually-hidden");
        document.querySelector(".add").classList.add("visually-hidden");
        this.editBtn.classList.remove("visually-hidden");
        document.querySelector(".task-input").value = e.target.parentNode.lastChild.innerHTML;

    }

    changeText() {
        console.log("change")
        this.eTarget.target.parentNode.lastChild.innerHTML = this.taskInpt.value;
        this.addBtn.classList.remove("visually-hidden");
        this.editBtn.classList.add("visually-hidden");
        this.taskInpt.value = "";
        this.taskInpt.focus();
    }

    deleteTask(e) {
        document.querySelector(".alert").classList.add("visually-hidden");
        e.target.parentElement.remove();
        document.querySelector(".total-tasks").innerHTML--
        if (document.querySelector(".total-tasks").innerHTML == 0) {
            document.querySelector(".noTasks").classList.remove("visually-hidden");
        }

        if (e.target.parentNode.lastChild.style.textDecoration == "line-through") {
            document.querySelector(".completed").innerHTML--;
        }

    }

    increamentTotalTasks() {
        this.totalTasks.innerHTML++;
    }

    reset() {
        this.taskInpt.value = "";
        document.querySelector(".noTasks").classList.add("visually-hidden");
        this.taskInpt.focus();
    }

}

const todo = new Todo();