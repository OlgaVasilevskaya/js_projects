document.querySelector("#eraser").addEventListener("click", () => {
  document.querySelector("#items").textContent = "";
});

document.querySelector("#user-input").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    createItem();
});


createItem = () => {
  const item = document.createElement("h2");
  item.textContent = "- " + document.querySelector("#user-input").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through") {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
  });

  document.querySelector("#items").appendChild(item); //вконце родителя добавляется элемент
  document.querySelector("#user-input").value = "";
};
