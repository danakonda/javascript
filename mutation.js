function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false;
    }
  }
  return true;
}
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true  