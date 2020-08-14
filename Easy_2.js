const addUp = (num) => {
    if(num<1 || num>1000){
        alert("Check the input number should not be greater than 1000 or less than 1")
    }else{
        let sum = 0;
        for(var i = 1;i<=num;i++){
            sum += i;
        }
        console.log(sum);
    }

}
addUp(4);
addUp(13);
addUp(600);
//addUp(0);