function openPopUp(){
        popupEle.classList.add("active");
        
        setTimeout(function(){
        popupEle.classList.add("show");
        }, 1);
    };

    function closePopUp(){
        popupEle.classList.remove("show");
        
        setTimeout(function(){
        popupEle.classList.remove("active");
        }, 1000);
    };

    function updatePopupImg(imgSrc){
        popupImgEle.setAttribute("src", imgSrc)
    };
    function updateIndicators(){
        let newIndicator = popupIndicators[currentImgIndex],
        oldIndicator = popupEle.querySelector(".indicators li.active");

        oldIndicator.classList.remove("active")
        newIndicator.classList.add("active");

    }