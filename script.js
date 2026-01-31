function numberRemove(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let products_1 = [
  "asset/mohinh1.jpeg",
  1,
  "asset/mohinh2.jpg",
  2,
  "asset/mohinh3.jpeg",
  3,
];

let products_2 = [
  "asset/mohinh4.jpg",
  "asset/mohinh5.avif",
  "asset/mohinh6.webp",
];

let newProducts = numberRemove(products_1);
newProducts = newProducts.concat(products_2);

// ================= TH2 =================

function createItem(imgSrc) {
  let newDiv = document.createElement("div");
  newDiv.className = "product-item";

  let img = document.createElement("img");
  img.src = imgSrc;
  img.width = 200;
  img.height = 200;

  newDiv.appendChild(img);
  return newDiv;
}

function showProduct(arr) {
  let productList = document.getElementById("product-ls");
  for (let i = 0; i < arr.length; i++) {
    let item = createItem(arr[i]);
    productList.appendChild(item);
  }
}

showProduct(newProducts);
