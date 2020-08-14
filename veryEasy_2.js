const dividesEvenly = (a,b) => {
    if(b>a){
        alert("b cant be greater then a");
    }else{
        qust = a/b;
    }
    if(qust%2===0){
        console.log(true);
    }else{
        console.log(false);
    }
}
dividesEvenly(98,7);
dividesEvenly(85,4);
//dividesEvenly(3,7);