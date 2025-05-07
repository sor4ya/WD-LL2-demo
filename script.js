fetch('https://itchonib.github.io/ll-2/output.json')
.then(response => response.json())
.then((data) => {
    displayData(data);
})

function displayData(data) {
    const container = document.getElementById('cards-wrapper');

    data.forEach((student) => {
        const card = document.createElement('div');
        card.className = 'col-md-4';

        card.innerHTML = `
            <div class="card text-center" style="border: ${student.color} 3px dotted;">
                <div class="card-body">
                    <div class="color-circle" style="background: ${student.color}">
                    ${student.initial}
                    </div>
                    <p class="card-text"><strong>📺 Favorite Streaming Platform:</strong> ${student.platform}</p>
                    <p class="card-text"><strong>💻 Coding Experience:</strong> ${student.codingExp}</p>
                    <p class="card-text"><strong>🍿 Preferred Coding Snack:</strong> ${student.snack}</p>
                    <p class="card-text"><strong>🖥️ Preference:</strong> ${student.screenMode}</p>
                    <p class="card-text"><strong>🎵 Favorite Song:</strong> ${student.song}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    })
}
