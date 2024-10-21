import yahooFinance from "yahoo-finance2";

async function getStockData(symbol) {
  try {
    const result = await yahooFinance.quote(symbol);
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getStockData("AAPL");
