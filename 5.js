
const skill = ["HTML", "CSS", "Javascript"]
const skill2 = ["Berenang", "Bermain"]


const kucing = { 
    nama : "Katy", // key : value
    umur : 2,
    hobby : "Tidur",
    skill : ["Bertarung",...skill, ...skill2] // spread operator
}


//dot notation
console.log(kucing.skill)

// destructure object for object
const {nama, skill:skillKu} = kucing

console.log (skillKu)

// destructuring array
const rgb = [255, 140, 0]

const [_red, green, blue]=rgb

console.log (blue)



