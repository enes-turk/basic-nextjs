// stock market listed names will be also added for search like,
// when you tell "tüpraş" it will understand that it is TUPRS
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

const input = document.getElementById("stockInput");

input.addEventListener("input", function () {
  const val = this.value.trim();
  closeAllLists(); // Close previous autocomplete suggestions
  if (!val) return;

  const listContainer = document.createElement("div");
  listContainer.setAttribute("class", "autocomplete-items");
  this.parentNode.appendChild(listContainer);

  // Filter stocks that start with the entered value (case-insensitive)
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
      closeAllLists();
    });
    listContainer.appendChild(listItem);
  });
});

function closeAllLists() {
  const items = document.getElementsByClassName("autocomplete-items");
  for (let i = 0; i < items.length; i++) {
    items[i].parentNode.removeChild(items[i]);
  }
}

document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});
