
function displayDateFormat(){
    let date=new Date()
    let myday=date.getDate()
    if(myday <10){
        myday="0"+myday
    }

    let mymonth=date.getMonth()+1
    if(mymonth<10){
        mymonth="0"+mymonth
    }
    // DD-MM-YYYY
    console.log(myday +"-"+mymonth+"-"+date.getFullYear())
}

displayDateFormat()