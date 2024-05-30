function showNextQuestion(currentQuestionId, nextQuestionId) {
    document.getElementById(currentQuestionId).classList.add('hidden');
    document.getElementById(nextQuestionId).classList.remove('hidden');
}

function submitForm() {
    var satisfactionValue = document.querySelector('input[name="satisfaction"]:checked');
    var reasonValue = document.getElementById('reason').value;

    console.log("Memnuniyet Seviyesi: " + satisfactionValue.value);
    console.log("Neden: " + reasonValue);
}