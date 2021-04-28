export default function FetchApi(url) {
  async function loadData() {
    const response = await fetch(url);
    if (!response.ok) {
      // oups! something went wrong
      return "Error Call";
    }

    const res = await response.json();
    return res;
  }
  const data = loadData();

  return new Promise((resolve, reject) => {
    resolve(data);
    reject("Error");
  });
}
