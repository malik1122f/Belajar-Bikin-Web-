document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".learn-more").forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const gameLinks = [
                "https://example.com/crystal-quest",
                "https://example.com/realm-defender",
                "https://example.com/crystal-chronicles"
            ];
            window.location.href = gameLinks[index];
        });
    });

    const navLinks = {
        home: "https://example.com/home",
        about: "https://example.com/about",
        games: "https://example.com/games",
        contact: "https://example.com/contact"
    };

    Object.keys(navLinks).forEach(id => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = navLinks[id];
            });
        }
    });
});
