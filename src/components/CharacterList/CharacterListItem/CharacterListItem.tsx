import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LocationOn, Brightness1 } from '@mui/icons-material';
import CharacterResult from '../../../models/CharacterResult';

export default function ListItem(props: { character: CharacterResult }) {
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="body1" sx={{ fontWeight: 'bold' }}>
                        {props.character.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ fontWeight: 'bold' }}>
                        <Brightness1 sx={{
                            fontSize: '14px',
                            paddingRight: '4px',
                            color: props.character.status === "Alive" ? 'green' : props.character.status === "Dead" ? 'red' : ''
                        }} />
                        {props.character.status}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ paddingLeft: '4px', paddingRight: '4px' }}>
                        -
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ fontWeight: 'bold' }}>
                        {props.character.gender}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', display: 'flex', marginLeft: '-5px' }}>
                        <LocationOn sx={{ color: 'crimson' }} />
                        <Typography color="text.secondary" component="span" sx={{ fontWeight: 'bold' }}>
                            {props.character.location.name}
                        </Typography>
                    </Typography>

                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={props.character.image}
                alt={props.character.name}
            />
        </Card>
    );
}