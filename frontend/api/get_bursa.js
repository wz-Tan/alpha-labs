import LOCALHOST_URL from"./url.ts"

export async function getBursa() {
  const data = await fetch(`${LOCALHOST_URL}/get_bursa`, {
    method: "GET",
  }).then((res) => res.json());

  console.log("Data is ", data);
}
