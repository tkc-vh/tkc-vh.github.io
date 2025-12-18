// index-lang.js
// - Giữ CSP: không dùng inline script
// - Desktop: mặc định hiển thị 2 cột (VI|EN)
// - Khi user bấm VI/EN: thoát chế độ 2 cột để legal.js chuyển ngôn ngữ giống logo.html
(function(){
  function isDesktop(){
    return window.matchMedia && window.matchMedia('(min-width: 769px)').matches;
  }
  function setDesktopBoth(on){
    document.body.classList.toggle('desktop-both', !!on);
  }

  document.addEventListener('DOMContentLoaded', function(){
    // default: desktop 2 cột
    setDesktopBoth(isDesktop());

    // khi user bấm chuyển ngôn ngữ -> tắt 2 cột để legal.js hoạt động như logo
    var btns = document.querySelectorAll('.lang-switch button[data-lang]');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        setDesktopBoth(false);
      }, true);
    });

    // resize: nếu vẫn đang ở mode desktop-both thì cập nhật theo viewport
    window.addEventListener('resize', function(){
      if (!document.body.classList.contains('desktop-both')) return;
      setDesktopBoth(isDesktop());
    });
  }, { once:true });
})();