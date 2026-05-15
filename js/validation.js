document.addEventListener("DOMContentLoaded", function() {
    const nativeBtn = document.getElementById("nativeBtn");
    const errorDiv = document.getElementById("errorMessages");
    const form = document.getElementById("contactForm");

    if(nativeBtn) {
        nativeBtn.addEventListener("click", function() {
            let errors = [];
            
            const adsoyad = document.getElementById("adsoyad").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefon = document.getElementById("telefon").value.trim();
            const sehir = document.getElementById("sehir").value;
            const mesaj = document.getElementById("mesaj").value.trim();
            const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
            const onay = document.getElementById("onay").checked;

            if (adsoyad === "") errors.push("Ad Soyad alanı boş bırakılamaz.");
            
            // Email dogrulama
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                errors.push("E-posta alanı boş bırakılamaz.");
            } else if (!emailRegex.test(email)) {
                errors.push("Geçerli bir e-posta adresi giriniz.");
            }

            // Telefon dogrulama
            const phoneRegex = /^[0-9]{10,11}$/;
            if (telefon === "") {
                errors.push("Telefon numarası boş bırakılamaz.");
            } else if (!phoneRegex.test(telefon)) {
                errors.push("Telefon numarası sadece rakamlardan oluşmalı ve 10-11 haneli olmalıdır.");
            }

            if (!cinsiyet) errors.push("Lütfen cinsiyet seçiniz.");
            if (sehir === "") errors.push("Lütfen bir şehir seçiniz.");
            if (mesaj === "") errors.push("Mesaj alanı boş bırakılamaz.");
            if (!onay) errors.push("Kullanım koşullarını kabul etmeniz gerekmektedir.");

            if (errors.length > 0) {
                errorDiv.innerHTML = errors.join("<br>");
                errorDiv.classList.remove("d-none");
            } else {
                errorDiv.classList.add("d-none");
                form.submit();
            }
        });
    }
});
