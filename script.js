//Array of different inspirational quotes
const inspiration = [
  "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
  "Don’t Let Yesterday Take Up Too Much Of Today.",
  "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
  "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
  "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
  "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
  "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
  "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
  "We May Encounter Many Defeats But We Must Not Be Defeated.",
];

//this function will take an array as an argument
const randomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length); //this code generates a random number between 0 and the array length
  return arr[randomNumber]; //this function will return a random quote
};

console.log(randomQuote(inspiration));
