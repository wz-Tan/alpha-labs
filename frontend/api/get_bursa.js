const URL = "http://127.0.0.1:5000";

export async function getBursa() {
  const data = await fetch(`${URL}/get_bursa`, {
    method: "GET",
  }).then((res) => res.json());

  console.log("Data is ", data);
}
