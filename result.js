var resultElement = document.getElementById('result');
var backButton = document.getElementById('backButton');
var resetButton = document.getElementById('resetButton');

// Get percentage values from URL parameters
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var percentageA = urlParams.get('percentageA');
var percentageB = urlParams.get('percentageB');
var percentageC = urlParams.get('percentageC');

// Get name and class from localStorage
var name = localStorage.getItem('name');
var className = localStorage.getItem('class');

// Display name and class in the result
resultElement.innerHTML = "Nama: " + name + "<br>" +
                          "Kelas: " + className + "<br><br>" +
                          "Visual: " + percentageA + "%<br>" +
                          "Auditori: " + percentageB + "%<br>" +
                          "Kinestetik: " + percentageC + "%";

function resetResult() {
    window.location.href = 'index.html';
}
