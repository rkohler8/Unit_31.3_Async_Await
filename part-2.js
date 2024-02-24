$(function() {
   // 1)
   $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/`)
      .then(data => {
         let value = data.cards[0].value;
         let suit = data.cards[0].suit;
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
   });

   // 2)
   let firstCard = null;
   $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/`)
      .then(data => {
         firstCard = data.cards[0];
         let deckId = data.deck_id;
         return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
      })
      .then(data => {
         let secondCard = data.cards[0];
         [firstCard, secondCard].forEach(function(card) {
            console.log(
               `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
            );
         });
      });

   // 3)
   let deckId = null;
   let $btn = $('button');
   let $cardArea = $('#card-area');

   $.getJSON(`https://deckofcardsapi.com/api/deck/new/shuffle/`)
      .then(data => {
         deckId = data.deck_id;
         $btn.show();
   });

   $btn.on('click', function() {
      $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
         .then(data => {
            let cardSrc = data.cards[0].image;
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
            if (data.remaining === 0) $btn.remove();
         });
   });
});