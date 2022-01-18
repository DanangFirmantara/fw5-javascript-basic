const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if (mtk !== null && mtk !==undefined){
    if (bahasaIndonesia !== null && bahasaIndonesia !== undefined){
        if (bahasaInggris !== null && bahasaInggris !== undefined){
            if (ipa !== null && ipa !== undefined){
                mean = (mtk + bahasaInggris +bahasaIndonesia +ipa)/4

                if (mean >= 90 && mean <=100){
                    grade = "A"
                } 
                else if (mean >= 80 && mean <=89){
                    grade = "B"
                } 
                else if (mean >= 70 && mean <=79){
                    grade = "C"
                } 
                else if (mean >= 60 && mean <=69){
                    grade = "D"
                } 
                else if (mean >= 0 && mean <=59){
                    grade = "E"
                } 

            }
        }
    }
}

//cetak nilai rata rata dan gradenya
console.log(`Rata-rata = ${mean}`)
console.log(`Grade = ${grade}`)

// var sum = 0
// const nilai = [mtk, bahasaIndonesia, bahasaInggris, ipa]
// let length = nilai.length

//     for (var x=0 ; x<length; x++ ){
//         sum = sum + nilai[x]   
//     }

//     // hitung nilai rata rata
//     mean = sum/length

    // melakukan konversi nilai rata rata ke huruf
    // if (mean >= 90 && mean <=100){
    //     grade = "A"
    // } 
    // else if (mean >= 80 && mean <=89){
    //     grade = "B"
    // } 
    // else if (mean >= 70 && mean <=79){
    //     grade = "C"
    // } 
    // else if (mean >= 60 && mean <=69){
    //     grade = "D"
    // } 
    // else if (mean >= 0 && mean <=59){
    //     grade = "E"
    // } 
