const { createApp } = Vue;

createApp({
    data() {
        return {
            formData: {
                adsoyad: '',
                email: '',
                telefon: '',
                cinsiyet: '',
                sehir: '',
                mesaj: '',
                onay: false
            },
            vueErrors: []
        }
    },
    methods: {
        validateWithVue() {
            this.vueErrors = [];

            if (!this.formData.adsoyad) this.vueErrors.push("Vue: Ad Soyad gerekli.");
            
            if (!this.formData.email) {
                this.vueErrors.push("Vue: E-posta gerekli.");
            } else if (!this.validEmail(this.formData.email)) {
                this.vueErrors.push("Vue: Geçerli e-posta giriniz.");
            }

            if (!this.formData.telefon) {
                this.vueErrors.push("Vue: Telefon gerekli.");
            } else if (!/^[0-9]{10,11}$/.test(this.formData.telefon)) {
                this.vueErrors.push("Vue: Telefon sadece rakam (10-11 hane).");
            }

            if (!this.formData.cinsiyet) this.vueErrors.push("Vue: Cinsiyet seçiniz.");
            if (!this.formData.sehir) this.vueErrors.push("Vue: Şehir seçiniz.");
            if (!this.formData.mesaj) this.vueErrors.push("Vue: Mesaj yazınız.");
            if (!this.formData.onay) this.vueErrors.push("Vue: Kullanım koşullarını kabul ediniz.");

            if (this.vueErrors.length === 0) {
                // Hata yoksa formu submit et
                document.getElementById('contactForm').submit();
            }
        },
        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}).mount('#app');
