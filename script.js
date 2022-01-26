const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const tallestBuildings = [
    'Burj Khalifa',
    'Shanghai Tower',
    'Abraj Al-Bait Clock Tower',
    'Ping An Finance Centre',
    'Goldin Finance',
    'Lotte World II',
    'One World Trade Center',
    'CTF Finance Centre',
    'Tianjin CTF Finance Center',
    'China Zun'
];

// store all list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...tallestBuildings]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((building, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="building-name">${building}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem); 
        });
}