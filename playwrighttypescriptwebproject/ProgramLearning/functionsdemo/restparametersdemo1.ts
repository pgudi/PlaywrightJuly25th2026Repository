// Case 1: Rest Parameters in TypeScript
function displayAdditionResult(...nums:number[]):number{
    let result=0
    for(let x of nums){
        result+=x
    }
    return result
}

console.log(displayAdditionResult(20,50))
console.log(displayAdditionResult(20,50,10))
console.log(displayAdditionResult(20,50,10,5))
console.log(displayAdditionResult(20,50,10,5,30))