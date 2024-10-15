document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("orientationchange", () =>{
        location.reload()
    })

    // custom scroll
    const scrollBar = document.querySelector(".table__scrollbar");
    const scrollBarThumb = document.querySelector(".table__scrollbar-thumb");
    const scrollElem = document.querySelector('.table__body-scroll');
    const scrollContainer = document.querySelector('.table__body');

    let scrollBarHeight = scrollContainer.clientHeight;
    let scrollBarThumbHeight;
    if(scrollBarHeight >= scrollElem.clientHeight){
        scrollBar.style.display = "none"
    }else{
        scrollBarThumbHeight = (scrollBarHeight * scrollContainer.clientHeight) / scrollElem.scrollHeight;
    }

    scrollBarThumb.style.height = `${scrollBarThumbHeight}px`;
    scrollBar.style.height = `${scrollBarHeight}px`;

    let currentScrollDastance = 0

    scrollContainer.addEventListener("scroll", () =>{
        currentScrollDastance = (scrollContainer.scrollTop  * 100) / scrollContainer.clientHeight
        scrollBarThumb.style.top = `${(scrollBarThumbHeight / 100) * currentScrollDastance}px`

    })
    //scroll anim

    function isInViewport(element, visibilityThreshold) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

        const elementHeight = rect.height;
        const elementWidth = rect.width;

        const visibleArea = visibleHeight * visibleWidth;
        const totalArea = elementHeight * elementWidth;
        const visiblePercentage = visibleArea / totalArea;

        return visiblePercentage >= visibilityThreshold;
    }

    function addClassOnVisibility(element, className, visibilityThreshold) {
        window.addEventListener('scroll', () => {
            if (isInViewport(element, visibilityThreshold)) {
                element.classList.add(className);
            }
        });
        document.addEventListener("DOMContentLoaded", () =>{
            if (isInViewport(element, visibilityThreshold)) {
                element.classList.add(className);
            }
        })
    }


    const phoneCard = document.querySelector(".card__phone-img")
    const phoneLink = document.querySelector(".card__phone-link")
    const phoneCardDecor = document.querySelector(".card__phone-img-decor")
    const phoneLinkDecor = document.querySelector(".card__phone-link-decor")
    const infoBulbPers = document.querySelector(".info__buble-pers")
    const infoBulbTitle = document.querySelector(".info__buble-title")


    addClassOnVisibility(phoneCard, "phoneCardAnim", 0.3)
    addClassOnVisibility(phoneLink, "phoneLinkAnim", 0.3)
    addClassOnVisibility(phoneCardDecor, "phoneDecorAnim", 0.3)
    addClassOnVisibility(phoneLinkDecor, "phoneDecorAnim", 0.3)
    addClassOnVisibility(infoBulbPers, "scaleAnim", 0.3)
    addClassOnVisibility(infoBulbTitle, "scaleAnim", 0.3)

    // bottom link adapt

    const cardBottom = document.querySelector(".card__bottom")
    const cardBottomWrap = document.querySelector(".card__phone")

    if (window.innerWidth <= 600){
        if(window.innerWidth > cardBottomWrap.clientWidth){
            cardBottom.style.left = `-${window.innerWidth - cardBottomWrap.clientWidth}px`
        }else{
            cardBottom.style.left = `${Math.abs(window.innerWidth - cardBottomWrap.clientWidth)}px`
        }
    }

});
