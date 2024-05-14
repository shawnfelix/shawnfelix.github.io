
/* sets nav bar opacity shades */
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#menu li a");
    const currentPage = window.location.pathname;

    menuItems.forEach(function (item) {
        const link = item.getAttribute("href");
        const distance = Math.abs(link.length - currentPage.length); // Calculate distance

        // Adjust opacity based on distance
        item.style.opacity = 1 - (distance * 0.1); // Adjust multiplier as needed
    });
});

/** nav bar sliding bar animation */
document.addEventListener("DOMContentLoaded", function() {
  const slideBar = document.getElementById("sliding-bar");
  const list = document.getElementById("ph-page-nav-list");
  const listItems = list.querySelectorAll("li");
  
  // Default to the first li element
  const defaultItem = listItems[0];
  slideToItem(defaultItem);

  listItems.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      slideToItem(item);
    });
  });
  list.addEventListener("mouseleave", function() {
    slideToItem(defaultItem)});

  // Function to slide the bar to the specified item
  function slideToItem(item) {
    const rect = item.getBoundingClientRect();
    const navLinkHeight = window.getComputedStyle(item.getElementsByClassName("nav-link")[0]);
    const liTop = rect.top - parseFloat(navLinkHeight.paddingTop);
    const percent = (liTop + list.offsetTop) / list.clientHeight * 100;
    //slideBar.style.top = `${percent}%`;
    
    slideBar.style.height = `${rect.height}px`;

    slideBar.style.top = `${rect.top -45}px`;
    //slideBar.style.height = `${rect.height-10}px`;
  }
});