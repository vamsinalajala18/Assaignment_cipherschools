const removeDups = (ar) =>{
    return [...new Set(ar)];
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(['The','big','cat']));
console.log(removeDups(['John','Taylor','John']));