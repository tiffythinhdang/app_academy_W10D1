
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
  let p = document.createElement("p");
  p.textContent = string;
  if (htmlElement.children.length > 0 && htmlElement.id === "clock") {
    htmlElement.innerHTML = "";
  }
  htmlElement.append(p);
};

// htmlGenerator('Party Time.', partyHeader);
// htmlGenerator('I <3 Vanilla DOM manipulation', partyHeader);

module.exports = htmlGenerator;