const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ADIDAS",
    price: 2500,
    colors: [
      {
        code: "black",
        img: "./img/adida3.png",
      },
      {
        code: "darkblue",
        img: "./img/adida2.png",
      },
    ],
  },
  {
    id: 2,
    title: "NIKE",
    price: 1500,
    colors: [
      {
        code: "lightgray",
        img: "./img/NikeShoeWhite.png",
      },
      {
        code: "green",
        img: "./img/NikeShoeGreen1.png",
      },
    ],
  },
  {
    id: 3,
    title: "WOODLAND",
    price: 1700,
    colors: [
      {
        code: "lightgray",
        img: "./img/WoodlandShoe.jpg",
      },
      {
        code: "green",
        img: "./img/WoodlandShoe3.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "LEE COOPER",
    price: 1400,
    colors: [
      {
        code: "black",
        img: "./img/LeeCooperBlack.jpeg",
      },
      {
        code: "lightgray",
        img: "./img/leecooperwhite1.jpg",
      },
    ],
  },
  
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

   
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});