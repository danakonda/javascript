let sumAll=(arr)=>{
let result=0;
const l=Math.min(arr[0],arr[1]);
const x=Math.max(arr[1],arr[0]);
for (let i=l;i<=x;i++){
      result+=i;
    
}

return result;
    
  
}
console.log(sumAll([1,4]));
