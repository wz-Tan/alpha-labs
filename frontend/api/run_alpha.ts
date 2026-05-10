import { AlphaReturnObject } from "@/app/types";

const URL = "http://127.0.0.1:5000";

export async function runAlpha() {
  let formattedData: AlphaReturnObject = { dates: [] };
  try {
    const data = await fetch(`${URL}/run_alpha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alpha: "Buy high sell low" }),
    }).then((res) => res.json());

    formattedData = { dates: data.dates };
  } catch (error) {
    console.error("Error fetching alpha results ", error);
  }

  return formattedData;
}
