function getPrimeNumbers (n: number) : Set<number> {
    const resultSet: Set<number> = new Set()
    const nonPrimeAuxiliaryArray: Array<boolean> = new Array(n)

    for (let index = 1; index <= n; index++) {
        if (index**2 > n) {
            break;
        }
        if (index === 1) {
            nonPrimeAuxiliaryArray[index] = true;
        }
        else if (!nonPrimeAuxiliaryArray[index]) {
            for (let j = index; j <= n; j++) {
                if (j % index == 0 && j !== index) {
                    nonPrimeAuxiliaryArray[j] = true;
                }
            }
        }
    }
    for (let index = 1; index <= n; index++) {
        if (!nonPrimeAuxiliaryArray[index]) {
            resultSet.add(index);
        }
    }

    return resultSet
}

console.log(getPrimeNumbers(100))