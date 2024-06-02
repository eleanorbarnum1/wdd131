const container = document.getElementById('bevTable');
const foodAlts = [
    {
        Original:"Coffee",
        Alternative1:"Green Tea",
        Alternative2:"Matcha Tea"
    },
    {
        Original:"Soda",
        Alternative1:"OLIPOP Sparkling Tonic",
        Alternative2:"Poppi Prebiotic Soda"
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
        Original:"Simply Brand Juice",
        Alternative1:"POM Wonderful",
        Alternative2:"Bolthouse Farms Daily Greens"
    },
    {
        Original:"Popular Energy Drinks",
        Alternative1:"Yerba Mate",
        Alternative2:"Celsius"
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