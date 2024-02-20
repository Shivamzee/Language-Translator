const fromText = document.querySelectorAll("textarea");
const icons = document.querySelectorAll(".row i");

icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    if (target.classList.contains("fa-copy")) {
      if (target.id == "from") {
        let kk = fromText.value;
        console.log("From copy icon clicked", kk);
      } else {
        console.log("Copy icon is not working");
      }
    } else {
      console.log("Speech icon is clicked");
    }
  });
});

// Google translate fn()
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,it,fr,ru,de,hi,gu,kn,ta,es,sa,pa,tr,te,zh,ja",
      autoDisplay: false,
    },
    "google_translate_element"
  );
}
