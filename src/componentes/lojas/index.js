import CardItem from '../carditem'
import './lojas.css'

function Loja(props) {

    return (
        (props.itens.length > 0) && 
            <section className='loja' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor:props.corPrimaria }}>{props.nome}</h3>
                <div className='itens'>
                    {props.itens.map(item => 
                    <CardItem  corDeFundo={props.corPrimaria}
                        key={item.nome}
                        nome={item.nome} 
                        tipo={item.tipo}
                        loja={item.loja} 
                        imagem={item.imagem}
                    />)}
                </div>
            </section>
    )
    
    
}

export default Loja