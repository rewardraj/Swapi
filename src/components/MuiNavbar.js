import React from 'react';
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`


export const MuiNavbar = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Stack direction='row' spacing={3}>
          <Link to='/' style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/character' style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <Button color='inherit'>Character</Button>
          </Link>
          <Link to='/favorites' style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <Button color='inherit'>Favorites</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar;