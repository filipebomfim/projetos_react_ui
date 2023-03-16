import style from './LinkButton.module.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AccountTree from '@mui/icons-material/AccountTree';
import Stack from '@mui/material/Stack';

function LinkButton({to,text}) {
    const HomeButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#222',
        color: '#00B0FF',
        margin: '1em',
        '&:hover': {
            backgroundColor: '#00B0FF',
            color: '#222',
        },
    }));

    return (
    <Stack direction="row" spacing={2}>
        <Link to={to} style={{ textDecoration: 'none' }}>
            <HomeButton variant="contained" endIcon={<AccountTree />}>
                {text}
            </HomeButton>
        </Link>
    </Stack>   
    
    )
}

export default LinkButton