export function words(number, word = ["Like", "Likes"]) {
  let str = `${number}`;
  let lastNumber = +str[str.length - 1];
  if (number >= 5 && number <= 20) {
    return word[1] + " " + number;
  } else if (lastNumber == 1) {
    return word[0] + " " + number;
  } else if (lastNumber >= 2 && lastNumber <= 4) {
    return word[1] + " " + number;
  } else if ((lastNumber >= 5 && lastNumber <= 9) || lastNumber == 0) {
    return word[1] + " " + number;
  }
  
}
