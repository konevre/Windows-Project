const tabs = (headerSelector, tabSelector, tabContentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector);

    const makeActive = (i = 0) => {
        if (activeClass === "active") {
            tab.forEach(activeItem => {
                activeItem.classList.remove(activeClass);
            })
            tab[i].classList.add(activeClass);
        } else {
            tab.forEach(activeItem => {
                activeItem.parentNode.classList.remove(activeClass);
            })
            tab[i].parentNode.classList.add(activeClass);
        } 
    }

    const showContent = (i = 0) => {
        tabContent[i].style.display = display;
    };

    const hideContent = () => {
        tabContent.forEach(content => {
            content.style.display = "none";
        });
    };

    hideContent();
    showContent();

    header.addEventListener("click", (e) => {
        const target = e.target;
        tab.forEach( (item, i) => {
            if (target === item || target === item.parentNode) {
                makeActive(i);
                hideContent();
                showContent(i)
            }
        });
    });
};

export default tabs;