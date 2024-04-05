
document.getElementById("btn").addEventListener("click",function(){
    //Input value has been collected
      let txt = document.getElementById("input-text").value;
      checkPalindrome(txt);
    });
        function checkPalindrome(txt){
        //'a-zA-Z0-9' will match all alphanumeric characters, i.e. lower case alphabet, upper case alphabet, and all numbers
        //The "g" modifier specifies a global match.
          let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          let len = txt_new.length;
        //'len' Indicates the total number of characters present in it
          let halfLen = Math.floor( len/2 );
          let result =document.getElementById("result");
          let i;
        
          for( i = 0; i < halfLen; i++){
        // !== is strict inequality operator
        //strict inequality operator checks whether its two operands are not equal, returning a Boolean result.
              if( txt_new[i] !== txt_new[len-1-i]){
                  result.textContent = "Sorry! Not a palindrome ";
                  return;
              }
        //textContent property sets or returns the text content of the specified node
              result.textContent = "Yes! It's a palindrome "
          }
        }