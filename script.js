// Mendapatkan semua elemen <a> yang ada
const buttons = document.querySelectorAll('a');

// Menambahkan event listener untuk setiap tombol
buttons.forEach(button => {
    // Event untuk hover effect menggunakan mouse enter dan mouse leave
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)'; // Membesar tombol saat hover
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Mengembalikan ukuran tombol setelah hover
    });

    // Event untuk menangani klik dan menambahkan animasi
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link langsung menuju URL
        this.style.transition = 'transform 0.3s'; // Menambahkan efek transisi
        this.style.transform = 'scale(0.9)'; // Mengecilkan tombol saat diklik
        setTimeout(() => {
            window.location.href = this.href; // Setelah animasi, arahkan ke URL
        }, 300); // Menunggu 300ms sebelum pergi ke halaman yang dituju
    });
});
