let botoes = document.querySelectorAll(".btn");
const inserirConteudo = document.querySelector(".container-info-cadLogin");

for (const botao of botoes) {
    botao.addEventListener('click', function(){
        addHtml(botao.value);
    });
}

function addHtml(entrada) {
    if (entrada=='0') {
        inserirConteudo.innerHTML = 
        `
        <div class="formulario">
            <h2>Cadastre-se</h2>
            <form action="#">
                <div class="div-form">
                    
                    <div class="single-input input-maior">
                        <label for="nome">Nome</label>
                        <input name="nome" type="text" class="inputs" placeholder="Escreva seu Nome ">
                    </div>
                    <div class="single-input input-maior">
                        <label for="nomeS">Nome Social</label>
                        <input name="nomeS" type="text" class="inputs" placeholder="Nome Social">
                    </div>
                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="data">Data de nascimento</label>
                            <input name="data" type="date" class="inputs" >
                        </div>

                        <div class="single-input input-menor input-radio">
                            <div>
                                <label for="masculino">Masculino</label>
                                <input name="genero" type="radio" id="masculino">
                            </div>
                            <div>
                                <label for="feminino">Feminino</label>
                                <input name="genero" type="radio" id="feminino">
                            </div>
                            <div>
                                <label for="outros">Outros</label>
                                <input name="genero" type="radio" id="outros">
                            </div>

                        </div>
                    </div>
                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="cpf">CPF</label>
                            <input name="cpf" type="text" class="inputs" placeholder="Informe seu CPF">
                        </div>
                        <div class="single-input input-menor">
                            <label for="rg">RG</label>
                            <input name="rg" type="text" class="inputs" placeholder="Informe seu RG">
                        </div>
                    </div>
                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="telefone">Telefone</label>
                            <input name="telefone" type="text" class="inputs" placeholder="Informe seu Telefone">
                        </div>
                        <div class="single-input input-menor">
                            <label for="conf-telefone">Confirmar Telefone</label>
                            <input name="conf-telefone" type="text" class="inputs" placeholder="Confirme seu Telefone">
                        </div>
                    </div>

                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="endereco">Endereço</label>
                            <input name="endereco" type="text" class="inputs" placeholder="Rua , Número">
                        </div>
                        <div class="single-input input-menor">
                            <label for="cep">CEP</label>
                            <input name="cep" type="text" class="inputs" placeholder="Informe o  CEP">
                        </div>
                    </div>
                    
                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="email">Email</label>
                            <input name="email" type="password" class="inputs" placeholder="Digite a senha">
                        </div>
                        <div class="single-input input-menor">
                            <label for="conf-email">Confirmar Email</label>
                            <input name="conf-email" type="password" class="inputs" placeholder="Confirme sua senha">
                        </div>
                    </div>

                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                            <label for="senha">Senha</label>
                            <input name="senha" type="password" class="inputs" placeholder="Digite a senha">
                        </div>
                        <div class="single-input input-menor">
                            <label for="conf-senha">Confirmar senha</label>
                            <input name="conf-senha" type="password" class="inputs" placeholder="Confirme sua senha">
                        </div>
                    </div>
    
                    <div class="alinhar-inputs">
                        <div class="btn-confirma input-menor"><button>Confirmar cadastro</button></div>
                    </div>
                </div>
            </form>
        </div>
        `
    }
    else if(entrada=='1'){
        inserirConteudo.innerHTML = 
        `
        <div class="formulario">
            <h2>Entrar</h2>
            <form action="#">
                <div class="div-form">
                    
                    <div class="single-input input-maior">
                        <label for="login">Informe seu Email ou CPF</label>
                        <input name="login" type="text" class="inputs" placeholder="Informe seu Email ou CPF ">
                    </div>
                    <div class="single-input input-maior">
                        <label for="senha">Informe sua Senha</label>
                        <input name="senha" type="password" class="inputs" placeholder="Informe sua senha">
                    </div>
                  
    
                    <div class="alinhar-inputs">
                        <div class="single-input input-menor">
                         <div class="btn-a btn-confirma input-menor"><input type="submit" value="Entrar"></div>
                        </div>
                        <div class="single-input input-menor">
                         <div class="btn-a btn-confirma input-menor"><input type="submit" value="Esqueci a Senha"></div>
                        </div>
                    </div>

                    
                </div>
                </div>
            </form>
        </div>
        `
    }
}
