import React from 'react';
import Botao from '../botao';

class Formulario extends React.Component {
    render() {
        return(
            <form action="">
                <div>
                    <label htmlFor="">

                    </label>
                    <input type="text" />
                </div>
                <div> 
                     <label htmlFor="">

                    </label>
                    <input type="text" />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;