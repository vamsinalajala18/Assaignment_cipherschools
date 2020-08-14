const realType = (ele) => {
    if(typeof(ele) === 'object'){
        if(Array.isArray(ele)){
            return "array";
        }else{
            return typeof(ele);
        }
    }else{
        return typeof(ele);
    }
}

console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));