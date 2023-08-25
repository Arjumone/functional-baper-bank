function getInputFieldValueById(FieldId){
    const inputFieldId = document.getElementById(FieldId); 
    const inputFieldValueString = inputFieldId.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputFieldId.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

