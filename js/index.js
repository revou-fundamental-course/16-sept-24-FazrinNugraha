// Event listener yang dijalankan ketika DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Meminta nama pengguna melalui prompt
    let userName = prompt("Please enter your name:");
    
    // Mendapatkan elemen pesan selamat datang dari halaman
    let welcomeMessageElement = document.getElementById('welcomeMessage');
    
    // Jika pengguna mengisi nama dan elemen ditemukan, tampilkan pesan selamat datang dengan nama
    if (userName && welcomeMessageElement) {
        welcomeMessageElement.innerText = `Halo ${userName}, Selamat Datang Di Mini Project Saya`;
    } else {
        // Jika tidak, tampilkan pesan selamat datang default
        welcomeMessageElement.innerText = "Hi, Selamat datang di Mini project Saya ";
    }

    // Menginisialisasi variabel untuk slide banner saat ini dan array gambar slide
    let currentSlide = 0;
    const slides = [
        'assets/banner 1.jpg',
        'assets/banner 2.jpg',
        'assets/banner 3.jpg',
        'assets/banner 4.jpg'
    ];
    
    // Fungsi untuk mengganti slide secara otomatis
    function changeSlide() {
        // Mengganti slide dengan mengubah sumber gambar
        currentSlide = (currentSlide + 1) % slides.length;
        document.getElementById('slideImage').src = slides[currentSlide];
    }
    
    // Mengatur interval waktu untuk mengganti slide setiap 2 detik
    setInterval(changeSlide, 2000);
});

// Fungsi untuk memvalidasi form sebelum disubmit
function validateForm(event) {
    // Mencegah pengiriman form secara default
    event.preventDefault();

    // Mengambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('messageContent').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Menginisialisasi variabel validasi form
    let valid = true;

    // Mengosongkan pesan kesalahan sebelumnya
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('genderError').innerText = ''; 
    document.getElementById('messageError').innerText = '';

    // Validasi input nama
    if (!name) {
        document.getElementById('nameError').innerText = 'Nama harus di isi.';
        valid = false;
    }

    // Pola validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').innerText = 'Email harus di isi.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        // Jika format email tidak valid, tampilkan pesan kesalahan
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    }

    // Validasi pilihan gender
    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender harus di isi.'; 
        valid = false;
    }

    // Validasi input pesan
    if (!message) {
        document.getElementById('messageError').innerText = 'Message harus di isi.';
        valid = false;
    }

    // Jika semua validasi berhasil, tampilkan hasil form
    if (valid) {
        document.getElementById('resultMessage').innerText = 
            `Terima Kasih ${name} sudah mengisi form nya \n` +
            `Email: ${email}\n` +
            `Gender: ${gender.value}\n` + 
            `Message: ${message}`;

        // Reset form setelah sukses
        document.getElementById('contactForm').reset();
    }

    // Mencegah pengiriman form secara default
    return false;
}
