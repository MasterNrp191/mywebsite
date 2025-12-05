const postBtn = document.getElementById('post-btn');
const queueList = document.getElementById('queue-list');

// Function to show local time
function updateTime() {
    const now = new Date();
    document.getElementById('local-time').textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Store players locally for now
let players = [];

postBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const game = document.getElementById('game').value.trim();
    const rank = document.getElementById('rank').value.trim();
    const matchcode = document.getElementById('matchcode').value.trim();

    if(!username || !game || !rank) {
        alert("Fill all required fields!");
        return;
    }

    const playerInfo = `${username} | ${game} | ${rank} ${matchcode ? '| Code: '+matchcode : ''}`;
    players.push(playerInfo);

    updateQueue();
    document.getElementById('username').value = '';
    document.getElementById('game').value = '';
    document.getElementById('rank').value = '';
    document.getElementById('matchcode').value = '';
});

function updateQueue() {
    queueList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        queueList.appendChild(li);
    });
    if(players.length === 0){
        queueList.innerHTML = '<li>No players yet 😔</li>';
    }
}
