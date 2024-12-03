const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

const teachers = [
    {
        "name": "Mrs. Frost",
        "type": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
]

function task1() {
   const Sport = {
    "name": "Basketball",
    "teams":30,
    "roster": 18,
    "points": "2 and 3"

   }
   console.log(Sport)
   
   
}

function task2() {
   console.log(person)
   let target = document.querySelector("#person")
   target.innerHTML(person)
}

function task3() {
    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
}