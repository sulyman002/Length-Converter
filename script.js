// const result-box = document.getElementById('result-box');

function convert() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    
   

    let result;



    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === 'Kilometers') {
        if (toUnit === 'Miles') result = inputValue * 0.621371;
        else if (toUnit === 'Meters') result = inputValue * 1000;
        else if (toUnit === 'Feet') result = inputValue * 3280.83;
        else if (toUnit === 'Inches') result = inputValue * 39370.1;
    } else if (fromUnit === 'Miles') {
        if (toUnit === 'Kilometers') result = inputValue * 1.60934;
        else if (toUnit === 'Meters') result = inputValue * 1609.34;
        else if (toUnit === 'Feet') result = inputValue * 5280;
        else if (toUnit === 'Inches') result = inputValue * 63360;
    } else if (fromUnit === 'Meters') {
        if (toUnit === 'Kilometers') result = inputValue / 1000;
        else if (toUnit === 'Miles') result = inputValue * 0.000621371;
        else if (toUnit === 'Feet') result = inputValue * 3.28084;
        else if (toUnit === 'Inches') result = inputValue * 39.3701;
    } else if (fromUnit === 'Feet') {
        if (toUnit === 'Kilometers') result = inputValue * 0.0003048;
        else if (toUnit === 'Miles') result = inputValue / 5280;
        else if (toUnit === 'Meters') result = inputValue * 0.3048;
        else if (toUnit === 'Inches') result = inputValue * 12;
    } else if (fromUnit === 'Inches') {
        if (toUnit === 'Kilometers') result = inputValue * 0.0000254;
        else if (toUnit === 'Miles') result = inputValue / 63360;
        else if (toUnit === 'Meters') result = inputValue * 0.0254;
        else if (toUnit === 'Feet') result = inputValue / 12;
    }
    // const converter = document.getElementById('input_container');
    // const newdiv = document.createElement('div');
    // newdiv.id = 'input_container'
    // const input = document.createElement('input');
    // input.className = 'input-result';
    // newdiv.appendChild('input');
    // converter.appendChild(newdiv);

    // input.textContent = `${input-value} ${fromUnit} is ${result.toFixed(2)}${toUnit}`

    const existing = document.getElementById('result-box');
    if (existing) {
        existing.parentElement.remove();
    }



    // Create new result input and container
    const container = document.querySelector('.calc-container');
    const resultContainer = document.createElement('div');
    const resultInput = document.createElement('input');

    resultInput.type = 'text';
    resultInput.id = 'result-box';
    resultInput.className = 'input-result';
    resultInput.readOnly = true;
    resultInput.value = `${inputValue} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;

    resultContainer.appendChild(resultInput);
    container.appendChild(resultContainer);
}