const deepCompare = (obj1: object, obj2: object) => {
    const valuesObj1 = Object.values(obj1);
    const valuesObj2 = Object.values(obj2);
    
    if(valuesObj1.length !== valuesObj2.length){
        return false;
    }
    for(let i = 0; i < valuesObj1.length; i++){
        if(valuesObj1[i] !== valuesObj2[i]) return false
    }
    return true;
}
export default deepCompare;