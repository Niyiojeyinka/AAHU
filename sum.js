exports.sum =(userInput='0')=>{
   
          if(userInput.length ==1){
              return +userInput;
          }
         let userInputArray = userInput.split(/,|\n/);
      
        return userInputArray.reduce((a,b)=> parseInt(a) + parseInt(b));
     
 
}