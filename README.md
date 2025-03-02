# Technology Solutions

O projeto está deployado e pode ser acessado através do endereço:
https://technology-solutions-one.vercel.app/

Este repositório contém um projeto **Angular** (usando **Angular CLI 19**) que demonstra a implementação de uma **página inicial moderna** e um **sistema de autenticação completo**. O projeto inclui uma home page responsiva com modo escuro, menu mobile, e uma página de login robusta com funcionalidades de validação e segurança.

- **Formulário Reativo** (Reactive Forms)
- **Máscara de CPF** (via diretiva customizada)
- **Validação de Força de Senha** (via diretiva customizada)
- **Toast de Sucesso** (usando Bootstrap)
- **Stand-alone Components** (um recurso introduzido no Angular 14 e aprimorado no Angular 19)

> **Observação:**  
> Este README documenta somente a parte de **Login**  e **Home Pública com Repositório de vagas** do projeto. A área logada ainda não foi implementada .




---

## Sumário

- [Requisitos de Ambiente](#requisitos-de-ambiente)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Observações sobre Stand-alone Components](#observações-sobre-stand-alone-components)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Requisitos de Ambiente

- **Node.js:** versão `18.20.2` (definida no arquivo [`.nvmrc`](.nvmrc)).
  - Se você utiliza o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm), execute:
    ```bash
    nvm use
    ```
    Caso essa versão ainda não esteja instalada:
    ```bash
    nvm install 18.20.2
    nvm use 18.20.2
    ```
- **npm:** versão 9 ou superior.
- **Angular CLI:** versão 19 (recomendado instalar globalmente ou utilizar via `npx`).

---

## Tecnologias Utilizadas

- **Angular 19** (com suporte a stand-alone components)
- **Angular CLI 19**
- **Bootstrap 5** (para estilização e componentes como o toast)
- **Bootstrap Icons** (para ícones, por exemplo, o ícone de olho/ocultar senha)
- **RxJS** (para reatividade e gerenciamento de assinaturas)
- **Diretivas Customizadas:**
  - `CpfMaskDirective`: Aplica máscara ao campo de CPF.
  - `PasswordStrengthDirective`: Valida a força da senha.
- **TypeScript** (linguagem principal do Angular)

---

## Instalação

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/cleitonosilva/technology-solutions

   cd technology-solutions
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```


3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   O aplicativo estará disponível em `http://localhost:4200`

---

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera build de produção
- `npm test`: Executa os testes unitários
- `npm run lint`: Executa o linter para verificar qualidade do código
- `npm run e2e`: Executa os testes end-to-end

---

## Funcionalidades Principais

- **Autenticação de Usuário:**
  - Login com CPF e senha
  - Validação de força de senha
  - Máscara para campo de CPF
  - Feedback visual de erros

- **Dark/Light Mode:**
  - Alternância entre temas claro e escuro
  - Persistência da preferência do usuário
  - Estilização adaptativa dos componentes

- **Layout Responsivo:**
  - Design adaptável para diferentes dispositivos
  - Menu mobile para telas menores
  - Grid system do Bootstrap

- **Validações de Formulário:**
  - Feedback em tempo real
  - Mensagens de erro personalizadas
  - Indicadores visuais de status

- **Gerenciamento de Estado:**
  - Controle reativo de dados
  - Compartilhamento de estado entre componentes
  - Persistência de dados do usuário

---

## Boas Práticas Implementadas

- **Clean Code:**
  - Nomenclatura clara e significativa
  - Funções pequenas e focadas
  - Separação de responsabilidades

- **Componentização:**
  - Componentes reutilizáveis
  - Comunicação via @Input/@Output
  - Lazy loading de módulos

- **Segurança:**
  - Sanitização de inputs
  - Guards para rotas protegidas
  - Interceptors para tokens

- **Performance:**
  - Lazy loading de imagens
  - Minificação de assets
  - Otimização de bundle

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

Cleiton Silva - [LinkedIn](https://www.linkedin.com/in/cleiton-oliveira-8637b983/)
Contato - [WhatsApp](https://api.whatsapp.com/send/?phone=5521964099980&text&type=phone_number&app_absent=0)

Link do Projeto: [https://github.com/cleitonosilva/technology-solutions](https://github.com/cleitonosilva/technology-solutions)


## Screenshots

![Technology Solutions](./src/app/assets/images/technology-solutions.png)


