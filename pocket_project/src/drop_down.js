
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  let arr = [];
  Object.keys(dogs).forEach(key => {
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.innerHTML = key;
    a.href = dogs[key];
    li.className = "dog-link";
    li.append(a);
    arr.push(li);
  });

  return arr;
}

const ul = document.querySelector(".drop-down-dog-list");

function attachDogLinks () {
  let dogLinks = dogLinkCreator();
  ul.className = "drop-down-dog-list hidden";
  dogLinks.forEach(link => {
    ul.append(link);
  });
}

attachDogLinks();

const h3 = document.querySelector(".drop-down-dog-nav");
h3.addEventListener("mouseenter", handleEnter);
h3.addEventListener("mouseleave", handleLeave);

function handleEnter () {
  ul.className = "drop-down-dog-list";
}

function handleLeave () {
  ul.className = "drop-down-dog-list hidden";
}



