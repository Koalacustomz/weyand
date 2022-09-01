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
        }, 100)
    }, 800)
  };

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("slider");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    }
  });

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("text3");

    service = document.getElementById('serivce-item');
    service2 = document.getElementById('serivce-item2');
    service3 = document.getElementById('serivce-item3');
    service4 = document.getElementById('serivce-item4');
    if (window.scrollY > elementTarget.offsetTop) {
    }
  });

  validated = 0;

  function validate(){
    if (document.getElementById('unternehmer').checked && validated == 0){
        document.getElementById('inputbarfirma').style.display = 'initial';
        validated = 1;
      } else if (validated == 2){
        document.getElementById('unternehmer').checked = true;
        document.getElementById('privatperson').checked = false;
        document.getElementById('inputbarfirma').style.display = 'initial';
        validated = 1;
      }
}

function validate2(){
  if (document.getElementById('privatperson').checked && validated == 0){
    document.getElementById('inputbarfirma').style.display = 'none';
    validated = 2;
  } else if (validated == 1){
    document.getElementById('unternehmer').checked = false;
    document.getElementById('privatperson').checked = true;
    document.getElementById('inputbarfirma').style.display = 'none';
    validated = 2;
  }
}