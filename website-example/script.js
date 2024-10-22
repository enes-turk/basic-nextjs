const stocks = [
  "SASA",
  "ASELS",
  "THYAO",
  "PGSUS",
  "AHGAZ",
  "KCAER",
  "TUPRS",
  "PETKM",
  "EREGL",
  "AKBNK",
  "SAHOL",
  "SOKM",
  "ZOREN",
  "MGROS",
  "BIMAS",
  "KCHOL",
  "FROTO",
  "TOASO",
  "GARAN",
  "EGEEN",
  "IZMDC",
  "TCELL",
  "TTKOM",
];

// Stock information with P/E, Revenue, and EBITDA
const stockInfo = {
  SASA: { peRatio: 4.2, revenue: 1.8, ebitda: 0.9 },
  TUPRS: { peRatio: 1.6, revenue: 2.2, ebitda: 0.7 },
};

// Generate random values for the rest of the stocks
stocks.forEach((stock) => {
  if (!stockInfo[stock]) {
    stockInfo[stock] = {
      peRatio: (Math.random() * (25 - 1) + 1).toFixed(2), // Random P/E between 1 and 25
      revenue: (Math.random() * (5 - 0.5) + 0.5).toFixed(2), // Random revenue between 0.5 and 5
      ebitda: (Math.random() * (3 - 0.1) + 0.1).toFixed(2), // Random EBITDA between 0.1 and 3
    };
  }
});

const input = document.getElementById("stockInput");
const output = document.getElementById("stockOutput");

// Function to create and show the filtered autocomplete list
function showSuggestions(val) {
  closeAllLists(); // Close previous autocomplete suggestions
  if (!val) return;

  const listContainer = document.createElement("div");
  listContainer.setAttribute("class", "autocomplete-items");
  input.parentNode.appendChild(listContainer);

  // Filter stocks that match the input
  const filteredStocks = stocks.filter((stock) =>
    stock.toLowerCase().startsWith(val.toLowerCase())
  );

  filteredStocks.forEach((stock) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `<strong>${stock.substr(
      0,
      val.length
    )}</strong>${stock.substr(val.length)}`;
    listItem.addEventListener("click", function () {
      input.value = stock;
      const stockDetails = stockInfo[stock]; // Get the stock info for the selected stock
      output.innerHTML = `You Selected: ${stock} <br>
                          P/E Ratio: ${stockDetails.peRatio} <br>
                          Revenue: ${stockDetails.revenue} billion USD <br>
                          EBITDA: ${stockDetails.ebitda} billion USD`;
      output.style.display = "flex";
      closeAllLists();
    });
    listContainer.appendChild(listItem);
  });
}

// Event listener for typing in the input field
input.addEventListener("input", function () {
  const val = this.value.trim();
  showSuggestions(val);
});

// Close all autocomplete lists
function closeAllLists() {
  const items = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < items.length; i++) {
    items[i].parentNode.removeChild(items[i]);
  }
}

// Handle clicks to show the suggestions again when input is clicked
document.addEventListener("click", function (e) {
  if (e.target === input && input.value.trim()) {
    showSuggestions(input.value.trim()); // Show suggestions based on current input
  } else {
    closeAllLists(); // Close the list if clicked outside
  }
});
