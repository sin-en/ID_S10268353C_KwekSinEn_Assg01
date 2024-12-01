document.addEventListener("DOMContentLoaded", function () {
  // Booking Form Validation
  var bookingForm = document.getElementById("booking-form");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");

  if (bookingForm) {
    nameInput.addEventListener("blur", function () {
      if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
      } else {
        nameError.textContent = "";
      }
    });

    emailInput.addEventListener("blur", function () {
      if (!emailInput.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
      } else {
        emailError.textContent = "";
      }
    });

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your submission!");
      bookingForm.reset();
    });
  }

  // Hover Interaction for Buttons
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = "#005fa3";
    });

    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "";
    });
  });

  // Scroll Animations
  var sections = document.querySelectorAll("section");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(function (section) {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease-in-out";
    observer.observe(section);
  });

  // Merchandise Section - Add to Cart
  var cart = [];
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");

  var updateCart = function () {
    cartItems.innerHTML = ""; // Clear the list
    var total = 0;

    cart.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item.name + " - $" + item.price.toFixed(2);
      cartItems.appendChild(li);
      total += item.price;
    });

    cartTotal.textContent = "Total: $" + total.toFixed(2);
  };

  var merchButtons = document.querySelectorAll(".merch-item button");
  merchButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var itemName = button.parentElement.querySelector("p").textContent;
      var itemPrice = parseFloat(
        button.parentElement.querySelector("p:nth-child(3)").textContent.slice(1)
      );

      cart.push({ name: itemName, price: itemPrice });
      updateCart();
    });
  });

  // Checkout Functionality
  var checkoutButton = document.getElementById("checkout-button");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Thank you for your purchase!");
        cart.length = 0; // Clear the cart
        updateCart();
      }
    });
  }
});

document.querySelectorAll(".tour-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.parentElement.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Ticket link is not available.");
    }
  });
});
