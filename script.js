const card = document.querySelectorAll(".card");
window.addEventListener("scroll",animateCards);

function animateCards(){
    const checkingBottom = (window.innerHeight / 4) * (125/25);

    card.forEach((singleCard)=>{
        const cardTop = singleCard.getBoundingClientRect().top;
        let toSlidIn = cardTop < checkingBottom;

        if(toSlidIn){
            singleCard.classList.add("slideIn");
        }else{
            singleCard.classList.remove("slideIn");
        }
    });
}