document.getElementById('add-border').addEventListener('click', function () {
    const divContainer = document.getElementById('friends-container');
    divContainer.style.border = '3px solid yellow';
});
// 
function addBackground() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
};
// 
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friends-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3>new friend</h3>
    <p>Neque, vitae?</p>
    `;
    container.appendChild(friendDiv);
})