const navlist = document.querySelector("#categories");
console.log(`В списке ${navlist.children.length} категории.`);

const navItem = document.querySelectorAll(".item h2");
navItem.forEach((element) => {
  console.log("============================");
  console.log(`Категория: ${element.textContent}`);

  console.log(
    `Количество элементов: ${element.nextElementSibling.children.length}`
  );
});
