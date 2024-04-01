// first I created a function which takes in the text
function swap(text)
{
    // the text is then divided into letters using the .split 
   return text.split("")
   // .map is used to check through the letters and checks whether the letter is an uppercase or lowercase 
   // if the letter is a lowercase it is converted to a uppercase and the opposite is also true in that if the
   // letter is uppercase it is converted to lowercase 
   .map(function (letter ){
   if(letter === letter.toUpperCase())
   {
      return letter.toLowerCase();
   }
   else
   {
      return letter.toUpperCase();
   }
})
// after the letters have been edited they are then joined to form the words they were before splitting 
.join("");

}
console.log(swap("The Quick Brown Fox"))