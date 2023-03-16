import styles from './Container.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { width } from '@mui/system';

function ContainerApp(props){
    return (
        <>
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    minHeight="100vh"
                >
                {props.children}   
                </Box>
            </Container>
        </>        
    )
}

export default ContainerApp