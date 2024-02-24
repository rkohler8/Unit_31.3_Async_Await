$(function() {
   // 1)
   async function deckCards1() {
      let data = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/`)
      let value = data.cards[0].value;
      let suit = data.cards[0].suit;
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
   }

   // 2)
   async function deckCards2() {
      let firstCard = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/`);
      let deckId = firstCard.deck_id;
      let secondCard = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
      [firstCard, secondCard].forEach(data => {
         let value = data.cards[0].value;
         let suit = data.cards[0].suit;
         console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
         );
      });
   }

   // 3)
   async function deckCards3() {
      let $btn = $('#startBtn');
      let $cardArea = $('#card-area');
   
      let deckData = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/`);
   
      $btn.show().on('click', async function() {
         let cardData = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/`);
         let cardSrc = cardData.cards[0].image;
         let angle = Math.random() * 90 - 45;
         let randomX = Math.random() * 40 - 20;
         let randomY = Math.random() * 40 - 20;
         $cardArea.append(
            $('<img>', {
               src: cardSrc,
               css: {
                  transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
               }
            })
         );
         if (cardData.remaining === 0) $btn.remove();
         // if (cardData.remaining === 0){
         //    $btn.remove();
         //    let $btn2 = $('#resetBtn');
         //    while($cardArea.firstChild){
         //       $cardArea.removeChild($cardArea.firstChild);
         //   }
         //    $btn2.show().on('click', deckCards3());
         // }
      });
   }
   deckCards3();
});