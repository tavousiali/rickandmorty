import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CharacterListItem from './CharacterListItem/CharacterListItem';
import CharacterResponse from '../../models/CharacterResponse';
import CharacterResult from '../../models/CharacterResult';


export default function List(props: any) {
    const [characters, setCharacters] = useState([] as CharacterResult[])

    useEffect(() => {
        fetchCharacterHandler()
    }, [])

    function fetchCharacterHandler() {
        let url = 'https://rickandmortyapi.com/api/character';
        fetch(url)
            .then((response) => { return response.json() })
            .then((data: CharacterResponse) => {
                setCharacters(data.results)
            })
    }

    return (
        <Box sx={{ flexGrow: 1, padding: '0.5rem' }}>
            {characters && <Grid container spacing={2}>
                {characters.map(character => (
                    <Grid key={character.id} item sm={12} md={6} lg={4} xl={3}>
                        <CharacterListItem character={character} />
                    </Grid>
                ))}
            </Grid>}
        </Box>
    );
}