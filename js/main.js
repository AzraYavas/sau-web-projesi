// TVMaze API'sinden veri çekiyoruz
function dizileriGetir() {
    fetch('https://api.tvmaze.com/search/shows?q=batman')
        .then(cevap => cevap.json())
        .then(veriler => {
            let divAlan = document.getElementById('diziListesi');
            if(!divAlan) return; // Eğer başka sayfadaysak hata vermesin
            
            veriler.forEach(veri => {
                let dizi = veri.show;
                let resim = dizi.image ? dizi.image.medium : 'https://via.placeholder.com/210x295?text=Resim+Yok';
                
                divAlan.innerHTML += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100 kutu-golge">
                            <img src="${resim}" class="card-img-top" alt="${dizi.name}">
                            <div class="card-body text-center">
                                <h6 class="card-title">${dizi.name}</h6>
                                <span class="badge bg-secondary">${dizi.language || 'Bilinmiyor'}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(hata => console.log('Hata oluştu:', hata));
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', dizileriGetir);