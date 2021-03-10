 
var x = -5
var y = 15
var c = x + y

if(c % 2 === 1)
{console.log(c + " კენტი რიცხვია ")}

else

{ console.log(c + " ლუწი რიცხვია")}

// 2 task

var a = -2
var h = 8

if ( a * h >= 0)
{
    console.log( "ფართობია" + " " + a * h / 2)
}
else 
{ console.log("ფართობია" + " " + (- (a * h / 2) )) }



var b = -14
var k = 10

// if ( b>=0 && k >=0) { 
//     console.log ( b * k / 2 )    
//     } 
    
//     else if (( b < 0) && ( k >= 0 )) {
        
//         console.log (  b * k / 2 )
        
//     } else if ( ( b >= 0) && ( k < 0 ) )
        
//     {  k =  -k 
//         console.log( b *  k / 2)
//     } 
//     else {
//         b = -b 
//         k = -k 
//         console.log( b *  k / 2)
//     }
    
if ( b>=0 && k >=0) { 
console.log ( b * k / 2 )    
} 

else if (( b < 0) && ( k >= 0 )) {    
    console.log ("ფართობია "+  -b * k / 2 )
    
} else if ( ( b >= 0) && ( k < 0 ) )
    
{ console.log("ფართობია "+ b *  -k / 2)
} 
else { console.log("ფართობია "+ -b *  -k / 2)
}



