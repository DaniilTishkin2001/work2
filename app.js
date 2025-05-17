/* // Теория по массивами

// const array = [1,2,345,67,89]
// // const array = ["a","b","c"]
// // console.log(array.length);

// console.log(array[2])
// console.log(array[array.length-1])

// array[3] = "первый измененный элемент"
// console.log(array)
*/

const inputElement  = document.getElementById("title")
const createBtn  = document.getElementById("create")
const listElement  = document.getElementById("list")

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
}


listElement.onclick = function (event) {
    // console.log(event.target.dataset.type)
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === "toggle") {
            notes[index].completed = !notes[index].completed  
        } else if (type === "remove") {
            notes.splice(index,1)
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



/* Теория по Объектам

// const persoon = {
//     firstname: "Daniil",
//     lastname: "Tishkin",
//     year: "2001",
//     hasGirlfriend:yes,
//     language: [ru,en],
//     getFullName: function() {
//         console.log()
//     }
// }
*/

