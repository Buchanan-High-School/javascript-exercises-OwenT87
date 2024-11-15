// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // Don't change the variable name
  let listItems = document.querySelectorAll("li")

  // This is called a conditional. If it finds matches
  // for your variable, it will tell each of them to 
  // respond to a hover ("mouseover") event.
    if (listItems.length > 1) {
    listItems.forEach((item) =>
      item.addEventListener("mouseover", handleHover),
    );
  }
 }

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector('#circle')
  target.remove ('#circle')
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let newtarget = document.createElement('div'),target = document.createElement('div')
  let parentDiv = document.querySelector("#B0x")
  let item1 = document.querySelector ('#item1')
  target.className= "item new";
  target.innerText = "Maybe?"
  document.body.appendChild(target);
  parentDiv.insertBefore(target, item1) 
  parentDiv.appendChild(newtarget).innerText='Maybe'
  newtarget.className='item new'
  
}

// Don't change this function
function handleHover(event) {
  // Change the text of the target
  event.target.textContent = "OFF";
}
