import './carditem.css'


function CardItem({nome, tipo, loja, imagem, link, corDeFundo}) {

    return(

        <div className='colaborador'> 
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h2>{nome}</h2>
                <h4>{tipo}</h4>
                <h5>{loja}</h5>
                <a href={link} ><button className='btn'>Comprar</button></a>
            </div>
        </div>
    )
}

export default CardItem