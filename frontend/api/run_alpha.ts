import { AlphaReturnType } from "@/app/types";
import { LOCALHOST_URL } from "./url";

export async function runAlpha() {
  let formattedData: AlphaReturnType = { dates: ["RESET"] };
  try {
    const data = await fetch(`${LOCALHOST_URL}/run_alpha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ alpha: "Buy high sell low" }),
    }).then((res) => res.json());

    console.log("Returned data is ", data);

    if (data.error) {
      throw Error(data.error);
    }

    formattedData = { dates: data.dates };
  } catch (error) {
    console.error("Error fetching alpha results ", error);
  }

  return formattedData;
}
