import estilo from './Header.module.css';

const Header = () => {
    return (
        <header className={estilo.barraCabecalho}>
            <a href="" className={estilo.logo}><img src="" alt="" /></a>
            <ul className={estilo.listaDeIcones}>
                <li className={estilo.icones}>
                    <a href="#Inicio" className={estilo.link}>Inicio</a>
                </li>
                <li className={estilo.icones}>
                    <a href="#Promocoes" className={estilo.link}>Promoções</a>
                </li>
                <li className={estilo.icones}>
                    <a href="" className={estilo.link}>Sobre</a>
                </li>
                <li className={estilo.icones}>
                    <a href="" className={estilo.link}>Contato</a>
                </li>
            </ul>
        </header>

    )
}

export default Header