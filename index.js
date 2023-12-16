************1**********************
function iterateAndLogWithFor(n) {
    for (var i=0;i<n;i++){
        if (i%2===0){
            console.log (i +' is even')
    }
        else {
            console.log(i+' is odd')
        }
    }
 }


 function iterateAndLogWithWhile(n) {
    var i=0
   while (i<n){
       if (i%2===0){
           console.log(i +' is even')
       }   
       else{
           console.log(i +' is odd')
   }
       i++
   }
}
***************2*********************
function reverseIterateAndLogWithFor(n) {
    for (var i=n;i>0;i--){
        if (i%2===0){
            console.log (i +' is even')
    }
        else {
            console.log(i+' is odd')
        }
    }
 }


 function reverseIterateAndLogWithWhile(n) {
    var i=n
     while (i>=0){
        if (i%2===0){
            console.log (i +' is even')
    }
        else {
            console.log(i+' is odd')
        }
         i--
    }
 }



 function reverseIterateAndLogRecursively(n) {
    if (n===0){
        return
    }
      if(n%2===0){
          console.log(n+' is even')  
      }
      else {
          console.log(n+' is odd')
      }
      
        reverseIterateAndLogRecursively(n-1)
  }
  ******************3**********************
  function weirdDivisionWithFor(n) {
    for (var i=1;i<=n;i++){
        if (n%3===0 && n%5===0){
            return('JuliaJames')
        }
        else if (n%5===0){
            return('James')
        }
        else if (n%3===0){
            return('Julia')
    }
        else{
            return i
    
    }
    }



    function weirdDivisionWithWhile(n){
        var i=1
        while (i<=n) {
            if (n%3===0 && n%5===0){
                return 'JuliaJames'
            }
            else if (n%5===0){
            return('James')
        }
            else if (n%3===0){
            return('Julia')
    }
            else{
            return n
    
    }
            i++
        }
    }

  

******************4********************
    function laughWithFor(number) {
        var result =''
         var str='ha'
         for (var i=0; i<number; i++){
            result=result+str
        }
          return result
     }




     function laughWithWhile(number) {
        var result=''
        var i=0
        while (i<=number) {
         result =result+'ha'
            
        }
         i++
        return result 
    }


    function laugh (n) {
        if (n === 0){
            return ""
        }
       return  laugh(n-1)  +"ha"
    }

