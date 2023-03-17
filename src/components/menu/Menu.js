import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import logo from '../../img/logo.png'

function Menu({menuItens}){
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
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
                                underline="none"
                                href={item.url}
                                sx={{ my: 1, mx: 1.5 }}
                            > {item.name}
                            </Link>                        
                        ))
                    }
                </nav>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Menu;