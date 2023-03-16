import styles from './Container.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function ContainerApp(props){
    return (
        <>
            <CssBaseline />
            <Container className={'${styles.container} $style[props.customClass]'} maxWidth="lg" sx={{ display:'flex', justifyContent:'space-between', margin:"0 auto", flexWrap:'wrap' }}>
                <div>{props.children}</div>
            </Container>
        </>        
    )
}

export default ContainerApp