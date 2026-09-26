/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/
let pattern=""
for(let i=1;i<=5;i++){
    for(let k=1;k<=i;k++){
        pattern=pattern+k+" "
    }
    pattern=pattern+"\n"
}

console.log(pattern);
