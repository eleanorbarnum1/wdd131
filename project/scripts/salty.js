const container = document.getElementById('saltyTable');
const foodAlts = [
    {
        Original:"Plain Potato Chips",
        Alternative1:"Good Health Kettle Style",
        Alternative2:"PopChips SeaSalt"
    },
    {
        Original:"Pretzels",
        Alternative1:"Cauliflower Pretzels",
        Alternative2:"Pretzel Crisps Organic"
    },
    {
        Original:"Movie Theater Popcorn",
        Alternative1:"Skinny Pop Original",
        Alternative2:"Boom Chicka Pop",
    },
    {
        Original:"French Fries",
        Alternative1:"Baked Spud Fries",
        Alternative2:"Carrot Fries"
    },
];

function generateTable(data) { 
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    for (const key in data[0]) {
        if (Object.hasOwnProperty.call(data[0], key)) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach(item => {
        const row = document.createElement('tr');
        for (const key in item) {
            if (Object.hasOwnProperty.call(item, key)) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
        }
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

const tableElement = generateTable(foodAlts);

container.appendChild(tableElement);