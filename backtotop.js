
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.querySelector(".top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
    
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Lắng nghe sự kiện click vào nút "CHI TIẾT"
document.getElementById("chi-tiet-button").addEventListener("click", function() {
    // Điều hướng đến trang chi tiết khi nút được nhấp
    window.location.href = "https://phachedouong.com/cach-pha-ca-phe-den-da/";
});

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
// thanh menu khi chinh nho trang
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}