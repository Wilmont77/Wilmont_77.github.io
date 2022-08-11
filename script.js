/* .js files add interaction to your website */
var factList = [
  "It’s estimated that one-fifth of children struggle with mental illness in the U.S.",/*0*/
  "The Child Mind Institute estimates that one-fifth of children—or roughly 17 million—have or have had a diagnosable mental health condition.", /*1*/
"The National Association on Mental Illness reports that half of all chronic mental illness begins by 14 years of age.",/*1*/
  "In 2001, the World Health Organization (WHO)Trusted Source estimated that “1 in 4 people in the world will be affected by mental or neurological disorders at some point in their lives.",/*2*/
  "Currently, 450 million people are experiencing such conditions",/*3*/
"One of the most common mental health disorders is depression, affecting more than 264 millionTrusted Source people globally in 2017."]; /*4*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
