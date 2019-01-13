const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function () {
    console.log('hello');
    setTimeout(() => this.type(), 500);
}

// Dom loaded run function
document.addEventListener('DOMContentLoaded', init);

// App init function
function init() {
    const txtElement = $('.txt-type');
    const words = JSON.parse($('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init typeWriter
    new TypeWriter(txtElement, words, wait);
}