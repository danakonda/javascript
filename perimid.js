function pyramid(char, height, inverted) {
  let result = '\n';

  for (let i = 0; i < height; i++) {
    let spaces = inverted ? i : height - i - 1;
    let chars = inverted ? (2 * (height - i) - 1) : (2 * i + 1);
    result += ' '.repeat(spaces) + char.repeat(chars) + '\n';
    
  }

  return result;
}
console.log(pyramid('X', 5, false));
console.log(pyramid('X', 5, true));
