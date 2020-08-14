const vowelArray = ['a','e','i','o','u'];
const replaceVowel = (str) => {
    let newStr = '';
    for(var i=0;i < str.length;i++){
        if(isVowel(str[i])){
            newStr += vowelArray.indexOf(str[i])+1;
        }else{
            newStr += str[i];
        }
    }
    console.log(newStr);
}

const isVowel = function(ch){
    return 'aeiou'.includes(ch);
}
replaceVowel('karachi');
replaceVowel('chembur');
replaceVowel('khandbari');