<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Mesaj Sonucu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container my-5">
        <div class="card p-4 mx-auto" style="max-width: 600px;">
            <h3 class="text-success text-center">Form Başarıyla Gönderildi!</h3>
            <hr>
            <p><strong>Ad Soyad:</strong> <?php echo $_POST["ad"] ?? '-'; ?></p>
            <p><strong>E-Posta:</strong> <?php echo $_POST["email"] ?? '-'; ?></p>
            <p><strong>Şehir:</strong> <?php echo $_POST["sehir"] ?? '-'; ?></p>
            <p><strong>Cinsiyet:</strong> <?php echo $_POST["cinsiyet"] ?? '-'; ?></p>
            <p><strong>Mesaj:</strong> <?php echo $_POST["mesaj"] ?? '-'; ?></p>
            
            <p><strong>İlgi Alanları:</strong> 
                <?php 
                    if(isset($_POST["ilgi"])) {
                        echo implode(", ", $_POST["ilgi"]);
                    } else {
                        echo "Seçilmedi";
                    }
                ?>
            </p>
            
            <div class="text-center mt-3">
                <!-- BURASI GÜNCELLENDİ: ../iletişim.html -->
                <a href="../iletişim.html" class="btn btn-primary">Geri Dön</a>
            </div>
        </div>
    </div>
</body>
</html>
