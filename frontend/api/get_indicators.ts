import { LOCALHOST_URL } from "./url";

export async function getIndicators({ indicators }: { indicators: string }) {
  console.log("Fetching indicators from backend");
  try {
    const data = await fetch(`${LOCALHOST_URL}/get_indicators`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => await res.json());
  } catch (exception) {
    console.error("Error getting indicators!", exception);
  }
}
