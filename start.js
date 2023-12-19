function startQuiz(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var classInput = document.getElementById('class');

    var name = nameInput.value;
    var className = classInput.value;

    // Simpan nama dan kelas ke localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('class', className);

    // Arahkan ke halaman main.html
    window.location.href = 'main.html';
}
