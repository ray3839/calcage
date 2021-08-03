function calc_age(){
  
  var year = document.getElementById("tb_year").value;
  var month = document.getElementById("tb_month").value;
  var day = document.getElementById("tb_day").value;
  
  var birth_day = new Date(year, month, day);
  var today = new Date;
  
  var result = today.getFullYear() - birth_day.getFullYear();
  if(today.getMonth() - birth_day.getMonth() < -1){
    result -= 1;
  }
  else if(today.getMonth() - birth_day.getMonth() == -1){
    if(today.getDate() - birth_day.getDate() < 0){
      result -= 1;
    }
  }
  
  document.getElementById("result").innerHTML = result;
}
