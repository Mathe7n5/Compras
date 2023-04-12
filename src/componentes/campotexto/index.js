
import './campotexto.css'

function CampoTexto(props) {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto