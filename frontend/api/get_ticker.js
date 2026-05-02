const URL = "http://127.0.0.1:5000";

export async function getTicker(marketName, duration) {
  const data = await fetch(`${URL}/get_market`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ marketName: marketName }, { duration: duration }),
  }).then(async (res) => await res.json());

  console.log("Data is ", data);

  // Parse This Data: Open: {Unix: Value} and Continue On
}
