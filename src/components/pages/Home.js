import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton.js'

function Home() {
	return (
		<section className={styles.home_container}>
			<h1>Bem-vindo ao <span>Costs</span></h1>
			<p>Comece a gereciar os seus projetos agora mesmo!</p>
			<LinkButton to="/NewProject" text="criar Projeto" />
			<img src={savings} alt="Costs" />
			<p>Atenção! projeto interrompido no video #25 do curso de react </p>
		</section>	

	)
}

export default Home;