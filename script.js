document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Tour Filtering
  const searchInput = document.getElementById("search");
  const tourItems = document.querySelectorAll(".tour-item");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    tourItems.forEach((item) => {
      const location = item.dataset.location.toLowerCase();
      item.style.display = location.includes(query) ? "flex" : "none";
    });
  });

  // Booking Form Validation
  const bookingForm = document.getElementById("booking-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  nameInput.addEventListener("blur", () => {
    if (nameInput.value.trim().length < 3) {
      nameError.textContent = "Name must be at least 3 characters long.";
    } else {
      nameError.textContent = "";
    }
  });

  emailInput.addEventListener("blur", () => {
    if (!emailInput.value.includes("@")) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
    }
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your submission!");
    bookingForm.reset();
  });

  // Hover Interaction for Buttons
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#005fa3";
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "";
    });
  });

//   // Scroll Animations
//   const sections = document.querySelectorAll("section");
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = 1;
//           entry.target.style.transform = "translateY(0)";
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   sections.forEach((section) => {
//     section.style.opacity = 0;
//     section.style.transform = "translateY(50px)";
//     section.style.transition = "all 0.6s ease-in-out";
//     observer.observe(section);
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
  // Music Section - Play Selected Track
  const audioPlayer = document.querySelector(".music-player audio");
  const trackButtons = document.querySelectorAll(".play-track");

  trackButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const trackSrc = button.parentElement.getAttribute("data-src");
      audioPlayer.src = trackSrc;
      audioPlayer.play();
    });
  });

  // Merchandise Section - Add to Cart
  const cart = [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  const updateCart = () => {
    cartItems.innerHTML = ""; // Clear the list
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  };

  document.querySelectorAll(".merch-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const itemName = button.parentElement.querySelector("p").textContent;
      const itemPrice = parseFloat(
        button.parentElement.querySelector("p:nth-child(3)").textContent.slice(1)
      );

      cart.push({ name: itemName, price: itemPrice });
      updateCart();
    });
  });

  // Checkout Functionality
  const checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase!");
      cart.length = 0; // Clear the cart
      updateCart();
    }
  });
});
