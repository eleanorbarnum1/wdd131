const container = document.getElementById('savoryTable');
const foodAlts = [
    {
        Original:"Doritos Nacho Cheese",
        Alternative1:"Bean & Rice Chips: Nacho",
        Alternative2:"QUEST Tortilla Style Protein Chips Nacho Cheese"
    },
    {
        Original:"Regular Bread Pizza",
        Alternative1:"Califlower Crust Pizza",
        Alternative2:"Zucchihi Pizza Bites"
    },
    {
        Original:"Classic American Burger",
        Alternative1:"Black Bean Burger",
        Alternative2:"Cauliflower Burger"
    },
    {
        Original:"Chicken Wings",
        Alternative1:"Air Fryer Buffalo Cauliflower",
        Alternative2:"Buffalo Tater Tots"
    },
    {
        Original:"Hot Dogs",
        Alternative1:"Veggie Dogs",
        Alternative2:"Chicken or Turkey Sausage"
    },
    {
        Original:"Classic Nachos",
        Alternative1:"Grilled Zucchihi Nachos",
        Alternative2:"Pita Chip Nachos"
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