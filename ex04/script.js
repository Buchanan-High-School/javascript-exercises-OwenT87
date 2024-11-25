function task1() {
  let myArray = ["Bob", "Billy", "Bill"];
  let target = document.querySelector("#task-1-target")
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  let target = document.querySelector("#color-list")
  let color = target.querySelectorAll("li")
  console.log(color)
}

function task2B() {
  let nameli = document.querySelector("#name-list")
  let names = nameli.querySelectorAll("li")
let target = document.querySelector("#target")

names.forEach(item  => {
    let newEl = document.createElement("li");
    newEl.innerText = "Hi " + item.innerText;
    target.appendChild(newEl)

}) 
}

function task3() {
  let colors = document.querySelectorAll(".item")

  colors.forEach (item =>
    item.style.backgroundColor = "#" + item.innerText)
  
    
}
