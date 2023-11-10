import { } from 'react'
import './contato.css'

function Contato() {

  return (
    <>
       <div className="container">
        
        <h1 className="mt-5">Entre em Contato</h1>
        <p>Preencha o formulário abaixo para entrar em contato conosco:</p>

        <form>
            <div className="mb-3">
                <label for="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome_form" placeholder="Seu Nome"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Endereço de Email</label>
                <input type="email" className="form-control" id="email_form" placeholder="seu.email@example.com"/>
            </div>
            <div className="mb-3">
                <label for="mensagem" className="form-label">Mensagem</label>
                <textarea className="form-control" id="opinião" rows="5" placeholder="Sua mensagem"></textarea>
            </div>
            <button type="submit" onclick="Formulario();" className="btn btn-primary">Enviar</button>
        </form>
    </div>
    <script src="../../componentes"></script>
    </>
  )
}

export default Contato