import React, {useState, useEffect} from 'react'
import { Card, Grid } from 'semantic-ui-react';
  
export default function Character ({data}) {
  
  const [people, setPeople] = useState({});
  
  useEffect(() => {
    async function fetchPeople(){
      const res = await fetch('https://swapi.dev/api/people/?format=json');
      const data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, []);

    return (
    <>
      <h2>Characters</h2>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
          <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
            
      </Grid>
    </>
  )
}

