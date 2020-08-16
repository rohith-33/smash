$('#formbutton').click(async()=>{
    var userdata={
      name:document.getElementById('name').value,
      rollno:document.getElementById('roll').value,
      age:document.getElementById('age').value,
      email:document.getElementById('exampleInputEmail1').value,
      phonenumber:document.getElementById('number').value
 }
 await $.post('/submitdata',userdata,async(data,status)=>{
     
   if(status=="success")
       {
         window.setTimeout(()=>{
            $('#show').html("Submitted Sucessfully")
         },1000);
          window.setTimeout(()=>{
             window.location.reload()
          },2000)
       }
 })
 })
 $('#getallusers').click(async()=>{
   await $.get('/getallusers',(data,status)=>{
         if(status=='success')
         {
          var users=JSON.parse(data)
           // console.log(data);
           var html="<div id=\"table\"><table id=\"allusers\"><tr><th>Name</th><th>Roll no</th><th>Age</th><th>Email</th><th>Phonenumber</th></tr>";
           for(let i=0;i<users.length;i++)
           {
             html=html+"<tr><td>"+users[i].name+"</td><td>"+users[i].rollno+"</td><td>"+users[i].age+"</td><td>"+users[i].email+"</td><td>"+users[i].phonenumber+"</td></tr>";
           }
           html+="</table></div>"
           $("body").append(html)
         }
   })
 })