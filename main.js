 

function backword(title) {
    var char=" "
    for (let i = title.length; i > 0 ; i--) {
         char = char + title[i-1]  
             
    } 
    return char;     
}

console.log(backword("smartacademy"))



var number = "123456789"
    
for (let i = 0 ; i < number.length; i++) {
     console.log(parseInt(number[i]) ** parseInt(number[i])) 
           
}  

         
 function sqr( number , q ) {
    for (let index = 0; index < number.length; index++)
    { 
      for (let i = 1; i < q + 1 ; i++){
        console.log(parseInt(number[index]) ** i) 
     }     
    }           
 }
 sqr("2345", 4)
      
   
      


