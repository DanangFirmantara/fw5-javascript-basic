const printSegitiga = 5

if (typeof printSegitiga === "number"){
    for (let x = printSegitiga ; x > 0 ; x--){
        let temp = ""
        for (let y=1; y<=x ;y++){
            // temp += `${y} `
            temp = temp + y + " "
        }
        console.log (temp)
    }
} else {
    console.log ("Data harus number")
}

// const printSegitiga = 5

// if(isNaN(printSegitiga)){
//     console.log (`Data harus number`)
// } else {
    
//     for (var x=printSegitiga ; x> 0 ; x--){
    
//         array = []
//         for( y=1 ; y<=x ; y++){
//             array[y-1] = y
//         }
//         console.log(array)
        
//     }
// }




