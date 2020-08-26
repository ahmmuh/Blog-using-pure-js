const url = "https://jsonplaceholder.typicode.com/posts";
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const col = document.querySelector(".col-4");

fetch(url)
  .then((res) => res.json())
  .then((data) => displayData(data));

function displayData(data) {
  for (var i = 0; i < data.length; i++) {
    const h2 = document.createElement("h2");
    h2.innerHTML = data[i].title;
    const p = document.createElement("p");
    p.innerHTML = data[i].body;
    col.appendChild(h2);
    col.appendChild(p);
  }
}

// get users

const userUrl = "https://jsonplaceholder.typicode.com/users";

fetch(userUrl)
  .then((res) => res.json())
  .then((data) => {
    getUsers(data);
  });

//   user list
function getUsers(data) {
  const ul = document.querySelector(".list-group");
  for (var i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = data[i].name;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      li.classList.toggle("toggleList");
    });
  }
}

let date = new Date();
date.getFullYear();
document.querySelector(".time").innerHTML =
  "Klockan är " + date.toLocaleTimeString();
