let data = {
    id :1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
}

// data.name = `Danang Firmantara`
// data.email = "danangfirmantara837@gmail.com"
// data.hobby = "Sport"


console.log ({
    ...data,
    name : "oyen",
    email : "oyen@gmail.com",
    hobby : "Tidur"
})

console.log (data)

// const {address:{street}, address:{city}} = data

const {street, city} = data.address
console.log (`${street}`) 
console.log(`${city}`)