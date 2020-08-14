const specialReverse = (str,ch) => {
    let ar = str.split(' ');
    ar.forEach(ele => {
        if(ele[0] === ch){
            ar.splice(ar.indexOf(ele),1,ele.split('').reverse().join(''));
        }
    });
    let newStr = ar.join(' ');
    console.log(newStr);
}
specialReverse("word searches are super fun",'s');
specialReverse("first man to walk on the moon","m");
specialReverse("peter piper picked pickled peppers","p");