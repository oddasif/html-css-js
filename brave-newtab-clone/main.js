// Clock Program Starts
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
}
  
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
// Clock Program Ends Here




// Images Collection
const imageCollection = new Map([
  ["Priyanuch Konkaew", "https://images.unsplash.com/photo-1599817977364-b6f59e547258"],
  ["Coline Beulin", "https://images.unsplash.com/photo-1521713362244-1b5e5d150b29"],
  ["Geran de Klerk", "https://images.unsplash.com/photo-1473773508845-188df298d2d1"],
  ["Johny Gios", "https://images.unsplash.com/photo-1644667621462-4938986c3a41"],
  ["Geronimo Giqueaux", "https://images.unsplash.com/photo-1644611255433-8ac2a08a3f79"],
  ["Johny Gios", "https://images.unsplash.com/photo-1617565436078-23a38c336594"],
  ["Masood Aslami", "https://images.unsplash.com/photo-1644754447777-c1040dd9af55"]
]);


// Generating a Random Number for Image Selection
let randomNum = Math.floor((Math.random() * imageCollection.size-1) + 1);



// Defining a function to get a random image and respective author name from the image collection as maps doesn't support indexing like arrays
let authorName, imageURL;

function getRandomImage(randomNum){
  
  let index = 0; //to match the condition

  imageCollection.forEach (function(value, key) {
    if(index == randomNum) {
      authorName = key;
      imageURL = value;
    }
    ++index;
  })

  displayImage(authorName, imageURL);
}



// Function to display the selected random image to the dom
function displayImage(authorName, imageURL) {
  document.body.style.backgroundImage = 'url('+ imageURL +')';
  document.getElementById("image-credit").innerHTML = 'Photo by <a href='+ imageURL +'>'+ authorName +'</a>';
}