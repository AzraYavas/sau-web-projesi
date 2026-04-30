document.addEventListener('DOMContentLoaded', function() {
    const appAlan = document.getElementById('uygulama');
    if(appAlan && typeof Vue !== 'undefined') {
        const { createApp } = Vue;
        createApp({
            data() {
                return {
                    formVeri: { ad: '', email: '', sehir: '', cinsiyet: '', mesaj: '', ilgi: [] },
                    hatalar: { ad: '', email: '', sehir: '', cinsiyet: '', mesaj: '' }
                }
            },
            methods: {
                vueIleKontrolEt() {
                    this.hatalar = { ad: '', email: '', sehir: '', cinsiyet: '', mesaj: '' };
                    let gecerli = true;

                    if (this.formVeri.ad.trim() === "") { this.hatalar.ad = "Ad alanı boş bırakılamaz (Vue)"; gecerli = false; }
                    if (this.formVeri.email.indexOf('@') === -1) { this.hatalar.email = "Geçersiz email (Vue)"; gecerli = false; }
                    if (this.formVeri.sehir === "") { this.hatalar.sehir = "Şehir seçiniz (Vue)"; gecerli = false; }
                    if (this.formVeri.cinsiyet === "") { this.hatalar.cinsiyet = "Cinsiyet seçiniz (Vue)"; gecerli = false; }
                    if (this.formVeri.mesaj.trim() === "") { this.hatalar.mesaj = "Mesaj giriniz (Vue)"; gecerli = false; }

                    if(gecerli) {
                        document.getElementById('iletisimFormu').submit();
                    }
                }
            }
        }).mount('#uygulama');
    }
});