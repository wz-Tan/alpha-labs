import { ChartData } from "../app/types";

const URL = "http://127.0.0.1:5000";

// Ticker Name, and A Duration like "1mo"
export async function getTicker(tickerName: string, duration: string) {
  try {
    // Get Data, Convert to JSON, Get the Value
    const data = await fetch(`${URL}/get_market`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tickerName: tickerName, duration: duration }),
    })
      .then(async (res) => await res.json())
      .then((data) => data.ticker_data)
      .then((ticker_data) => JSON.parse(ticker_data));

    // Parse This Data: Open: {Unix: Value} and Continue On
    const { Open, Close, High, Low } = data;

    // Map To Create Final List
    const formatted_ticker_data: ChartData[] = [];

    // Since They Share the Same Key, We Can Get
    for (const key of Object.keys(Open)) {
      // Key is Time in Unix
      const time = new Date(Number(key)).toISOString().split("T")[0];

      const newChartData: ChartData = {
        time: time,
        open: Open[key],
        high: High[key],
        close: Close[key],
        low: Low[key],
      };

      formatted_ticker_data.push(newChartData);
    }

    return formatted_ticker_data;
    
  } catch (exception) {
    console.error("Error!", exception);
  }
}
