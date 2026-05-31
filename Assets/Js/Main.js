const berita = [{
        judul: "Kecerdasan Buatan Semakin Canggih",
        tanggal: "27 Mei 2025",
        isi: "Teknologi AI kini mampu meniru suara manusia dengan sangat realistis.",
        gambar: "img/ai.jpg",
        link: "news/kecerdasan-ai.html",
    },
    {
        judul: "Inovasi Robotik di Sekolah",
        tanggal: "26 Mei 2025",
        isi: "Pelajar SMA menciptakan robot penyapu otomatis untuk lomba nasional.",
        gambar: "img/robotik.jpg",
        link: "news/inovasi-robotik.html",
    },
    {
        judul: "Perkembangan Internet 6G",
        tanggal: "25 Mei 2025",
        isi: "Para peneliti mulai menguji kecepatan jaringan 6G di beberapa negara.",
        gambar: "img/internet.jpg",
        link: "news/internet-6G.html",
    },
    {
        judul: "Chip Komputer Terbaru Rilis",
        tanggal: "24 Mei 2025",
        isi: "Chip generasi baru dari TechNova diklaim 2x lebih hemat energi.",
        gambar: "img/chip.jpg",
        link: "news/chip-komputer.html",
    },
    {
        judul: "Teknologi VR Semakin Nyata",
        tanggal: "23 Mei 2025",
        isi: "Pengalaman Virtual Reality kini bisa menciptakan sensasi sentuhan melalui sarung tangan pintar.",
        gambar: "img/vr.jpg",
        link: "news/teknologi-vr.html",
    },
    {
        judul: "Mobil Listrik dengan Jarak Tempuh 1000km",
        tanggal: "22 Mei 2025",
        isi: "Perusahaan otomotif meluncurkan mobil listrik yang bisa menempuh lebih dari 1000km dalam satu kali isi ulang.",
        gambar: "img/mobil-listrik.jpg",
        link: "news/mobil-listrik.html",
    },
    {
        judul: "Startup Indonesia Luncurkan Aplikasi Pembelajaran AI",
        tanggal: "21 Mei 2025",
        isi: "Aplikasi ini memudahkan pelajar memahami konsep AI melalui simulasi dan kuis interaktif.",
        gambar: "img/startup.jpg",
        link: "news/startup-indonesia.html",
    },
    {
        judul: "Perangkat Wearable untuk Kesehatan Jantung",
        tanggal: "20 Mei 2025",
        isi: "Jam tangan pintar terbaru bisa memantau detak jantung tidak normal dan memberi peringatan dini.",
        gambar: "img/wearable.jpg",
        link: "https://www.merdeka.com/sehat/teknologi-pintar-untuk-jantung-sehat-menjelajahi-peran-wearable-devices-dalam-kesehatan-kardiovaskular-223478-mvk.html",
    },
    {
        judul: "Teknologi Panel Surya Transparan",
        tanggal: "19 Mei 2025",
        isi: "Peneliti menciptakan panel surya transparan yang bisa dipasang di jendela gedung pencakar langit.",
        gambar: "img/panel-surya.jpg",
        link: "https://warstek.com/panel-surya-transparan/",
    },
    {
        judul: "Indonesia Uji Drone Pengantar Obat ke Daerah Terpencil",
        tanggal: "18 Mei 2025",
        isi: "Pengiriman medis dengan drone mulai diuji coba di wilayah pegunungan Papua.",
        gambar: "img/drone.jpg",
        link: "https://www.antaranews.com/berita/814382/sulsel-dorong-pemanfaatan-drone-untuk-kirim-obat-ke-daerah-terpencil",
    },
    {
        judul: "Game Berbasis AR Karya Mahasiswa",
        tanggal: "17 Mei 2025",
        isi: "Mahasiswa ITB mengembangkan game edukasi berbasis Augmented Reality untuk anak-anak.",
        gambar: "img/ar.jpg",
        link: "https://kliping.um.ac.id/index.php/voc-games-game-matematika-berbasis-augmented-reality-ala-mahasiswa-um/",
    },
    {
        judul: "Jaringan Satelit Global Segera Hadir",
        tanggal: "16 Mei 2025",
        isi: "StarNet akan menghadirkan internet berkecepatan tinggi ke seluruh wilayah terpencil dunia.",
        gambar: "img/satelit.jpg",
        link: "https://uzone.id/siapa-saja-pesaing-berat-starlink-ini-3-satelit-kompetitornya",
    },
    {
        judul: "Komputer Kuantum 10 Ribu Kali Lebih Cepat",
        tanggal: "15 Mei 2025",
        isi: "Penemuan baru membuat komputasi kuantum mendekati komersialisasi.",
        gambar: "img/qc.jpg",
        link: "https://teknologi.bisnis.com/read/20201208/280/1328026/china-punya-komputer-kuantum-tercepat-di-dunia-100-triliun-kali-lebih-cepat",
    },
    {
        judul: "Keyboard Lipat Super Tipis",
        tanggal: "14 Mei 2025",
        isi: "Gadget ini bisa dilipat seperti kertas namun tetap responsif dan nyaman digunakan.",
        gambar: "img/keyboard.jpg",
        link: "https://kumparan.com/how-to-tekno/5-keyboard-lipat-terbaik-yang-fleksibel-untuk-bekerja-256AkNdY1P2",
    },
];

const container = document.getElementById("daftar-berita");
const searchInput = document.getElementById("search");

// Fungsi tampilkan berita
function tampilkanBerita(data) {
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML =
            "<p><em>Tidak ada berita ditemukan.</em></p>";
        return;
    }

    data.forEach((item) => {
        container.innerHTML += `
        <div class="berita">
            <img src="${item.gambar}" alt="${item.judul}">
            <div class="konten">
                <h2>${item.judul}</h2>
                <p class="tanggal">${item.tanggal}</p>
                <p>${item.isi}</p>

                <button
                    class="btn btn-outline-secondary mt-4"
                    onclick="window.location.href='${item.link}'">
                    Read More
                </button>
            </div>
        </div>
        `;
    });
}
tampilkanBerita(berita);

// Fitur pencarian
searchInput.addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const hasil = berita.filter(
        (item) =>
        item.judul.toLowerCase().includes(keyword) ||
        item.isi.toLowerCase().includes(keyword)
    );
    tampilkanBerita(hasil);
});