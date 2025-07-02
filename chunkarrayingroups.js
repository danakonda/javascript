let chunkArrayInGroups=(array,number)=>{
  
  const result = [];

  for (let i = 0; i < array.length; i += number) {
    result.push(array.slice(i, i + number));
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]]