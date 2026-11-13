document.addEventListener('DOMContentLoaded',function(){
  var b=document.querySelector('.menu-btn'); if(!b) return;
  b.addEventListener('click',function(){
    var o=document.body.classList.toggle('nav-open');
    b.setAttribute('aria-expanded',o?'true':'false');
    b.setAttribute('aria-label',o?'メニューを閉じる':'メニューを開く');
  });
  document.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('nav-open');});});
});
