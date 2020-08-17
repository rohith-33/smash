$(function(){
  $("#submit").on("click",()=>{
      var jsondata={
          id:$("#_id").val(),
          name:$("#name").val(),
          lname:$("#lname").val(),
          em:$("#em").val(),
          age:$("#age").val(),
          dob:$("#dob").val(),
          mobile:$("#mobile").val()
        }
        $.ajax({
            type:"post",
            url:"/api/users/create",
            data: jsondata,
            success: function(){
               $("h5").html("your data is stored succesfully").hide().fadeIn("slow");
               setTimeout(() => {
                  location.reload();
               }, 2000);
                   
            } ,
            error:(err)=>{
              $("h5").html("sorry failed please try again").hide().fadeIn(slow);
              setTimeout(() => {
                 location.reload();
              }, 2000);
            }
        })
  })

 $("#view").on('click',function(){$.ajax({
  type:"get",
  url:"/api/users",
  success:function(data){
          display(data);
  },
  error: (err)=>{
      console.log("ERROR");
  }
})})
  



function display(data){
  var txt="<table><tr><th>ID</th><th>FIRSTNAME</th><th>LASTNAME</th><th>Email</th><th>AGE</th><th>DOB</th><th>MOBILE</th></tr>";
   for(var i=0;i<data.length;i++){
       txt+="<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].lname+"</td><td>"+data[i].em+"</td><td>"+data[i].age+"</td><td>"+data[i].dob+"</td><td>"+data[i].mobile+"</td"+"</tr>";
   }
   txt+="</table>";
   $("#table").html(txt);
}

})