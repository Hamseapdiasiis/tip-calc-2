console.log("hello");
function CalcTip(Bill){
    if (Bill < 50){
        return("No tip")
    }else if (Bill > 50 && Bill < 300){
        return(`Billku waa ${Bill}, tipkuna waa ${Bill * 15/100}, totalkuna waa ${Bill + (Bill * 15/100)}`)
    }else {
        return(`Biilku waa ${Bill}, tipkuna waa ${Bill * 20/100}, totalkuna waa ${Bill + (Bill * 20/100)}`)
    }
}

console.log (CalcTip(30))
console.log (CalcTip(270))
console.log (CalcTip(370))