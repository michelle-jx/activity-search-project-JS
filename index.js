//array and variable names are just placeholders for now, still need to figure out exactly how the API is formatted

const url = 'https://openlibrary.org/dev/docs/api/books';

fetch(url);
    .then((res) => res.json())
    .then(renderBookCards)

function renderBookCards(bookcards) {
    bookCard.forEach(renderBookCard)
}
function renderBookCard(bookcard) {
    const bookCollectionDiv = document.getElementById('book-collection')
    const bookCoverImage = document.createElement('img')

    bookCoverImage.src = bookcards.image;
    bookCollectionDiv.append(bookCoverImage)
    bookCoverImage.addEventListener("click", e => renderDetails(bookcard))
}   

function el(elementName) {
    return document.getElementById(elementName)
}

function renderDetails(bookcard) {
    const bookName = el('book-title')
    const bookGenre = el('genre')
    const authorName = el('author-name')

    bookName.textContent = bookcard.title;
    bookGenre.textContent = bookcard.genre;
    authorName.textContent = bookcard.author;
}