window.onload = (event) => {
    load = document.getElementById('loadinganim');
    content = document.getElementById('main-content');
    navbar = document.getElementById('navbar');
    slider = document.getElementById('slider');
    text1 = document.getElementById('text1');
    text2 = document.getElementById('text2');
    text3 = document.getElementById('text3');

    setTimeout(function(){
        load.style.display = 'none';
        content.style.display = 'initial';
        setTimeout(function(){
            navbar.style.transition = '1s';
            navbar.style.width = '100%';
            navbar.style.opacity = '1';
            slider.style.transition = '0.5s';
            slider.style.opacity = '1';
            slider.style.width = '1000px';
            slider.style.height = '560px';
        }, 100)
    }, 800)
  };

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("slider");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        text1.style.opacity = '1';
        text1.style.left = '0';
        text1.style.transition = '0.5s';
        text2.style.opacity = '1';
        text2.style.right = '0';
        text2.style.transition = '0.5s';
    }
  });

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("text3");

    service = document.getElementById('serivce-item');
    service2 = document.getElementById('serivce-item2');
    service3 = document.getElementById('serivce-item3');
    service4 = document.getElementById('serivce-item4');
    if (window.scrollY > elementTarget.offsetTop) {
        service.style.transition = '0.5s';
        service.style.left = '0';
        service.style.opacity = '1';
        text3.style.right = '0';
        text3.style.transition = '0.5s'
        text3.style.opacity = '1';
        setTimeout(function (){
            service2.style.transition = '0.5s';
            service2.style.left = '0';
            service2.style.opacity = '1';
            setTimeout(function (){
                service3.style.transition = '0.5s';
                service3.style.left = '0';
                 service3.style.opacity = '1';
                setTimeout(function(){
                    service4.style.transition = '0.5s';
                    service4.style.left = '0';
                    service4.style.opacity = '1';    
                }, 500)
            }, 500)
        }, 500)
    }
  });
