const url = 'https://www.boredapi.com/api/';

fetch(url)
.then((res) => res.json())
.then(renderMysteryCards)

function renderMysteryCards(mysteryCards) {
    mysteryCards.forEach(mysteryCard => {
        const mysteryCard = makeMysteryCard(mysteryCard)
    })
}

//this is for ID dropdown menu??
const listenForFormSubmit() {
    const form = document.querySelector('.category-identifier')
    form.addEventListener('submit', e => {
        e.preventDefault();
    })
}

const makeMysteryCard(mysteryCard) {
    const mysteryCard = document.createElement()
    const activityName = document.createElement()
    const accessibilityNum = document.createElement()
    const activityType = document.createElement()
    const participantNum = document.createElement()
    const activityPrice = document.createElement()
    const activityLink = document.createElement()
    const activityKey = document.createElement()

    mysteryCard.className = 'card'
    activityName.textContent = mysteryCard.activity;
    accessibilityNum.textContent = mysteryCard.accessibility;
    activityType.textContent = mysteryCard.type;
    participantNum.textContent = mysteryCard.participants;

    mysteryCard.append(activity, accessibility, type, participants, price, link, key)
}
