let generatePassword=length=>{
const arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let result="";
for(let i=0;i<length;i++){
  const aes=Math.floor(Math.random()*arr.length);
  result+=arr[aes];
}return result;
}
const password=generatePassword(12);
console.log(`Generated password: ${password}`);