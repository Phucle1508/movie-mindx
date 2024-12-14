export const TMDB_API_KEY = "8902f4916ccf6ef6189845a6fb6e193b";
addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    document
      .querySelector(".navbar")
      .classList.remove("navbar-background-visible");
  } else {
    document
      .querySelector(".navbar")
      .classList.add("navbar-background-visible");
  }
});
