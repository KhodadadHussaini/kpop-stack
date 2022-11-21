const togg=document.getElementById("toggle");
const closes=document.getElementById("menu-close");
const show=document.getElementById("menu-toggle");
const headers=document.getElementById("header");


 togg.addEventListener('click',()=>{
  closes.classList.toggle('active');
  show.classList.toggle('show');
  headers.classList.toggle('showheader');
 });