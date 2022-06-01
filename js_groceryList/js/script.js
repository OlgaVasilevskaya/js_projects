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
    item.style.textDecoration = item.style.textDecoration !== "line-through"
     ? "line-through"
      : "none";
  });

  document.querySelector("#items").appendChild(item);
  document.querySelector("#user-input").value = "";
};
