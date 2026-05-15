<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Boş kontrolü
    if (empty($email) || empty($password)) {
        header("Location: ../login.html?error=empty");
        exit();
    }

    // Kullanıcı adının (email) öğrenci numarası kısmını al
    // Örneğin: b2412100001@sakarya.edu.tr -> b2412100001
    $ogrenci_no = explode('@', $email)[0];
    $beklenen_domain = "@sakarya.edu.tr";
    
    // Mail formatı kontrolü ve şifrenin öğrenci numarası ile aynı olup olmadığının karşılaştırılması
    if (strpos($email, $beklenen_domain) !== false && $password === $ogrenci_no) {
        echo "<!DOCTYPE html>
        <html lang='tr'>
        <head>
            <meta charset='UTF-8'>
            <title>Hoşgeldiniz</title>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet'>
            <style>
                body { background-color: #fce7f3; font-family: 'Outfit', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; }
                .welcome-box { background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; }
                h1 { color: #1e3a8a; font-weight: bold; }
                span { color: #ec4899; }
            </style>
        </head>
        <body>
            <div class='welcome-box'>
                <h1>Hoşgeldiniz <span>$ogrenci_no</span></h1>
                <p class='mt-3'>Giriş işlemi başarıyla tamamlandı.</p>
                <a href='../index.html' class='btn btn-primary mt-3' style='background-color: #ec4899; border:none; border-radius: 30px; padding: 10px 30px;'>Ana Sayfaya Dön</a>
            </div>
        </body>
        </html>";
    } else {
        // Hatalıysa login sayfasına geri gönder (hata parametresi ile)
        header("Location: ../login.html?error=1");
        exit();
    }
} else {
    // Doğrudan erişime kapat
    header("Location: ../login.html");
    exit();
}
?>
