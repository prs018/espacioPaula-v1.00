let dias = [document.getElementById('lunes'), document.getElementById('martes'),
            document.getElementById('miercoles'), document.getElementById('jueves'),
            document.getElementById('viernes'), document.getElementById('sabado')];
let index=0;

function changeday(n){
  index += n;

  if(index > 5 || index<1){
    index=0;
    dias[index].style.display = "block";
  }


  dias.forEach((item) => {
    item.style.display = "none";
  });

  dias[index].style.display = "block";
}
