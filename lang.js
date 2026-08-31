(function () {
  function setLang(lang) {
    document.querySelectorAll(".lang-block").forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem("flia-lang", lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });

    var saved = null;
    try { saved = localStorage.getItem("flia-lang"); } catch (e) {}

    var browserLang = (navigator.language || "es").slice(0, 2);
    var supported = ["es", "en", "ru"];
    var initial = saved && supported.indexOf(saved) !== -1
      ? saved
      : (supported.indexOf(browserLang) !== -1 ? browserLang : "es");

    setLang(initial);
  });
})();
