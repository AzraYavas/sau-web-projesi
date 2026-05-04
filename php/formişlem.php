<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Mesaj Gönderildi 💖</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container my-5">
        <div class="kutu-golge text-center mx-auto p-5" style="max-width: 600px;">
            <h2 style="color: var(--secondary-color); font-weight: 800;">Mesajın Ulaştı! 💌</h2>
            <hr style="border-color: var(--primary-color);">
            <div class="text-start mt-4" style="font-size: 1.1rem;">
                <p><strong>Ad Soyad:</strong> <?php echo htmlspecialchars($_POST["ad"] ?? '-'); ?></p>
                <p><strong>E-Posta:</strong> <?php echo htmlspecialchars($_POST["email"] ?? '-'); ?></p>
                <p><strong>Şehir:</strong> <?php echo htmlspecialchars($_POST["sehir"] ?? '-'); ?></p>
                <p><strong>Cinsiyet:</strong> <?php echo htmlspecialchars($_POST["cinsiyet"] ?? '-'); ?></p>
                <p><strong>Mesaj:</strong> <br> <?php echo nl2br(htmlspecialchars($_POST["mesaj"] ?? '-')); ?></p>
                <p><strong>İlgi Alanları:</strong> 
                    <?php 
                        if(isset($_POST["ilgi"])) {
                            echo htmlspecialchars(implode(", ", $_POST["ilgi"]));
                        } else {
                            echo "Seçilmedi";
                        }
                    ?>
                </p>
            </div>
            
            <div class="text-center mt-5">
                <a href="../iletisim.html" class="btn btn-primary px-4">Geri Dön 🌸</a>
            </div>
        </div>
    </div>
</body>
</html>