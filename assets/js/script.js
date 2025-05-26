//  header section 
const openIcon = document.getElementById("mobile-menu-open-icon");
const closeIcon = document.getElementById("mobile-menu-close-icon");
const headerMenu = document.getElementById("header-menu");
openIcon.addEventListener("click", ()=>{
   closeIcon.style.display = "block";
   headerMenu.style.display = "block";
   openIcon.style.display = "none";

})
closeIcon.addEventListener("click", ()=>{
   closeIcon.style.display = "none";
   headerMenu.style.display = "none";
   openIcon.style.display = "block";
})