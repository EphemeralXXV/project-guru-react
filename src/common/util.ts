export const toFixedLengthString = (number: number, desiredLength: number): string => {
    const numberLength = number.toString().length;
    const numberOfZeroes = desiredLength - numberLength;
    const additionalZeroes = "0".repeat(numberOfZeroes);
    if(number >= 0) {
        return additionalZeroes + number;
    }
    else {
        return "-" + additionalZeroes + Math.abs(number);
    }
}

export const toLocaleDateStringParams = ["en-US", {year: "numeric", month: "short", day: "2-digit"}] as const;