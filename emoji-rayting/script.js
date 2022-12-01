// start function and emoji-function
const starsEl =document.querySelectorAll(".fa-star")
const emojiEl = document.querySelectorAll(".far")
const colorsArray =["red", "orange", "blue", "lightgreen", "green"];
updateRayting(0)
starsEl.forEach((starsEl, index) =>{
    starsEl.addEventListener("click",()=>{
        updateRayting(index)
    });
});

function updateRayting(index){
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index + 1){
            starsEl.classList.add("active");
        }else {
            starsEl.classList.remove("active");
        }
    });

         // emoji fuctions
         
    emojiEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color =colorsArray[index]
    });
}



