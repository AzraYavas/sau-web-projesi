document.addEventListener("DOMContentLoaded", () => {
    // Only run this script if we are on the ilgi.html page
    const moviesContainer = document.getElementById('movies-container');
    if (!moviesContainer) return;

    // List of favorite movies/series
    const favorites = [
        "10 things i hate about you",
        "arcane",
        "hunter x hunter",
        "iron man",
        "the amazing spider-man",
        "rick and morty"
    ];

    const apiKey = '4a3b711b'; // Public OMDB API Key for demo purposes

    const fetchMovieData = async (title) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("API hatası:", error);
            return null;
        }
    };

    const displayMovies = async () => {
        document.getElementById('loading').style.display = 'block';
        
        for (const title of favorites) {
            const movie = await fetchMovieData(title);
            
            if (movie && movie.Response === "True") {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';
                
                col.innerHTML = `
                    <div class="card card-custom h-100 movie-card">
                        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Resim+Yok'}" class="card-img-top" alt="${movie.Title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold" style="color: var(--primary-blue);">${movie.Title}</h5>
                            <p class="card-text text-muted mb-2">${movie.Year} | ${movie.Type}</p>
                            <p class="card-text small">${movie.Plot.substring(0, 100)}...</p>
                            <div class="mt-auto">
                                <span class="badge bg-warning text-dark">IMDB: ${movie.imdbRating}</span>
                            </div>
                        </div>
                    </div>
                `;
                moviesContainer.appendChild(col);
            }
        }
        document.getElementById('loading').style.display = 'none';
    };

    displayMovies();
});
