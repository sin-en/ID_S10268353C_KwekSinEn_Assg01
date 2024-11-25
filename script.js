document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  
    // Simple booking form alert
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      bookingForm.reset();
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    // Tour filter functionality
    const filterButton = document.getElementById("filter-button");
    filterButton.addEventListener("click", () => {
      const locationInput = document.getElementById("location").value.toLowerCase();
      const tourItems = document.querySelectorAll(".tour-item");
      tourItems.forEach((item) => {
        const location = item.dataset.location.toLowerCase();
        if (location.includes(locationInput)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  
    // Booking form validation
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for booking Alec Benjamin!");
      bookingForm.reset();
    });
  });
  