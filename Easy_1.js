const charCount = (ch,str) => {
    let count = 0;
    for(var i = 0;i<str.length;i++){
        if(str[i]===ch){
            count++;
        }
    }
    console.log(count);
}
charCount('a','edabit');
charCount('c','Chamber of secrets');
charCount("b","big fat bubble");