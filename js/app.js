document.getElementById("fahtocel").style.display="none";
document.getElementById("cara-konversi").innerHTML = "Suhu <b>S</b> dalam derajat Fahrenheit sama dengan  suhu <b>S</b> dalam derajat celsius kali 9/5 + 32 <br>S<sub>(°F)</sub> = (S<sub>(°F)</sub> x 9/5) + 32<br>atau<br>S<sub>(°F)</sub> = (S<sub>(°F)</sub> x 1.8) + 32"; 

function validateForm() {
    let x = document.getElementById("celsius").value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
} 

function conversion(id) {
    if(id=="konversi-celsius") {
        var celsius_val = parseFloat(document.getElementById("celsius-conv").value);
        if ( isNaN( parseInt(celsius_val) ) ) {
            window.alert("You have entered not a number");
        } else {
            var formula_celsius = ((celsius_val* 9.0 / 5.0) + 32.0);
            document.getElementById("fahren-val").value = formula_celsius; 
            document.getElementById("kalkulasi").innerText = celsius_val + "°C * (9 / 5) + 32 = " + formula_celsius + "°F";
        }
        
    } else if(id="konversi-fahren") {
        var fahrenheit_val = parseFloat(document.getElementById("fahren-conv").value);
        if ( isNaN( parseInt(fahrenheit_val) ) ) {
            window.alert("You have entered not a number");
        } else {
            var formula_fahren = (fahrenheit_val - 32) * 5/9;
            document.getElementById("celsius-val").value = formula_fahren;
            document.getElementById("kalkulasi").innerText = "(" + fahrenheit_val + "°F - 32) * 5/9 = " + formula_fahren + "°C";
        }
    } else {
        document.getElementById("fahren-val").value = "error!"; 
        document.getElementById("celsius-val").value = "error!";
    }
}

function reset() {
    document.getElementById("fahren-conv").value = "";
    document.getElementById("fahren-val").value = "";
    document.getElementById("celsius-conv").value = "";
    document.getElementById("celsius-val").value = "";
}

function reverse(id) {
    if(id=="reverse-fahren") {
        document.getElementById("celtofah").style.display="none";
        document.getElementById("fahtocel").style.display="block";
        document.getElementById("fahren-conv").value = "";
        document.getElementById("celsius-val").value = ""; 
        document.getElementById("kalkulasi").innerText = "";
        document.getElementById("ket").innerText = "Cara Konversi Fahrenheit (°F) ke Celsius (°C)"; 
        document.getElementById("cara-konversi").innerHTML = "Suhu <b>S</b> dalam derajat Fahrenheit sama dengan  suhu <b>S</b> dalam derajat celsius kali dikurang 32 dikali 5/9 <br>S<sub>(°C)</sub> = (S<sub>(°F)</sub> - 32) x 5/9<br>atau<br>S<sub>(°C)</sub> = (S<sub>(°F)</sub> - 32) x 0.6"; 
    } else {
        document.getElementById("celtofah").style.display="block";
        document.getElementById("fahtocel").style.display="none";
        document.getElementById("celsius-conv").value = "";
        document.getElementById("fahren-val").value = ""; 
        document.getElementById("kalkulasi").innerText = "";
        document.getElementById("ket").innerText = "Cara Konversi Celsius (°C) ke Fahrenheit (°F)"; 
        document.getElementById("cara-konversi").innerHTML = "Suhu <b>S</b> dalam derajat Fahrenheit sama dengan  suhu <b>S</b> dalam derajat celsius kali 9/5 + 32 <br>S<sub>(°F)</sub> = (S<sub>(°C)</sub> x 9/5) + 32<br>atau<br>S<sub>(°F)</sub> = (S<sub>(°F)</sub> x 1.8) + 32"; 
    }
}
