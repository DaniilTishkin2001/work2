const inputElement  = document.getElementById("title")
const createBtn  = document.getElementById("create")
const listElement  = document.getElementById("list")

function toLocal() {
    let todos = listElement.innerHTML
    localStorage.setItem("todos",todos)
}
// console.log(inputElement.value)

// const notes = ["Запись один первоначальная","вторая запись", "третья запись"]

const notes = [
    {
        title:"Запись один первоначальная",
        completed:false,
        
    },
    {
        title:"Запись вторая",
        completed:true,
    },
]

function render() {
    listElement.innerHTML = ""
    
    if (notes.length === 0) {
        listElement.innerHTML = "<p>Нет элементов</p>"
    }
    for ( let i = 0; i< notes.length; i++) {
        listElement.insertAdjacentHTML("beforeend",getNoteTempate(notes[i], i))

    }   

    
}

render()

createBtn.onclick = function() {

    if (inputElement.value.length === 0) {
        return 
    }
    const newNote = {
        title:inputElement.value,
        completed:false
    }
    // listElement.insertAdjacentHTML("beforeend",getNoteTempate(newNote))
    notes.push(newNote)
    render()
    inputElement.value = ""
    toLocal()
}


listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === "toggle") {
            notes[index].completed = !notes[index].completed 
            
            toLocal()
        } else if (type === "remove") {
            notes.splice(index,1)
            toLocal()
        }
        render()
    }
}

function getNoteTempate(notes, index) {
    
    return `
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="${notes.completed ? 'text-decoration-line-through' : ''}">${notes.title}</span>
          <span>
            <span class="btn btn-small btn-${notes.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index=${index} data-type="remove">&times;</span>
          </span>
        </li>
        `
        
}

if (localStorage.getItem("todos")) {
    listElement.innerHTML = localStorage.getItem("todos")
}

