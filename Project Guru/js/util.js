function toFixedLengthString(number, desiredLength){
    const numberLength = number.toString().length
    const numberOfZeroes = desiredLength - numberLength
    const additionalZeroes = "0".repeat(numberOfZeroes)
    if(number >= 0){
        return additionalZeroes + number
    }
    else{
        return "-" + additionalZeroes + Math.abs(number)
    }
}