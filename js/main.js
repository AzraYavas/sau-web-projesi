const favoriler = [
    { ad: "Arcane", tur: "Dizi / Animasyon", resim: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { ad: "Iron Man", tur: "Film / Aksiyon", resim: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { ad: "Iron Man 2", tur: "Film / Aksiyon", resim: "https://images.unsplash.com/photo-1508672121123-f4b41b12b5b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { ad: "İnanılmaz Örümcek Adam 2", tur: "Film / Aksiyon", resim: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { ad: "Hunter x Hunter", tur: "Anime / Macera", resim: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { ad: "10 Things I Hate About You", tur: "Film / Romantik Komedi", resim: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

function icerikleriYukle() {
    let divAlan = document.getElementById('filmListesi');
    if(!divAlan) return;

    divAlan.innerHTML = '';
    favoriler.forEach(item => {
        divAlan.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 kutu-golge border-0 p-0 overflow-hidden">
                    <img src="${item.resim}" class="card-img-top" alt="${item.ad}" style="height: 250px; object-fit: cover; border-radius: 20px 20px 0 0;">
                    <div class="card-body text-center">
                        <h5 class="card-title mt-2" style="color: var(--secondary-color); font-weight: 800;">${item.ad}</h5>
                        <span class="badge" style="background-color: var(--primary-color); border-radius: 10px;">${item.tur}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

// Projendeki API Kullanımı Zorunluluğu İçin: Rastgele Kedi Fotoğrafı API'si 🐾
function tatliKediGetir() {
    let kediAlan = document.getElementById('kediGorseli');
    if(!kediAlan) return;

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
            kediAlan.src = data[0].url;
        })
        .catch(err => console.log('API hatası:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    icerikleriYukle();
    tatliKediGetir();
});