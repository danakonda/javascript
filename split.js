let frankenSplice=(arr1,arr2,n)=>{
let say=arr2.slice();
say.splice(n,0,...arr1);
return say;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
