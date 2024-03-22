function ceil(x:number) : number {
    if(x % 1 == 0) {
        return x
    } else if (x < 0) {
        return ~~x
    } else {
        return ~~x + 1
    }
}

function floor(x:number) : number {
    if(x % 1 == 0) {
        return x
    } else if (x > 0) {
        return ~~x
    } else {
        return ~~x - 1
    }
}

// receives a 
function createSet(array:Array<number>) : Array<number> {
    const resultSet: Array<number> = []

    for (const e in array) {
        let isDuplicate = false

        for (let index = 0; index < resultSet.length; index++) {
            if (resultSet[index] == array[e]) {
                isDuplicate = true
                break
            }        
        }

        if(!isDuplicate) {
            resultSet.push(array[e])
        }
    }

    return resultSet
}

function manualMod(x:number, y:number) : number {
    return x - (floor(x/y) * y)
}

console.log(createSet([1,2,4,5,6,8,9,0,1,2,3,4,5,6,7,8]))