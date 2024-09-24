// Fungsi untuk menampilkan sapaan ke user
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Please enter your name:");
    
    // Pastikan elemen welcomeMessage sudah ada di DOM
    let welcomeMessageElement = document.getElementById('welcomeMessage');
    
    if (userName && welcomeMessageElement) {
        // Menampilkan pesan sapaan dengan nama user
        welcomeMessageElement.innerText = `Halo ${userName}, Selamat Datang Di Mini Project Saya`;
    } else {
        // Jika nama tidak dimasukkan atau elemen tidak ditemukan
        welcomeMessageElement.innerText = "Hi, Selamat datang ";
    }
});

// Fungsi validasi form
function validateForm(event) {
    // Mencegah form submit default
    event.preventDefault();

    // Mengambil nilai input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('messageContent').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Inisialisasi validasi
    let valid = true;

    // Menghapus pesan error sebelumnya
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('genderError').innerText = ''; 
    document.getElementById('messageError').innerText = '';

    // Validasi Nama
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required.';
        valid = false;
    }

    // Validasi Email dengan Regex dasar
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').innerText = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    }

    // Validasi Gender
    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender is required.'; 
        valid = false;
    }

    // Validasi Pesan
    if (!message) {
        document.getElementById('messageError').innerText = 'Message is required.';
        valid = false;
    }

    // Jika semua validasi berhasil
    if (valid) {
        document.getElementById('resultMessage').innerText = 
            `Terima Kasih, ${name} sudah mengisi form nya \n` +
            `Email: ${email}\n` +
            `Gender: ${gender.value}\n` + 
            `Message: ${message}`;

        // Reset form setelah submit
        document.getElementById('contactForm').reset();
    }

    // Mengembalikan false agar form tidak di-submit
    return false;
}
