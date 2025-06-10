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

  // Prepare sliding bar for fade-in
  // slideBar.style.opacity = "0";
  // slideBar.style.transition = "top 0.3s, height 0.3s, opacity 0.01s";

  // Find the nav <a> whose href best matches the current path
  function getActiveNavItem() {
    const path = window.location.pathname.replace(/\/$/, '');
    let bestMatch = null;
    let bestLength = -1;
    list.querySelectorAll("a.nav-link").forEach(link => {
      const href = link.getAttribute("href").replace(/\/$/, '');
      // Match root or prefix for subpages
      if (href === path || (href !== '/' && path.startsWith(href))) {
        if (href.length > bestLength) {
          bestMatch = link.closest("li");
          bestLength = href.length;
        }
      }
    });
    // fallback to first if nothing matches
    return bestMatch || listItems[0];
  }

  let defaultItem = getActiveNavItem();
  // Hide bar until after first layout
  slideBar.style.display = "none";
  slideToItem(defaultItem);

  // Fade in the sliding bar after positioning and a slight delay
  setTimeout(() => {
    slideBar.style.display = "";
    // Force reflow to ensure transition applies after display change
    void slideBar.offsetWidth;
    slideBar.style.opacity = "1";
  }, 0);

  listItems.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      slideToItem(item);
    });
  });
  list.addEventListener("mouseleave", function() {
    slideToItem(getActiveNavItem());
  });

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