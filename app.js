let data = [
  {
    id: 1,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson Smith",
    job: "WEB DESIGNER",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "INTERN",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "THE BOSS",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

let img = document.querySelector(".image img");
let name = document.querySelector("h4");
let job = document.querySelector("span");
let text = document.querySelector("p");

let prevArrow = document.querySelector(".prev");
let nextArrow = document.querySelector(".next");
let button = document.querySelector("button");

// set starting item

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

// show person based on item
function showPerson() {
  const item = data[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

// show next person
nextArrow.addEventListener("click", () => {
  currentItem++;
  if (currentItem > data.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevArrow.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson();
});

button.addEventListener("click", () => {
  let randomReview = Math.floor(Math.random() * data.length);
  currentItem = randomReview;
  showPerson();
});
