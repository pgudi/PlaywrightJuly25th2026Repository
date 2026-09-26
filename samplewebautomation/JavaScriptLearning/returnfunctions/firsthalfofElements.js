function getFirstHalfOfEelements(arr){
    let result=[]
    let k=0
    for(let i=0;i<arr.length/2;i++){
        result[k]=arr[i]
        k++
    }
    return result
}

let v1=getFirstHalfOfEelements([10,20,30,40,50,60,70,80])
console.log(v1);
//find sum of all Elements from returned array
let sum=0
for(let i=0;i<v1.length;i++){
    sum=sum+v1[i]
}
console.log("sum of Eleemnts :"+sum);
//divide each element with 5 and display result
for(let i=0;i<v1.length;i++){
    let val=v1[i]/5
    console.log(val);
}
console.log("-------------------------------");
function showFirstHalfOfelements(arr){
    let result=[]
    let k=0
    for(let i=0;i<arr.length/2;i++){
        result[k]=arr[i]
        k++
    }
    console.log(result);  
    
}

showFirstHalfOfelements([10,20,30,40,50,60,70,80])
