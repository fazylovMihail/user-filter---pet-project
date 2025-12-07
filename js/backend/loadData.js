export async function loadData() {
  const response = await fetch("http://127.0.0.1:5500/data/data.json");
  const data = await response.json();
  return data;
}