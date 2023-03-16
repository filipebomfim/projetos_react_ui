import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import logo from '../../img/logo.png'

function Menu({menuItens}){
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
            
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                <Avatar
                    alt="Logo"
                    src={logo}
                    sx={{ width: 48, height: 48 }}
                />
                </Typography>
                <nav>
                {
                    menuItens.map((item)=>(
                        <Link
                            variant="button"
                            color="text.primary"
                            href={item.url}
                            sx={{ my: 1, mx: 1.5 }}
                        > {item.name}
                        </Link>                        
                    ))
                }
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Menu;