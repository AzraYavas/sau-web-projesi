<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Form Sonucu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="card card-custom p-5">
            <h2 class="text-center mb-4" style="color: var(--primary-blue);">Gönderilen Bilgiler</h2>
            <table class="table table-bordered table-striped">
                <tbody>
                    <?php
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        foreach ($_POST as $key => $value) {
                            // HTML taglarını temizle güvenlik için
                            $clean_value = htmlspecialchars($value);
                            $clean_key = htmlspecialchars(ucfirst($key));
                            echo "<tr>";
                            echo "<th style='width: 30%;'>{$clean_key}</th>";
                            echo "<td>{$clean_value}</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan='2' class='text-danger'>Form verisi bulunamadı. Lütfen iletişim sayfasından formu doldurun.</td></tr>";
                    }
                    ?>
                </tbody>
            </table>
            <div class="text-center mt-4">
                <a href="../iletisim.html" class="btn btn-custom">İletişim Sayfasına Dön</a>
            </div>
        </div>
    </div>
</body>
</html>
