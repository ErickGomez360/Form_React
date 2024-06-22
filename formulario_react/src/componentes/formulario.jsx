import React, {useState} from "react";

const Formulario=() =>{
    const [datosFormulario, setDatosFormulario] = useState({
        nombre_completo: '',
        correo_electronico: '',
        asunto: '',
        mensaje: '',
    });

    const[errorFormulario, setErrorFormulario] = useState('');
    const[exitoFormulario, setExitoFormulario] = useState('');

    const manejoCambio = (e) =>{
        const {name, value } = e.target;
        setDatosFormulario({
            ...datosFormulario,
            [name]: value,
        });
    };

    const manejoEnvio = (e) => {
        e.preventDefault();
        const {nombre_completo, correo_electronico, asunto, mensaje} = datosFormulario;

        if(!nombre_completo || !correo_electronico || !asunto || !mensaje){
            setErrorFormulario('Complete todos los campos.');
            setExitoFormulario(''); 
        }else{
            setErrorFormulario('');
            setExitoFormulario('Se envio exitosamente');
        }
    };

    return (
        <div>
            <h1>Formulario de contacto</h1>
            <form onSubmit={manejoEnvio}>
                <div>
                    <label>Nombre Completo:</label>
                    <input 
                    type="text"
                    name="nombre_completo"
                    value={datosFormulario.nombre_completo}
                    onChange={manejoCambio} />
                </div>
                <div>
                    <label>Correo electronico:</label>
                    <input 
                    type="email"
                    name="correo_electronico"
                    value={datosFormulario.correo_electronico}
                    onChange={manejoCambio} />
                </div>
                <div>
                    <label>Asunto:</label>
                    <input 
                    type="text"
                    name="asunto"
                    value={datosFormulario.asunto}
                    onChange={manejoCambio} />
                </div>
                <div>
                    <label>Mensaje:</label>
                    <textarea
                     name="mensaje"
                     value={datosFormulario.mensaje}
                     onChange={manejoCambio}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {errorFormulario && <p style={{ color: 'red' }}>{errorFormulario}</p>}
            {exitoFormulario && <p style={{ color: 'green' }}>{exitoFormulario}</p>}
        </div>
    )

}

export default Formulario;