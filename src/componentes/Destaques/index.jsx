import estilo from './Destaque.module.css';
import { Jogos } from '../Produtos';
import BaldurGate from "../../assets/imagens/Baldurs_gate_3.webp";
import Diablo from "../../assets/imagens/Diablo_iv.webp";
import FinalFantasy from "../../assets/imagens/Final_Fantasy_XVI.webp";
import ResidentEvil from "../../assets/imagens/Resident_evil_4_remake.webp";
import Zelda from "../../assets/imagens/Zelda_tears_of_the_kingdom.webp";

const Destaque = () => {

    const nome = Jogos.map(
        (jogo, index) => 
        <h1 className={estilo.titulo_principal} key={index}>{jogo.nome}</h1>
    )
    const descricao = Jogos.map(
        (jogo, index) => 
        <p className={estilo.nome_principal} key={index}>{jogo.descricao}</p>
    )

    return (
        <section className={estilo.Destaque}>
            <div href="" className={estilo.banner_principal}>
                <a href="">
                    <img className={estilo.img_principal} src={FinalFantasy} alt="" />
                </a>
                <div className={estilo.descricao_principal}>
                    <h2 className={estilo.subtitulo_principal}>Jogo da Semana</h2>
                    {nome[3]}
                    {descricao[0]}
                </div>
            </div>
            <ul className={estilo.lista_lateral}>
                <li className={estilo.botoes_lateral}>
                    <a href="" className={estilo.icone_lateral}>
                        <img className={estilo.img_lateral} src={BaldurGate} alt="" />
                        {nome[0]}
                    </a>
                </li>
                <li className={estilo.botoes_lateral}>
                    <a href="" className={estilo.icone_lateral}>
                        <img className={estilo.img_lateral} src={ResidentEvil} alt="" />
                        {nome[5]}
                    </a>
                </li>
                <li className={estilo.botoes_lateral}>
                    <a href="" className={estilo.icone_lateral}>
                        <img className={estilo.img_lateral} src={Diablo} alt="" />
                        {nome[2]}
                    </a>
                </li>
                <li className={estilo.botoes_lateral}>
                    <a href="" className={estilo.icone_lateral}>
                        <img className={estilo.img_lateral} src={Zelda} alt="" />
                        {nome[6]}
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Destaque
