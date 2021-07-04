const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

//===================================================
const list = document.querySelector("ul#ingredients");
const insertListItems = (items) => {
  const item = document.createElement("li");
  item.textContent = items;
  return item;
};
const allItems = ingredients.map((items) => insertListItems(items));
list.append(...allItems);
// console.log(list);
