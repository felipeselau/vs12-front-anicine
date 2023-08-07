import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../../styles/cards.css';

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

export default function HomeCards() {
    const [movies, setMovies] = useState<Movie[]>([]);

    async function fetchMovies() {
        const response = await fetch("https://api.jikan.moe/v4/anime?type=movie");
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        return data.data;
    }

    useEffect(() => {
        fetchMovies()
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                console.error('Erro ao buscar filmes:', error);
            });
    }, []);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className='cards-wrapper'>
            {movies.map(movie => (
                <Card key={movie.mal_id} sx={{
                    margin: '16px', 
                    width: '300px', 
                    height: '380px',
                    backgroundColor: 'var(--black-3)',
                    color: 'var(--white-2)',
                    
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
                            marginBottom: '12px',
                        }}>
                            Data de estreia: {formatDate(movie.aired.from)}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
