import "../Css/Produtos.css";

export default function Produtos() {
  return (
    <div>
        <div className="divBanner2">
          <h1 className="BOLOS_title">BOLOS</h1>
          <h4 className="BOLOS_text">
            Deliciosamente recheados e com muito sabor, cada um de nossos bolos é criado
            para proporcionar mais amor e carinho para todas as ocasiões.
          </h4>
        </div>

        <div className="Categoria">
          <h3 className="Titulo_cat">Selecione a categoria</h3>
          <nav className="cat_boloUL">
            <ul className="cat_bolo">
              <li className="cat_li border-left">Bolos de Chocolate</li>
              <li className="cat_li">Bolos de Morango</li>
              <li className="cat_li">Bolos de Maracujá</li>
              <li className="cat_li border-right">Bolos de Abacaxi</li>
            </ul>
          </nav>
        </div>
    </div>
  )
  
}