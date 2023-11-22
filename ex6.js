//Ex6
function removeCharacter(str, index) {
  part1 = str.substring(0, index);
  part2 = str.substring(index + 1, str.length);
  return part1 + part2;
}

console.log(removeCharacter("Helllo", 2));
