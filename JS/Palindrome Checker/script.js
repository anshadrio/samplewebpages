function clickButton() {
    const text = document.querySelector("#texts").value;
    const find = text.split("").reverse().join("").replace(/[^a-zA-Z]/g, "");
  
    var fi = "Not a Palindrome";
  
    if (text == find) {
      fi = "Palindrome";
    } 
  
    const resu = document.querySelector(".results");
    resu.textContent = fi;
  }