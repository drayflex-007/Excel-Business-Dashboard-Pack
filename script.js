document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuBtn");
    const navigation = document.getElementById("nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    document.querySelectorAll(".faq-q").forEach(function (button) {

        button.addEventListener("click", function () {

            const wasActive = button.classList.contains("active");


            document.querySelectorAll(".faq-q").forEach(function (item) {

                item.classList.remove("active");

                const icon = item.querySelector("span");

                if (icon) {
                    icon.textContent = "+";
                }

            });


            if (!wasActive) {

                button.classList.add("active");

                const icon = button.querySelector("span");

                if (icon) {
                    icon.textContent = "−";
                }

            }

        });

    });

});
