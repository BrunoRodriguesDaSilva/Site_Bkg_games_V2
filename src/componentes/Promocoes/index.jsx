import estilo from './Promocoes.module.css';
import { Jogos } from '../Produtos';
import BaldurGate from "../../assets/imagens/Baldurs_gate_3.webp";
import Diablo from "../../assets/imagens/Diablo_iv.webp";
import FinalFantasy from "../../assets/imagens/Final_Fantasy_XVI.webp";
import ResidentEvil from "../../assets/imagens/Resident_evil_4_remake.webp";
import Zelda from "../../assets/imagens/Zelda_tears_of_the_kingdom.webp";
import DeadSpace from "../../assets/imagens/Dead_space.webp";
import MortalKombat from "../../assets/imagens/Mortal_Kombat_1.webp";
import StreetFighter from "../../assets/imagens/Street_fighter_6.webp";



const Promocoes = () => {

    const nome = Jogos.map(
        (jogo, index) =>
            <h1 key={index}>{jogo.nome}</h1>
    )

    const precoAntigo = Jogos.map(
        (jogo, index) =>
            <p key={index}>{jogo.precoAntigo}</p>
    )

    const precoNovo = Jogos.map(
        (jogo, index) =>
            <p key={index}>{jogo.preco}</p>
    )


    return (
        <section id="Promocoes" className={estilo.Promocoes}>
            <h1 className={estilo.tituloSecao}>Promoções</h1>
            <div className={estilo.container}>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={BaldurGate} alt="" />
                    <h1 className={estilo.titulo}>{nome[0]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[0]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[0]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={DeadSpace} alt="" />
                    <h1 className={estilo.titulo}>{nome[1]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[1]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[1]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={Diablo} alt="" />
                    <h1 className={estilo.titulo}>{nome[2]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[2]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[2]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={FinalFantasy} alt="" />
                    <h1 className={estilo.titulo}>{nome[3]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[3]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[3]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={MortalKombat} alt="" />
                    <h1 className={estilo.titulo}>{nome[4]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[4]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[4]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={ResidentEvil} alt="" />
                    <h1 className={estilo.titulo}>{nome[5]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[5]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[5]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={Zelda} alt="" />
                    <h1 className={estilo.titulo}>{nome[6]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[6]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[6]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src={StreetFighter} alt="" />
                    <h1 className={estilo.titulo}>{nome[7]}</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[7]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[7]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
                <div className={estilo.cardJogo}>
                    <img className={estilo.imagem} src="" alt="" />
                    <h1 className={estilo.titulo}>Colocar o outro aqui</h1>
                    <p className={estilo.valorAntigo}><del>R${precoAntigo[8]}</del></p>
                    <p className={estilo.valorAtual}>R${precoNovo[8]}</p>
                    <a href="">
                        <button className={estilo.botaoComprar}>Comprar</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Promocoes