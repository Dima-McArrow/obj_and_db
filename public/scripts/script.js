const theForm = document.querySelector("form#form");

const theButton = document.querySelector("button.submit");

const displayDiv = document.querySelector("div#display");

const getButton = document.querySelector("button#get");

const localName = localStorage.getItem("name");
const localTitle = localStorage.getItem("title");

const theShow = document.querySelector("div.local-storage_wrapper");

const clearButton = document.querySelector("button#clear");

const displayData = (data) => {
  displayDiv.innerHTML = "";
  console.log("here...");
  data.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = item.id + " - " + item.name + " - " + item.description;
    displayDiv.appendChild(newDiv);
  });
};

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/data");
    const data = await response.json();
    displayData(data);
  } catch (err) {
    console.error("Error getting data: ", err);
  }
};

theButton.addEventListener("click", (e) => {
  const formData = new FormData(theForm);
  const name = formData.get("name");
  const title = formData.get("title");

  if (!localStorage.getItem("name") || !localStorage.getItem("title")) {
    localStorage.setItem("name", name);
    localStorage.setItem("title", title);
  }

  getData();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  theShow.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.textContent = `Name: ${localName} - Title: ${localTitle}`;
  theShow.appendChild(newDiv);
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  theShow.innerHTML = "";
  displayDiv.innerHTML = "";
});
