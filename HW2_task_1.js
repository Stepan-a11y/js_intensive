function makeObjectDeepCopy(obj){			
    let cloneObj = {};
    
    for(let key in obj){
        if(typeof obj[key] === "object") {
          cloneObj[key] = makeObjectDeepCopy(obj[key]); 
      } else {
          cloneObj[key] = obj[key];
      }
    }
    return cloneObj;
}