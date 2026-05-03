<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $sifre = $_POST['sifre'];

    $parcalar = explode('@', $email);
    $kullaniciAdi = $parcalar[0]; // örneğin b123456789
    
    if (isset($parcalar[1]) && $parcalar[1] == 'sakarya.edu.tr' && $sifre === $kullaniciAdi) {
        // Başarılı Giriş
        echo "<div style='text-align:center; margin-top:50px; font-family:sans-serif;'>";
        echo "<h1 style='color:green;'>Hoşgeldiniz " . htmlspecialchars($kullaniciAdi) . "</h1>";
        echo "<p>Giriş işleminiz başarıyla tamamlandı.</p>";
        echo "<a href='../index.html'>Ana Sayfaya Dön</a>";
        echo "</div>";
    } else {
        // Başarısız Giriş -> Geri Yönlendir
        echo "<script>
            alert('Hatalı giriş! Lütfen bilgilerinizi kontrol ediniz.');
            window.location.href = '../login.html';
        </script>";
    }
} else {
    header("Location: ../login.html");
}
?>
