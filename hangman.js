var words = ["BACON","EGGS","ITALY","AVOCADO","CEREAL","BLUEBERRY","MOUSE","CHEESE","PENCIL","STAPLER","COMPUTER","TELEVISION", "PEAR", "APPLE", "TREE"];
var lives = 10;
var letter;
var word = generateword();
console.log(word);
var chars = [];

for (var i = 0; i < word.length; i++) {
  chars.push("_");
}
var currentword = chars.join("");
document.getElementById("currentword").innerHTML = currentword;

var buttons = document.querySelectorAll(".letter");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function(e) {
      button.disabled = true; // disable button after clicking

      if (lives > 0){
        letter = letterinput(e);
        console.log(letter);

        if (check(letter, word) == true){
            for (i=0; i<word.length; i++) {
              if (word[i] == letter) {
                chars[i] = letter;
            }
          }
          currentword = chars.join("");
        }

        else {
          lives-=1;
        }

      // based on 'lives' count, display corresponding picture
      switch(lives) {
        case 9:
          changeimage("images/wrong 1.png");
          break;
        case 8:
          changeimage("images/wrong 2.png");
          break;
        case 7:
          changeimage("images/wrong 3.png");
          break;
        case 6:
          changeimage("images/wrong 4.png");
          break;
        case 5:
          changeimage("images/wrong 5.png");
          break;
        case 4:
          changeimage("images/wrong 6.png");
          break;
        case 3:
          changeimage("images/wrong 7.png");
          break;
        case 2:
          changeimage("images/wrong 8.png");
          break;
        case 1:
          changeimage("images/wrong 9.png");
          break;
        case 0:
          changeimage("images/wrong 10.png");
          break;
      }

        console.log(currentword);
        console.log(lives);
        document.getElementById("currentword").innerHTML = currentword;
        document.getElementById("lives").innerHTML = "Lives: " + lives;

        if (lives == 0) {
          document.getElementById("game_end").innerHTML = "You died." + "<br />" + "The word is " + word + ".";
          for (let i = 0; i < buttons.length; i++) { // disable all alphabet buttons after game ends
            buttons[i].disabled = true;
          }
        }

        if (currentword == word) {
          document.getElementById("game_end").innerHTML = "You won!";
          for (let i = 0; i < buttons.length; i++) { // disable all alphabet buttons after game ends
            buttons[i].disabled = true;
          }
        }
      }
    });
}

// returns a random word from words list
function generateword() {
  list_len = words.length - 1; // get length of list
  return words[Math.floor(Math.random(0, list_len)*list_len)]; // return a random word from list
}

//the letter selected by user is checked to see if it is in the generated word
// returns true or false
function check(letter, word) {
  if (word.includes(letter))
    return true;
  else
    return false;
}

// get letter from clicking button
function letterinput(e) {
  letter = e.target.id;
  return letter;
}

// change image source according the 'lives' count
function changeimage(source) {
  document.getElementById("man").src = source;
}
