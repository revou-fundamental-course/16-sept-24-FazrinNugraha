document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Please enter your name:");
    
    let welcomeMessageElement = document.getElementById('welcomeMessage');
    
    if (userName && welcomeMessageElement) {
        welcomeMessageElement.innerText = `Halo ${userName}, Selamat Datang Di Mini Project Saya`;
    } else {
        welcomeMessageElement.innerText = "Hi, Selamat datang di Mini project Saya ";
    }

   
    let currentSlide = 0;
    const slides = [
        'assets/banner 1.jpg',
        'assets/banner 2.jpg',
        'assets/banner 3.jpg',
        'assets/banner 4.jpg'
    ];
    
    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        document.getElementById('slideImage').src = slides[currentSlide];
    }
    
   
    setInterval(changeSlide, 2000);
});

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('messageContent').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    let valid = true;

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('genderError').innerText = ''; 
    document.getElementById('messageError').innerText = '';

    if (!name) {
        document.getElementById('nameError').innerText = 'Nama harus di isi.';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').innerText = 'Email harus di isi.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    }

    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender harus di isi.'; 
        valid = false;
    }

    if (!message) {
        document.getElementById('messageError').innerText = 'Message harus di isi.';
        valid = false;
    }

    if (valid) {
        document.getElementById('resultMessage').innerText = 
            `Terima Kasih ${name} sudah mengisi form nya \n` +
            `Email: ${email}\n` +
            `Gender: ${gender.value}\n` + 
            `Message: ${message}`;

        document.getElementById('contactForm').reset();
    }

    return false;
}
