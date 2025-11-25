import Header from "../components/Header";
import "../Css/Home.css";

export default function Home() {
  return (
    <div>
      <div className="divBanner">
        
      </div>
      <section className="fundinho">
        <h2 className="fund_text">
          “A Casa de Bolos é um sonho que se realiza.
          É preciso muito trabalho para ter sucesso.<br />
          É preciso acreditar para ter sucesso!”
        </h2>
      </section>

      <section className="Sobre_nos">
        <h1 className="Titulo_SB">Conheça tudo sobre nós</h1>

        <div className="SBT">
          <img src="src\assets\medaia.png" className="img_sobrenos" alt="Medalha" />
          <img src="src\assets\binoculoreal.png" className="img_sobrenos" alt="Binóculo" />
          <img src="src\assets\moeda_resized.png" className="img_sobrenos" alt="Moeda" />
        </div>

        <div className="SBT">
          <h2 className="SB_subtitulos">Missão</h2>
          <h2 className="SB_subtitulos">Visão</h2>
          <h2 className="SB_subtitulos">Valores</h2>
        </div>

        <div className="SBT">
          <p className="SB_text">
            Oferecer às pessoas produtos de qualidade, que garantam sua satisfação,
            agregando sabor e valor às suas vidas, trazendo à lembrança as coisas
            que são realmente importantes.
          </p>
          <p className="SB_text">
            Ser referência em bolos caseiros. <br />
            Ser exemplo em condutas e processos. <br />
            Ser inspiração para o resgate de valores,
            construindo pontes entre as pessoas.
          </p>
          <p className="SB_text">
            Simplicidade: Optar pelo simples é escolher um caminho para a felicidade;<br />
            Família: A razão do nosso sucesso;<br />
            Humildade: Crescer sem perder a essência.
          </p>
        </div>
      </section>

      <section className="Mapa">
        <h2 className="titulo_mapa">Nossa Localização</h2>
        <iframe
          className="IMG_mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.421804927755!2d-46.4315421!3d-23.6608691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6eafa802cec9%3A0xfdbd0a9f6a0cff04!2sR.%20Eduardo%20Alberto%20de%20Miranda%20D'aviz%2C%20375%20-%20Jardim%20Miranda%20D'Aviz%2C%20Mau%C3%A1%20-%20SP%2C%2009330-520!5e0!3m2!1spt-BR!2sbr!4v1741391186327!5m2!1spt-BR!2sbr"
          width="900"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        ></iframe>
      </section>

      <section className="video">
        <iframe
          className="bolin"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tWohYiEro7g?si=sa4sZnH3WuVfmHhg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}