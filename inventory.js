const stones = [
  { category: "Ruby", name: "Burma Ruby", weight: "28.09 cts", cut: "Cabochon" },
  { category: "Emerald", name: "Zambian Emerald", weight: "42.02 cts", cut: "Oval Carving" },
  { category: "Sapphire", name: "Blue Sapphire", weight: "48.52 cts", cut: "Carving" },
  { category: "Spinel", name: "Vietnam Spinel", weight: "22.30 cts", cut: "Cushion" },
  { category: "Rubellite", name: "Rubellite Tourmaline", weight: "30.10 cts", cut: "Faceted" }
];

const container = document.getElementById("inventory");

function render(items) {
  container.innerHTML = "";
  items.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <h3>${s.name}</h3>
        <p>${s.category}</p>
        <p>${s.weight}</p>
        <p>${s.cut}</p>
        <p>
  <a href="https://wa.me/919999999999" target="_blank">WhatsApp</a> |
  <a href="mailto:info@joyfuljewel.com?subject=Gemstone Enquiry">Email</a>
</p>

      </div>
    `;
  });
}

function filter(cat) {
  if (cat === "All") render(stones);
  else render(stones.filter(s => s.category === cat));
}

render(stones);
