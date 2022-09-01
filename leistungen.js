window.onload = (event) => {
    load = document.getElementsByClassName('loadinganim');
    content = document.getElementsByClassName('main-content');
    navbar = document.getElementsByClassName('navbar');
    slider = document.getElementsByClassName('slider');
    text1 = document.getElementsByClassName('text1');
    text2 = document.getElementsByClassName('text2');
    text3 = document.getElementsByClassName('text3');

    setTimeout(function(){
        load.style.display = 'none';
        content.style.display = 'initial';
        setTimeout(function(){
            navbar.style.transition = '1s';
            navbar.style.width = '100%';
            navbar.style.opacity = '1';
        }, 100)
    }, 800)
  };

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementsByClassName("slider");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    }
  });

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementsByClassName("text3");

    service = document.getElementsByClassName('serivce-item');
    service2 = document.getElementsByClassName('serivce-item2');
    service3 = document.getElementsByClassName('serivce-item3');
    service4 = document.getElementsByClassName('serivce-item4');
    if (window.scrollY > elementTarget.offsetTop) {
    }
  });

  validated = 0;

  function validate(){
    if (document.getElementsByClassName('unternehmer').checked && validated == 0){
        document.getElementsByClassName('inputbarfirma').style.display = 'initial';
        validated = 1;
      } else if (validated == 2){
        document.getElementsByClassName('unternehmer').checked = true;
        document.getElementsByClassName('privatperson').checked = false;
        document.getElementsByClassName('inputbarfirma').style.display = 'initial';
        validated = 1;
      }
}

function validate2(){
  if (document.getElementsByClassName('privatperson').checked && validated == 0){
    document.getElementsByClassName('inputbarfirma').style.display = 'none';
    validated = 2;
  } else if (validated == 1){
    document.getElementsByClassName('unternehmer').checked = false;
    document.getElementsByClassName('privatperson').checked = true;
    document.getElementsByClassName('inputbarfirma').style.display = 'none';
    validated = 2;
  }
}