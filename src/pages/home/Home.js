import styles from './Home.module.css'
import LinkButton from '../../components/buttons/LinkButton';
import HomeImage from '../../img/home-image.svg'
import Title from '../../components/texts/Title';
import GreatWord from '../../components/texts/GreatWord';
import Subtitle from '../../components/texts/Subtitle';


function Home(){

    

    return (
        <section className={styles.section}>
            <Title text="Gerenciamento de ">
                <GreatWord word='Projetos'/>
            </Title>
            <Subtitle text="Comece a gerenciar os seus projetos agora mesmo"/>     
            <LinkButton text='Criar Projeto' to='/newProject'/>  
            <img width='512' height='512' src={HomeImage} alt="HomeLogo"/>        
        </section>
    )
}

export default Home
