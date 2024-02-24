// 1)
$.getJSON(`http://numbersapi.com/17?json`).then(data => {
   console.log(data);
});

// 2)
let nums = [8, 12, 17, 24];
$.getJSON(`http://numbersapi.com/${nums}?json`).then(data => {
   console.log(data);
});
 
// 3)
Promise.all(
   Array.from({ length: 4 }, () => {
      return $.getJSON(`http://numbersapi.com/17?json`);
   }))
   .then(facts => {
   facts.forEach(data => $("span.fact_area").append(`<p>${data.text}</p>`));
});