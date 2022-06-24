document.getElementById("my_button").onclick = function() {
    var a = document.getElementById("my_text").value;
    var b = document.getElementById("my_text2").value;
    var opr = document.getElementById("my_opr").value;
    a = Number(a)
    b = Number(b)
    if (opr == "+") {
      console.log("a + b =", a + b);
      document.write("a + b =", a + b);
    }
    else if (opr == "-"){
        console.log("a - b =", a - b);
        document.write("a - b =", a - b);
    }
    else if (opr == "*"){
        console.log("a * b =", a * b);
        document.write("a * b =", a * b); 
    }
    else if (opr == "/") {
        console.log("a / b =", a / b);
        document.write("a / b =", a / b); 
    }
    else {
        document.write("invalid opr");
        console.log("invalid opr");
    }

}