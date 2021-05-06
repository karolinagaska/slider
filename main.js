const slideList = [{
    img: "images/img1.jpg",
    text: "Tulum"
},
{
    img:"images/img2.jpg",
    text: "Amalfi"
},
{
    img: "images/img3.jpg",
    text: "Ubud"
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 2000; 
let active = 0; 

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time)


const changePhoto = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
    if(active === slideList.length){
        active = 0;
    } else if (active <= 0 ) {
        active = slideList.length - 1;
        
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time)
    }
    }


window.addEventListener("keydown", changePhoto);
