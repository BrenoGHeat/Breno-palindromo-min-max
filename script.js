function isPalindrome(palavra){
   
    const frase = palavra.toLowerCase().replaceAll(" ","");
    let palavraInvertida = "" ; 

    for(let i = frase.length - 1 ; i >= 0 ; i--){
        palavraInvertida = palavraInvertida + frase[i];
        console.log(palavraInvertida);

    }

        if(frase == palavraInvertida){
            return true
        }
            return false
}


function arrayMaxMin(arr){
  
   let valorMaximo = arr[0];
   let valorMinimo = arr[0];

   for(let i = 0 ; i < arr.length ; i++){
       if(arr[i] < valorMinimo){  
        valorMinimo =  arr[i];
       } 
       if( arr[i] > valorMaximo){
        valorMaximo = arr[i];
       }
    }
        console.log(valorMaximo, valorMinimo);
        console.log(arr);

   return [valorMinimo , valorMaximo];
}

