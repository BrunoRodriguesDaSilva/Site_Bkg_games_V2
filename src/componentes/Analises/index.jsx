import estilo from './Analises.module.css';
import { Jogos } from '../Produtos';
import icone_perfil from "../../assets/logos/logotipo_usuario.svg";
import DeadSpace from "../../assets/imagens/Dead_space.webp";
import MortalKombat from "../../assets/imagens/Mortal_Kombat_1.webp";
import StreetFighter from "../../assets/imagens/Street_fighter_6.webp";




const Analises = () => {
    const nome = Jogos.map(
        (jogo, index) => 
        <h1 className={estilo.titulo} key={index}>{jogo.nome}</h1>
    )

    return (
        <section className={estilo.Analise}>
            <h1 className={estilo.titulo}>Melhores Avaliações</h1>
            <div className={estilo.container}>
                <div className={estilo.container_avaliacao}>
                    <main className={estilo.area_avaliacao}>
                        <div className={estilo.cliente}>
                            <img className={estilo.imagem_cliente} src={icone_perfil} alt="" />
                            <p className={estilo.texto}>Nome Cliente</p>
                        </div>
                        <div className={estilo.avaliacao}>
                            <p className={estilo.texto}>Data da avaliação</p>
                            <h1 className={estilo.titulo}>Titulo da Avaliação</h1>
                            <p className={estilo.texto}>texto da avaliação</p>
                        </div>
                    </main>
                    <aside className={estilo.area_produto}>
                        <a className={estilo.link} href="">
                            <img className={estilo.imagem_produto} src={DeadSpace} alt="" />
                            {nome[1]}
                        </a>
                    </aside>
                </div>
            </div>
            <div className={estilo.container}>
                <div className={estilo.container_avaliacao}>
                    <main className={estilo.area_avaliacao}>
                        <div className={estilo.cliente}>
                            <img className={estilo.imagem_cliente} src={icone_perfil} alt="" />
                            <p className={estilo.texto}>Nome Cliente</p>
                        </div>
                        <div className={estilo.avaliacao}>
                            <p className={estilo.texto}>Data da avaliação</p>
                            <h1 className={estilo.titulo}>Titulo da Avaliação</h1>
                            <p className={estilo.texto}>texto da avaliação</p>
                        </div>
                    </main>
                    <aside className={estilo.area_produto}>
                        <a className={estilo.link} href="">
                            <img className={estilo.imagem_produto} src={MortalKombat} alt="" />
                            {nome[4]}
                        </a>
                    </aside>
                </div>
            </div>            
            <div className={estilo.container}>
                <div className={estilo.container_avaliacao}>
                    <main className={estilo.area_avaliacao}>
                        <div className={estilo.cliente}>
                            <img className={estilo.imagem_cliente} src={icone_perfil} alt="" />
                            <p className={estilo.texto}>Nome Cliente</p>
                        </div>
                        <div className={estilo.avaliacao}>
                            <p className={estilo.texto}>Data da avaliação</p>
                            <h1 className={estilo.titulo}>Titulo da Avaliação</h1>
                            <p className={estilo.texto}>texto da avaliação</p>
                        </div>
                    </main>
                    <aside className={estilo.area_produto}>
                        <a className={estilo.link} href="">
                            <img className={estilo.imagem_produto} src={StreetFighter} alt="" />
                            {nome[7]}
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Analises