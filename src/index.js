document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector('#create-task-form').addEventListener('submit', (e) =>{
    e.preventDefault()
    createToDo(e.target.querySelector('#new-task-description').value)

  })
});
  //Home chores
  let homeChoresList = document.createElement('h4')
  homeChoresList.textContent = "Chores to do:"

  //school chores 
  let schoolChoresList = document.createElement('h4')
  schoolChoresList.textContent = "Schoolwork to do:"
  

  //pet chores
  let petChoresList = document.createElement('h4')
  petChoresList.textContent = "Pet chores to do:"
  

  //coding chores
  let codingChoresList = document.createElement('h4')
  codingChoresList.textContent = "Coding to do:"
  

  //fun chores
  let funChoresList = document.createElement('h4')
  funChoresList.textContent = "Fun stuff to do:"
  

  //create to do items and content
  function createToDo(todo){
  let toDoItem = document.createElement('ol')
  let btn = document.createElement('button')
  toDoItem.textContent = `${todo} `

  //create button, content, and delete event listener
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  toDoItem.appendChild(btn)

  //define selector value, create to do item category headers, add them to the DOM
  let selectorValue = document.querySelector("#create-task-form > select").value;
  


  //add chore items to each category header, depending on selector value
  if(selectorValue === "chores"){
    document.querySelector('#tasks').appendChild(homeChoresList)
    homeChoresList.appendChild(toDoItem)
  } 
  else if (selectorValue === "school"){
    document.querySelector('#tasks').appendChild(schoolChoresList)
    schoolChoresList.appendChild(toDoItem)
  } 
  else if (selectorValue === "pet"){
    document.querySelector('#tasks').appendChild(petChoresList)
    petChoresList.appendChild(toDoItem)
  } 
  else if (selectorValue === "coding"){
    document.querySelector('#tasks').appendChild(codingChoresList)
    codingChoresList.appendChild(toDoItem)
  } 
  else if (selectorValue === "fun"){
    document.querySelector('#tasks').appendChild(funChoresList)
    funChoresList.appendChild(toDoItem)
  } 
}

function handleDelete(e){
  e.target.parentNode.remove()
}

// function createToDo(todo){
//   let p = document.createElement('ol')
//   let btn = document.createElement('button')
//   p.textContent = `${todo} `
//   btn.textContent = 'x'
//   btn.addEventListener('click', handleDelete)
//   // document.querySelector('#tasks').appendChild(p)
//   p.appendChild(btn)
//   let selectorValue = document.querySelector("#create-task-form > select").value;
//   if(selectorValue === "chores"){
//     let choresList = document.createElement('h4')
//     document.querySelector('#tasks').appendChild(choresList)
//     choresList.textContent = "Chores to do:"
//     choresList.appendChild(p)
//   } else if (selectorValue === "school"){
//     let choresList = document.createElement('h4')
//     document.querySelector('#tasks').appendChild(choresList)
//     choresList.textContent = "Schoolwork to do:"
//     choresList.appendChild(p)
//   } 
//   else if (selectorValue === "pet"){
//     let choresList = document.createElement('h4')
//     document.querySelector('#tasks').appendChild(choresList)
//     choresList.textContent = "Pets to do:"
//     choresList.appendChild(p)
//   } 
//   else if (selectorValue === "coding"){
//     let choresList = document.createElement('h4')
//     document.querySelector('#tasks').appendChild(choresList)
//     choresList.textContent = "Coding to do:"
//     choresList.appendChild(p)
//   } 
//   else if (selectorValue === "fun"){
//     let choresList = document.createElement('h4')
//     document.querySelector('#tasks').appendChild(choresList)
//     choresList.textContent = "Fun stuff to do:"
//     choresList.appendChild(p)
//   } 
// }