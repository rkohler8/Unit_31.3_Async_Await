// 1)
async function numFacts1() {
   let data = await $.getJSON(`http://numbersapi.com/17?json`)
   console.log(data);
}
numFacts1();

// 2)
let nums = [8, 12, 17, 24];
async function numFacts2() {
   let data = await $.getJSON(`http://numbersapi.com/${nums}?json`)
   console.log(data);
}
numFacts2();

// 3)
async function numFacts3() {
   let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`http://numbersapi.com/17?json`))
      );
      facts.forEach(data => {
         $("span.fact_area").append(`<p>${data.text}</p>`);
   });
}
numFacts3();