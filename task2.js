const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69
const nilaiAkhir = ((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4)

let grade

if (nilaiAkhir >= 90) {
    grade = "A";
} else if (nilaiAkhir >= 80) {
    grade = "B";
} else if (nilaiAkhir >= 70) {
    grade = "C";
} else if (nilaiAkhir >= 60) {
    grade = "D";
} else {
    grade = "E";
}

console.log( "Rata-rata: " + nilaiAkhir)
console.log ( "Grade: " + grade)

// const mtk = 80
// const bahasaIndonesia = 90
// const bahasaInggris = 89
// const ipa = 69

// let rataRata = 0
// let grade = ""


// if (mtk !== null && mtk !== undefined) {
//     if(bahasaIndonesia !== null && bahasaIndonesia !== undefined) {
//         if(bahasaInggris !== null && bahasaInggris !== undefined) {
//             if(ipa !== null && ipa !== undefined) {
//                 const rataRata = mtk + bahasaIndonesia + bahasaInggris + ipa / 4
//                 if (rataRata >= 90 && rataRata <= 100) {
//                     grade = "A"
//                 } else if (rataRata >= 80) {
//                     grade = "B"
//                 } else if (rataRata >= 70) {
//                     grade = "C"
//                 } else if (rataRata >= 60) {
//                     grade = "D"
//                 } else if (rataRata >= 0) {
//                     grade = "E"
//                 } else {
//                     grade = "None"
//                 }
//             }
//         }
//     }
// }

// console.log( "Rata Rata : " + rataRata)
// console.log( "Grade : " + grade)


