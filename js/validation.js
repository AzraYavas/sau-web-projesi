function jsIleKontrolEt() {
    document.querySelectorAll('.hata-mesaji').forEach(e => e.style.display = 'none');
    
    let gecerli = true;
    let ad = document.getElementById('ad').value;
    let email = document.getElementById('email').value;
    let sehir = document.getElementById('sehir').value;
    let mesaj = document.getElementById('mesaj').value;
    let cinsiyetE = document.getElementById('erkek').checked;
    let cinsiyetK = document.getElementById('kadin').checked;

    if (ad.trim() === "") {
        document.getElementById('hataAd').style.display = 'block';
        gecerli = false;
    }
    if (email.indexOf('@') === -1) {
        document.getElementById('hataEmail').style.display = 'block';
        gecerli = false;
    }
    if (sehir === "") {
        document.getElementById('hataSehir').style.display = 'block';
        gecerli = false;
    }
    if (!cinsiyetE && !cinsiyetK) {
        document.getElementById('hataCinsiyet').style.display = 'block';
        gecerli = false;
    }
    if (mesaj.trim() === "") {
        document.getElementById('hataMesaj').style.display = 'block';
        gecerli = false;
    }

    if (gecerli) {
        document.getElementById('iletisimFormu').submit();
    }
}

function loginKontrol() {
    document.getElementById('hataLogEmail').style.display = 'none';
    document.getElementById('hataLogSifre').style.display = 'none';
    
    let email = document.getElementById('logEmail').value;
    let sifre = document.getElementById('logSifre').value;
    let gecerli = true;

    if (email.trim() === "" || email.indexOf('@') === -1) {
        document.getElementById('hataLogEmail').style.display = 'block';
        gecerli = false;
    }
    if (sifre.trim() === "") {
        document.getElementById('hataLogSifre').style.display = 'block';
        gecerli = false;
    }
    return gecerli;
}