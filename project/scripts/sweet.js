const container = document.getElementById('sweetTable');
const foodAlts = [
    {
        Original:"Hershey's Chocolate Bar",
        Alternative1:"See's Extra Dark Chocolate",
        Alternative2:"Ghirardelli Chocolate Squares"
    },
    {
        Original:"Classic Dounut",
        Alternative1:"Baked Dounut",
        Alternative2:"Fiber One Dounuts"
    },
    {
        Original:"Popsicles",
        Alternative1:"Goodpop Popsicles",
        Alternative2:"Outshine Popsicle"
    },
    {
        Original:"Ice Cream",
        Alternative1:"Halo Top",
        Alternative2:"Yasso"
    },
    {
        Original:"Candy",
        Alternative1:"Quest Peanut Butter Cups",
        Alternative2:"Smart Sweets"
    },
    {
        Original:"Pastries",
        Alternative:"Nature's Bakery Brownie",
        Alternative2:"Legendary Foods Protein Sweet Roll"
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