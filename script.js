const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you! Your shifting request has been received. " +
        "Garima Shifting Solutions will contact you shortly."
    );

    bookingForm.reset();

});
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    setTimeout(function() {
        loader.classList.add("hide");
    }, 800);
});
// ===== BACK TO TOP =====

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});