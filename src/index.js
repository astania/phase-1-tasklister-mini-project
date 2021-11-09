document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector('#create-task-form').addEventListener('submit', (e) =>{
    e.preventDefault()
    createToDo(e.target.querySelector('#new-task-description').value)

  })


});

function createToDo(todo){
  let p = document.createElement('ol')
  let btn = document.createElement('button')
  p.textContent = `${todo} `
  btn.textContent = 'x'
  btn.addEventListener('click', handleDelete)
  // document.querySelector('#tasks').appendChild(p)
  p.appendChild(btn)
  let selectorValue = document.querySelector("#create-task-form > select").value;
  if(selectorValue === "chores"){
    let choresList = document.createElement('h4')
    document.querySelector('#tasks').appendChild(choresList)
    choresList.textContent = "Chores to do:"
    choresList.appendChild(p)
  } else if (selectorValue === "school"){
    let choresList = document.createElement('h4')
    document.querySelector('#tasks').appendChild(choresList)
    choresList.textContent = "Schoolwork to do:"
    choresList.appendChild(p)
  } 
  else if (selectorValue === "pet"){
    let choresList = document.createElement('h4')
    document.querySelector('#tasks').appendChild(choresList)
    choresList.textContent = "Pets to do:"
    choresList.appendChild(p)
  } 
  else if (selectorValue === "coding"){
    let choresList = document.createElement('h4')
    document.querySelector('#tasks').appendChild(choresList)
    choresList.textContent = "Coding to do:"
    choresList.appendChild(p)
  } 
  else if (selectorValue === "fun"){
    let choresList = document.createElement('h4')
    document.querySelector('#tasks').appendChild(choresList)
    choresList.textContent = "Fun stuff to do:"
    choresList.appendChild(p)
  } 
}

function handleDelete(e){
  e.target.parentNode.remove()
}
