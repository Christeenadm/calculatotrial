function display(num) {
    res.value+=num
}

function clearbox(){
     res.value="";
}

function evaluater() {
    // let exp=res.value;
    // let result=eval(exp);
    // res.value=result
    // or
    res.value=eval(res.value)
}