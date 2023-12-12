function isPalindrome(palavra){
   
    const frase = palavra.toLowerCase().replaceAll(" ","");
    let palavraInvertida = "" ; 

    for(let i = frase.length - 1 ; i >= 0 ; i--){
        palavraInvertida = palavraInvertida + frase[i];

    }

        if(frase == palavraInvertida){
            return true
        }
            return false
}






function arrayMaxMin(arr){
    /* Seu código aqui */
}
