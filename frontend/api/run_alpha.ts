const URL = "http://127.0.0.1:5000";

export async function runAlpha() {
  const data = await fetch(`${URL}/run_alpha`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ alpha: "Buy high sell low" }),
  }).then((res) => res.json());

  console.log("Data is ", data);
}
