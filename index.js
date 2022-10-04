const url = 'https://www.boredapi.com/api/';
fetch(url)
 .then((res) => res.json())
 .then(renderMysteryCards)

 mysteryCard = {
     name: 
     type:
     participants:
     price:
     link:
     key:
     accessibility:
 }

 function renderMysteryCards(mysteryCards) {
     mysteryCards.forEach(mysteryCard => {
         const mysteryCard = makeMysteryCard(mysteryCard)
     })
     mysteryCards.forEach(mysteryCard)
 }

 function renderMysteryCard(mysteryCard) {
     const mysteryCardDiv = document.getElementById('')
     mysteryCardDiv.addEventListener("click", e => renderDetails())
 }

 //this is for ID dropdown menu??
 const listenForFormSubmit() {
 function listenForFormSubmit(e) {
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
 function renderDetails(mysteryCard) {
     mysteryCard = document.getElementById('div')
     const activityName = document.createElement('activity-name')
     const accessibilityNum = document.createElement('accessibility-num')
     const activityType = document.createElement('activity-type')
     const participantNum = document.createElement('participant-num')
     const activityPrice = document.createElement('activity-price')
     const activityLink = document.createElement('activity-link')
     const activityKey = document.createElement('activity-key')

     mysteryCard.className = 'card'
     activityName.textContent = mysteryCard.activity;
    accessibilityNum.textContent = mysteryCard.accessibility;
    activityType.textContent = mysteryCard.type;
    participantNum.textContent = mysteryCard.participants;

     mysteryCard.append(activity, accessibility, type, participants, price, link, key)
 }