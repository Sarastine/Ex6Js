function Division() {
    var numberOne = document.getElementById('numberOne').value;
    var numberTwo = document.getElementById('numberTwo').value;
    var result = numberOne%numberTwo;
    if (isNaN(result) == true) {
        alert("Rentrez des nombres entiers !");
    } else {
        alert(result);
    }
}