var input = document.getElementById("inputBox");
var button = document.getElementById("runButton");

function fetchSong() {
  console.log("finding song...");

  const query = input.value;
  console.log("request: ", query || "no query...");

  fetch(`https://dj-llm.vercel.app/v1/dj`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: query }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON of the response
    })
    .then((data) => {
      console.log("response: ", data); // Handle the data from the response
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
