window.addEventListener('load', function () {
    var cards = document.querySelectorAll('.card-imagens img');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var image = card.querySelector('img');
        image.addEventListener('load', function () {
            var aspectRatio = this.naturalWidth / this.naturalHeight;
            if (aspectRatio > 1) {
                this.style.height = 'auto';
                this.style.width = '100%';
            } else {
                this.style.width = 'auto';
                this.style.height = '100%';
            }
        });
    }
});

window.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card-imagens');
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    }
});