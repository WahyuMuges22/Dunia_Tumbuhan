document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-dark');

    // Tambahkan animasi fade-in ke elemen dengan class .fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 200);
    });

    // Toggle dark mode saat tombol diklik
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Ubah teks ikon tombol
            toggleBtn.textContent = document.body.classList.contains('dark-mode')
                ? '☀️ Light Mode'
                : '🌙 Dark Mode';
        });
    }
});

const form = document.getElementById("formKontak");
const pesanTerkirim = document.getElementById("pesan-terkirim");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Tampilkan pesan sukses
    pesanTerkirim.style.display = "block";

    // Reset form
    form.reset();

    // Tampilkan prompt konfirmasi
    setTimeout(() => {
        const konfirmasi = window.confirm("Terima kasih Pesannya udah kami terima! Apakah Anda ingin kembali ke halaman Beranda?");
        if (konfirmasi) {
            window.location.href = "index.html";
        }
    }, 300);
});