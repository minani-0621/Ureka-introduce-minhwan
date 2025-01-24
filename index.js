window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(34, 34, 34, 0.75)';
        header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.5)';
    }else {
        header.style.backgroundColor = 'rgba(34, 34, 34, 1)';
        header.style.boxShadow = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[data-scroll]");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("data-scroll");
            const targetElement = document.querySelector(`#${targetId}`);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop - 100,
                    behavior: "smooth",
                });
            }
        });
    });
});