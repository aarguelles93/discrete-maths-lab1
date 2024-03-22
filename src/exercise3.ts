function getPermutation(str:string) : Array<Array<string>>|null{
    let permutations  : Array<Array<string>> | null = []
    if(str.length >= 8) {
        return permutations
    }

    if(!isValidPermutationInput(str)){
        return null
    }

    permutations = permute(str.split(''));    
    return permutations
}

//Pre-checks that there are no duplicates
function isValidPermutationInput(x:string): boolean{
    for (let i = 0; i < x.length - 1; i++) {
        for(let j = i+1; j < x.length; j++ ){
            if(x[i]===x[j]) {
                return false
           }
        }
    }
    return true
}

function permute(arr: string[], permutations: Array<Array<string>> = [], startIndex = 0) : Array<Array<string>> | null {
    if (startIndex === arr.length) {
        permutations.push([...arr]);
        return null;
    }

    for (let i = startIndex; i < arr.length; i++) {
        [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
        permute(arr, permutations, startIndex + 1);
        [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
    }

    return permutations;
}

const str = 'ASDFGH';

const asd = getPermutation(str)
console.log(asd)

