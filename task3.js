const printSegitiga = 5 //data harus number

if(typeof(printSegitiga) === "number") {
    for (let x=printSegitiga; x > 0; x--) {
        let temp = ""
        for(let y=1; y <=x; y++) {
            temp += String(y).concat(" ") // '${y}'
            
        }
        console.log(temp)
    }
} else {
    console.log("Data harus number")
}