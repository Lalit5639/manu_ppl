document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  // Show all products by default
  productCards.forEach((card) => {
    card.style.display = "block";
  });

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");

      productCards.forEach((card) => {
        const productCategory = card.getAttribute("data-category");

        if (category === "all" || productCategory === category) {
          card.style.display = "block"; // Show matching products
        } else {
          card.style.display = "none"; // Hide non-matching products
        }
      });
    });
  });
});
