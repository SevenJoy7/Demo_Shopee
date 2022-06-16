
//auto slide 4s, click dotbtn, click next & prev
var currentSlide = 0;
var slides = document.querySelectorAll(".app-slide__banner-item");
var dots = document.querySelectorAll('.dot-item');
var nextBtn = document.querySelector(".stardust-carousel__arrow--next");
var prevBtn = document.querySelector(".stardust-carousel__arrow--prev");

var init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
}
document.addEventListener("DOMContentLoaded", init(currentSlide));

//click next 
var next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
  init(currentSlide);
}
nextBtn.addEventListener('click', next);

// click prev
var prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
  init(currentSlide);
}
prevBtn.addEventListener('click', prev);

// chạy tự động slides 4s
setInterval(() => {
  next();
}, 4000);

// click dots về slides hiện tại
dots.forEach((dot, i) => { //vòng lặp
  dot.addEventListener("click", () => { //gắn trình xử lý sự kiện lắng nghe
    init(i); //gán giá trị i
    currentSlide = i;
  })
})

// ẩn hiện sublist khi click 
var itemLink = document.getElementsByClassName("category-item__link");
var i;

for (i = 0; i < itemLink.length; i++) {
  itemLink[i].addEventListener("click", function() {
    //thêm xóa class
    this.classList.toggle("category-item__link--active");
    var subList = this.nextElementSibling
    if (subList.style.display === "block") {
      subList.style.display = "none";
    } else {
      subList.style.display = "block";
    }
  });
}