function removePromotions() {
  $('article:has(svg~div:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Trending now"]>div>div:has(svg~span>span:contains("Promoted"))').css('display', 'none');
  $('aside[aria-label*="Who to follow"]>div>div:has(svg~div>span:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Explore"]>div>div>div:has(div>div>div>div>div>svg~span>span:contains("Promoted by"))').css('display', 'none');
}

window.addEventListener('scroll', removePromotions);
window.addEventListener('click', function () {
  removePromotions();
  setTimeout(removePromotions, 250);
  setTimeout(removePromotions, 500);
  setTimeout(removePromotions, 750);
  setTimeout(removePromotions, 1000);
});

// Make sure the promotions are removed on the first page load.
// Will remove every 500ms for up to the first 10 seconds.
setTimeout(removePromotions, 500);
setTimeout(removePromotions, 1000);
setTimeout(removePromotions, 1500);
setTimeout(removePromotions, 2000);
setTimeout(removePromotions, 2500);
setTimeout(removePromotions, 3000);
setTimeout(removePromotions, 3500);
setTimeout(removePromotions, 4000);
setTimeout(removePromotions, 4500);
setTimeout(removePromotions, 5500);
setTimeout(removePromotions, 6000);
setTimeout(removePromotions, 6500);
setTimeout(removePromotions, 7000);
setTimeout(removePromotions, 7500);
setTimeout(removePromotions, 8000);
setTimeout(removePromotions, 8500);
setTimeout(removePromotions, 9000);
setTimeout(removePromotions, 9500);
setTimeout(removePromotions, 10000);
