

const promise= fetch("https://jsonplaceholder.typicode.com/todos");
promise
.then(res=>res.json())
.then(data=>{
    var output="";
    data.forEach(element => {
        if(element.completed==true){
            output +=`<li class="list-group-item list-group-item-dark" >${element.id}  <input type="checkbox" class="form-check-input " checked disabled> ${element.title}</li>`
        }
        else{
            output +=`<li class="list-group-item">${element.id}  <input type="checkbox" class="form-check-input checkbox"  checked:> ${element.title}</li>`
        }
    
})
document.getElementById("red").innerHTML=output;
return output;
})



function time(){
    new Promise(function(resolve,reject){
        var last=  document.getElementsByClassName("checkbox");
        var count=0;
        for (var i=0; i<last.length; i++) {       
           if (last[i].type == "checkbox" && last[i].checked=== true){
              count++;
            }}
             if(count%5==0){resolve(`Congrats.${count} Tasks have been Successfully Completed `);}
           else{reject("tasks are not completed")}
           
           
        
    })
.then(
        function(value) { alert(value) })
.catch(function(e){console.log(e)})
       
}

