// function to display 1-1000
function one () {

    for (i = 0; i <= 1000; i++){
        if (i % 2 == 0 && i % 3 == 0){
            document.write("<p style='font-weight:bold''color:red'>"+ i +"</p>");
        }

    else if (i % 2 == 0){
      document.write("<p style='font-weight:bold'>"+ i +"</p>");
    }
     

      else if (i % 3 == 0){
      document.write("<p style='color:red'>"+ i +"</p>");
      }
      else {
      document.write(i);
      }
    }
}
one()

