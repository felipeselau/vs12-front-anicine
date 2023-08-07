import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

import '../../styles/cards.css'
import './styles.css'
import Footer from '../../components/footer/Footer';

interface Movie {
    mal_id: number;
    title: string;
    aired: {
        from: string;
    };
    images: {
        jpg: {
            image_url: string;
        };
    };
}

const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    async function fetchMovies(query: string) {
        const response = await fetch(`https://api.jikan.moe/v4/anime?type=movie&q=${query}`);
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        return data.data;
    }

    const handleSearch = async () => {
        try {
            const results = await fetchMovies(searchQuery);
            setSearchResults(results);
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        }
    };

    return (
        <div className='body search-container'>
            <div className="search-wrapper">
            <h1>Pesquise Aqui seus filmes favoritos:</h1>
            <div className="search-input">
            <TextField
                label="Buscar filmes"
                variant="filled"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                    backgroundColor: 'var(--black-3)',
                    color: 'var(--white-2)',
                }}
            />
            <Button variant="contained" onClick={handleSearch} sx={{
                backgroundColor: 'var(--accent)',
                height: '100%',
                "&:hover":{
                    backgroundColor: "var(--accent-3)"
                }
            }}>
                Buscar
            </Button>
            </div>
            </div>
            <div className='cards-wrapper'>
                {searchResults.map(movie => (
                    <Card key={movie.mal_id} sx={{
                        margin: '16px', 
                        width: '300px', 
                        height: '400px',
                        backgroundColor: 'var(--black-3)',
                        color: 'var(--white-2)'
                        }}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={movie.images.jpg.image_url}
                            alt={movie.title}
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" sx={{
                                paddingBottom: "1rem"
                            }}>
                                Data de estreia: {movie.aired.from}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Search;