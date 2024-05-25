const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function productName() {
    const select = document.getElementById("product");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.text = product.name;
      select.appendChild(option);
    });
  }
  productName();


//submission counter
let counter = localStorage.getItem('reviewCounter') || 0;
counter = parseInt(counter) + 1;
localStorage.setItem('reviewCounter', counter);
console.log('Submission Counter:', counter);
