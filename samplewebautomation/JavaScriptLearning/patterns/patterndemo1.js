/*
Case 1: Design Rectangle Shape

*  *  *  *  *
*  *  *  *  *
*  *  *  *  *

rows=3
cols=5
*/
let pattern=""

for(let i=1;i<=3;i++){
    for(let j=1;j<=5;j++){
        pattern=pattern+" *"
    }
    pattern=pattern+"\n"
}

console.log(pattern);

