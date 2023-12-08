// Componente para incluir usuarios no Banco de Dados.
//Declaração da função do componente usuario
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios" // aqui vai dar ruim
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const usuarios = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("usuario", campos);
            setAviso("Usuario cadastrado com sucesso!");
            alert("Usuario cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar o Usuario!");
        }
    }
//Metódo chamado para enviar o form on submit
//const salvar = (campos) => {
//JSON.stringify) converte um objeto javascript para uma String JSON
//alert(JSON.stringify(campos));
//}
//form on submit={handleSubmit(salvar)}


    return( //aqui é o que vai ser exibido em tela
        <div className="container">
            <h4 className="container">Inclusão de Usuário</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Usuário</label>
                        <input type="text" className="form-control" id="usuario" required autoFocus {...register("usuario")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="sobrenome">E-mail</label>
                         <input type="text" className="form-control" id="email" required {...register("email")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="idade">Senha</label>
                         <input type="text" className="form-control" id="senha" maxLength={10} required {...register("senha")}/>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default usuarios;