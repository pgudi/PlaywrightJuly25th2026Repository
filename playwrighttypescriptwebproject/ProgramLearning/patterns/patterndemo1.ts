/*
# # # # #
# # # # #
# # # # #
*/
let pattern:string=""
for(let i:number=1;i<=3;i++){
    for(let j:number=1;j<=5;j++){
        pattern=pattern+"# "
    }
    pattern=pattern+"\n"
}

console.log(pattern)

console.log("---------------------------------------")
let pattern1:string=""
let i:number=1
while(i<=3){
    let j:number=1
    while(j<=5){
        pattern1=pattern1+"#  "
        j++
    }
    pattern1=pattern1+"\n"
    i++
}
console.log(pattern1)
console.log("---------------------------------------")
let pattern2:string=""
let p:number=1
do {
    let q:number=1
    do{
        pattern2=pattern2+"# "
        q++
    }while(q<=5)
        pattern2=pattern2+"\n"
    p++
}while(p<=3)
console.log(pattern2)