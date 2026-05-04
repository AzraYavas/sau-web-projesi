<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $sifre = $_POST['sifre'];

    $parcalar = explode('@', $email);
    $kullaniciAdi = $parcalar[0]; // b123456789 kısmı
    
    if (isset($parcalar[1]) && $parcalar[1] == 'sakarya.edu.tr' && $sifre === $kullaniciAdi) {
        // Başarılı Giriş
        echo "<!DOCTYPE html><html lang='tr'><head><meta charset='UTF-8'><title>Hoş Geldin 🌸</title>";
        echo "<link href='../css/style.css' rel='stylesheet'></head><body style='display:flex; align-items:center; justify-content:center; height:100vh; background: var(--bg-color);'>";
        echo "<div class='kutu-golge text-center p-5'>";
        echo "<h1 style='color: var(--secondary-color); font-weight:800;'>Hoş Geldin, " . htmlspecialchars($kullaniciAdi) . "! ✨</h1>";
        echo "<p class='mt-3 mb-4' style='font-size: 1.1rem;'>Sisteme başarıyla giriş yaptın.</p>";
        echo "<a href='../index.html' class='btn btn-primary'>Ana Sayfaya Dön 🌸</a>";
        echo "</div></body></html>";
    } else {
        // Başarısız Giriş
        echo "<script>
            alert('Hatalı giriş yaptın canım! Bilgilerini kontrol edip tekrar dener misin? 🌸');
            window.location.href = '../login.html';
        </script>";
    }
} else {
    header("Location: ../login.html");
}
?>