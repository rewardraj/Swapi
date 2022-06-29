import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Character({ character }) {
  return (
    <>
      <h1>Characters</h1>

      <Grid container spacing={3}>
        {character.map((character) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader>({character.name})</CardHeader>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Height</strong>
                    <p>{character.height}</p>
                    <strong>Mass</strong>
                    <p>{character.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{character.hair_color}</p>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        }
        )}
      </Grid>

    </>
  );
}
