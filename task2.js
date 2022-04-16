const mtk = 80
const bIndo = 90
const bIng = 89
const ipa = 69
const nilaiAkhir = ((mtk + bIndo + bIng + ipa) / 4)

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


