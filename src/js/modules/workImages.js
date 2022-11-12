const works = () => {
    const imagesContainer = document.querySelector(".works"),
          div = document.createElement("div"),
          img = document.createElement("img");

    div.classList.add("popup");
    div.appendChild(img);
    imagesContainer.appendChild(div);
    div.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
    `;
    

    imagesContainer.addEventListener("click", (e) => {
        e.preventDefault()

        let target = e.target;

        if (target.classList.contains("preview")) {
            div.style.display = "flex";
            const href = target.parentNode.getAttribute("href");
            img.src = href;
            document.body.style.overflow = "hidden";
        }

        if (target.matches("div.popup")) {
            div.style.display = "none";
            document.body.style.overflow = "visible";
        }
    });
};

export default works;