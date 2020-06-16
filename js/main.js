let cardIndex = 1;

function nextCard(next) {
    cardSlider(cardIndex += next);
}

function cardSlider(card) {
    let allCards = document.querySelectorAll('.card');


    if (card > allCards.length)
        cardIndex = 1;

    if (card < 1)
        cardIndex = allCards.length;

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].className = allCards[i].className.replace(' active', '');
    }

    allCards[cardIndex - 1].className += ' active';

}

document.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowLeft')
        nextCard(-1);

    if (e.code === 'ArrowRight')
        nextCard(1);

});