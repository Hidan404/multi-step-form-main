function toggleChange() {
    const mes = document.getElementById("monthly");
    const toggle = document.getElementById("toggle");
    const ano = document.getElementById("yearly");
    console.log("vai dar certo");

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        mes.classList.add("active");
        mes.classList.remove("inactive");
        ano.classList.remove("active");
        ano.classList.add("inactive");
      } else {
        mes.classList.remove("active");
        mes.classList.add("inactive");
        ano.classList.add("active");
        ano.classList.remove("inactive");
      }
    });
  }
  toggleChange();

  function cardBorderActicve() {
    const cards = document.querySelectorAll(".card-body");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("custom-borda");
      });
    });
  }
  cardBorderActicve();