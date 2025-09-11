function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
  
    
    let imc = peso / (altura * altura);
    
    document.getElementById("resposta").textContent = "O seu IMC é: " + imc;


    //sei que existem outras maneiras pra deixar o codigo mais clean, porem quis fazer do modo inciante mesmo
    if (imc <= 18.5) {
        document.getElementById("verificar").textContent = "Sua Classificação é de Magreza"
    }

    if (imc >= 18.6 && imc <= 24.5) {
        document.getElementById("verificar").textContent = "Sua Classificação é de Normal"
    }

    if (imc >= 25.0 && imc <= 29.9) {
        document.getElementById("verificar").textContent = "Sua Classificação é de Sobrepeso"
    }

    if (imc >= 30.0 && imc <= 39.9) {
        document.getElementById("verificar").textContent = "Sua Classificação é de Obesidade"
    }

    if (imc >= 40.0) {
        document.getElementById("verificar").textContent = "Sua Classificação é de Obesidade Grave"
    }
}
