

function sayHello() {
    alert("Привіт! Рада бачити тебе на моєму сайті 💗");
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Повідомлення з сайту");
    const body = encodeURIComponent(
        "Ім'я: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Повідомлення:\n" + message
    );

    window.location.href =
        "mailto:hanna.holban@gmail.com?subject=" +
        subject + "&body=" + body;
}
const header = document.querySelector("#site-header");

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("#site-header");

    if (!header) {
        console.error("Header не знайдено!");
        return;
    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

});
