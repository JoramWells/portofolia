var options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
var date1 = new Date();
console.log(date1.toLocaleDateString("en-US", options));
// document.getElementById("date").innerHTML = date1.toLocaleDateString(
//   "en-US",
//   options
// );

fetch("https://allquotes.herokuapp.com/quotes/rand")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if(data['text'] === null && data['author'] === null){
      document.getElementById("author").innerHTML = "loading.."
    }else{
    document.getElementById("text").innerHTML = data['text']
    document.getElementById("author").innerHTML = data['author']
    }


    console.log(data['text']);
    console.log(data['author'])
  })
  .catch((err) => console.log(err));
