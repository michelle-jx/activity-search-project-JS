const url = 'https://openlibrary.org/dev/docs/api/books';

fetch(url);
    .then((res) => res.json())
    .then(renderBookCards)

function renderBookCards(//what to put for array here?//)