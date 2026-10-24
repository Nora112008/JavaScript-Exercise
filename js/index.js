let popupKeys = document.querySelectorAll("#Gallery .popupKey"),
popupEle = document.querySelector(".popup"),
popupBoxEle  = popupEle.querySelector(".box"),
popupExitKey = popupEle.querySelector(".close"),
popupImgEle = popupEle.querySelector("img"),
galleryImages = document.querySelectorAll("#Gallery img"),
currentImgIndex,
popupNextKey = popupEle.querySelector(".next"),
popupPrevKey = popupEle.querySelector(".prev"),
popupIndicatorsContainer = popupEle.querySelector(".indicators");


for(let i = 0; i < galleryImages.length; i++){
    let newIndicator = document.createElement("li");
    newIndicator.textContent =i + 1;

    if(i == 0 ){
        newIndicator.classList.add("active");
    }

    popupIndicatorsContainer.append(newIndicator);
}

let popupIndicators = popupEle.querySelectorAll(".indicators li");

popupKeys.forEach(function(popupKey){
    popupKey.addEventListener("click", function(){

        let currentImgEle = popupKey.parentElement.previousElementSibling,
        currentImgSrc = currentImgEle.getAttribute("src"),
        galleryImagesArr = Array.from(galleryImages);

        currentImgIndex = galleryImagesArr.indexOf(currentImgEle);

        popupImgEle.setAttribute("src", currentImgSrc)

        updatePopupImg(currentImgSrc);
        
        updateIndicators();

        openPopUp();
    });
});


popupEle.addEventListener("click", closePopUp);

popupBoxEle.addEventListener("click", function(e){
    e.stopPropagation();
});

popupExitKey.addEventListener("click", closePopUp);


popupNextKey.addEventListener("click", function(){
    
    currentImgIndex = ++currentImgIndex % galleryImages.length ;
    
    let nextImgIndex = currentImgIndex,
    nextImgEle = galleryImages[nextImgIndex],
    nextImgSrc = nextImgEle.getAttribute("src");

        updateIndicators();


    updatePopupImg(nextImgSrc);

});
popupPrevKey.addEventListener("click", function(){
    
    currentImgIndex = (--currentImgIndex == -1) ? galleryImages.length -1 : currentImgIndex;

    let prevImgIndex = currentImgIndex,
    prevImgEle = galleryImages[prevImgIndex],
    prevImgSrc = prevImgEle.getAttribute("src");

        updateIndicators();


    updatePopupImg(prevImgSrc);

});


popupIndicators.forEach(function(popupIndicator, currentIndicatorIndex){
    popupIndicator.addEventListener("click",function(){
        let newImgEle = galleryImages[currentIndicatorIndex],
        newImgSrc = newImgEle.getAttribute("src");

        currentImgIndex = currentIndicatorIndex;

        updatePopupImg(newImgSrc);
        updateIndicators();
    });
});

document.addEventListener("keydown", function(e){
    if( e.key === "Escape"){
        closePopUp();
    }else if (e.key === "ArrowRight"){
        currentImgIndex = ++currentImgIndex % galleryImages.length ;
    
    let nextImgIndex = currentImgIndex,
    nextImgEle = galleryImages[nextImgIndex],
    nextImgSrc = nextImgEle.getAttribute("src");
    

        updateIndicators();
    updatePopupImg(nextImgSrc);
    }else if (e.key === "ArrowLeft"){
        currentImgIndex = (--currentImgIndex == -1) ? galleryImages.length -1 : currentImgIndex;

    let prevImgIndex = currentImgIndex,
    prevImgEle = galleryImages[prevImgIndex],
    prevImgSrc = prevImgEle.getAttribute("src");

        updateIndicators();
    updatePopupImg(prevImgSrc);
};
document.addEventListener("keydown",(event) =>{
    let keyPressed = parseInt(event.key);
    if(!isNaN(event.key) && event.key !== " "){

    
        if (keyPressed >= "1" && keyPressed <= galleryImages.length){
            currentImgIndex = parseInt(keyPressed) -1;
            const currentImgSrc = galleryImages[currentImgIndex].getAttribute("src");
            updateIndicators();
            updatePopupImg(currentImgSrc);
        }

    }
});
});

