const URL = "http://127.0.0.1:5000";

export async function getMarket(marketName) {
  const data = await fetch(`${URL}/get_market`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ marketName: marketName }),
  }).then((res) => res.json());

  console.log("Data is ", data);
}
