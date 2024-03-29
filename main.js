window.addEventListener("scroll", onScroll);

function onScroll() {
  showArrowToTopButtonOnScroll();
  showNavOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetline >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetline = sectionEndsAt <= targetline;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showArrowToTopButtonOnScroll() {
  if (scrollY > 600) {
    arrowToTopButton.classList.add("show");
  } else {
    arrowToTopButton.classList.remove("show");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

reveal();
function reveal() {
  ScrollReveal({
    origin: "top",
    distance: "3rem",
    duration: 700,
  }).reveal(`
   #home,
   #home
   img,
   #home
   .stats,
   footer,
    header
   `);

  ScrollReveal({
    origin: "left",
    distance: "3rem",
    duration: 700,
  }).reveal(`
   #services
    header,
   #services
   .card,
   #about,
   #about 
   header,
   #about 
   .content,
   #contact,
   header,
   .content
   `);
}
