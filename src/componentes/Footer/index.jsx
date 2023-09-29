import estilo from './Footer.module.css';
import linkedin from "../../assets/logos/logotipo_linkedin.png";
import github from "../../assets/logos/logotipo_github.png";
import portfolio from "../../assets/logos/logotipo_portfolio.png";
import instagram from "../../assets/logos/logotipo_instagram.png";

const Footer = () => {
    return (
        <section className={estilo.footer}>
            <div className={estilo.contato_e_redes_sociais}>
                <div className={estilo.contato}>
                    <h1 className={estilo.titulo}>Contato</h1>
                    <p className={estilo.texto_email}>Email: Brunochh@outlook.com</p>
                    <a href="#" target="_blank"><button className={estilo.botao_formulario}>Formulario de Contato</button></a>
                </div>
                <div className={estilo.redes_sociais}>
                    <h1 className={estilo.titulo}>Entre em contato conosco atraves das midias sociais</h1>
                    <ul className={estilo.lista}>
                        <li className={estilo.icones}>
                            <a href="https://www.linkedin.com/in/bruno-rodrigues-da-silva-/" target="_blank" rel='noreferrer'>
                                <img className={estilo.imagem_do_icone} src={linkedin} alt="" />
                            </a>
                        </li>
                        <li className={estilo.icones}>
                            <a href="https://portfolio-brunorodriguesc.vercel.app" target="_blank" rel='noreferrer'>
                                <img className={estilo.imagem_do_icone} src={portfolio} alt="" />
                            </a>
                        </li>
                        <li className={estilo.icones}>
                            <a href="https://github.com/BrunoRodriguesDaSilva" target="_blank" rel='noreferrer'>
                                <img className={estilo.imagem_do_icone} src={github} alt="" />
                            </a>
                        </li>
                        <li className={estilo.icones}>
                            <a href="https://www.instagram.com/brunorodriguesdev/" target="_blank" rel='noreferrer'>
                                <img className={estilo.imagem_do_icone} src={instagram} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={estilo.direitos_do_site}>
                <h1 className={estilo.titulo}>BKG Games</h1>
                <p>Aviso de Direitos Autorais</p>
                <p>Todo o conteúdo deste site, incluindo texto, imagens, gráficos, logotipos e outros materiais, está protegido por direitos autorais e leis de propriedade intelectual.</p>
                <p>Qualquer uso não autorizado do conteúdo deste site é estritamente proibido.</p>
                <p>Agradecemos por visitar o site da BKG Games.</p>
                <p>Copyright © 2023 BKG Games. Todos os direitos reservados.</p>
            </div>
        </section>
    )
}

export default Footer