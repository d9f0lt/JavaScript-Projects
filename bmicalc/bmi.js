var weight, height, measure, bmi, error;

function calculate() {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    error = "Введи нормальное значение";
    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
        measure = "Твой индекс массы это " + bmi + " что значит что " + "у вас недовес";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Твой индекс массы это " + bmi + " что значит что " + "у вас нормальный вес";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Твой индекс массы это " + bmi + " что значит что " + "у вас перевес";
    } else if (bmi >= 30) {
        measure = "Твой индекс массы это " + bmi + " что значит что " + "у вас крайне высокий процент жира";
    } 

    if (weight === 0) {
        document.getElementById("results").innerHTML = error;
    } else if (height === 0) {
        document.getElementById("results").innerHTML = error;
    } else {
        document.getElementById("results").innerHTML = measure;
    } if (weight < 0) {
        document.getElementById("results").innerHTML = "Введите нормальное значение.";
    }
}