const char_0 = '0'.charCodeAt(0);
const char_9 = '9'.charCodeAt(0);
const numInStr = (ar) => {
    ar.forEach(ele => {
        let checkAr = ele.split('');
        let count = 0;
        checkAr.forEach(i =>{
            let x = i.charCodeAt(0);
            if(x>=char_0 && x<=char_9){
                count++;
            }
        });
        if(count === 0){
            ar.splice(ar.indexOf(ele),1);
        }
    });
    console.log(ar);
}

numInStr(['1a','a','2b','b']);
numInStr(['abc','abc10']);
numInStr(['abc','ab10c','a10bc','bcd']);
numInStr(['this is a test','test1']);