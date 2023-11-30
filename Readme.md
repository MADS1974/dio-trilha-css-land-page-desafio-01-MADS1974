<h1 align="center">
  Criando sua Primeira Landing Page com HTML e CSS
</h1>

<p align="center">
  <a href="https://mads1974.github.io/dio-trilha-css-land-page-desafio-01-MADS1974/">🔗 Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto"> 🖥️ Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">🚀 Tecnologias</a>
</p>

<p align="center">
  <a href="https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/9fc59800-279b-462d-9f12-92ea3bf5697e"><img src="https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/9fc59800-279b-462d-9f12-92ea3bf5697e.svg" alt="wakatime"></a>
</p>

## 💻 Projeto

Repositorio para o curso "Criando sua Primeira Landing Page com HTML e CSS" da DIO.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- [Github](https://github.com/digitalinnovationone/trilha-css-desafio-01) - Estrutura básica do HTML
- [Figma](https://www.figma.com/file/3PiokoJj9IhGDnNiWAJbz7/DIO---Desafio-01?node-id=0%3A1) - Protótipo do site a ser desenvolvido

---

## Melhorias e ajustes

- Inserido ```:hover img``` com ```filter: brightness, contrast and saturate``` para um efeito de iluminação na logo;

- Inserida ```target="_blank"``` no footer;

- Inserido ```:hover``` e ```:active``` no botão "Quero me inscrever";

- Criei um script js, usei DOMContentLoaded para garantir que o script só seja executado após o carregamento completo do DOM. Adicionei um id ao botão para que o JavaScript possa selecioná-lo corretamente, com isso ao clicar no botão "Quero me inscrever", abrirá o link em uma nova guia do navegador.

- Dentro da section "course-content", adicionei uma tag <a> (âncora) linkando as opções dos modulos 1, 2 e 3,
adicionei o atributo href com o link das respectivas imagens atribuíndo ao contexto. O atributo target="_blank" faz com que o link seja aberto em uma nova guia.

- Adicionei estilos aos links dentro dos módulos, usei o seletor e apliquei (<a>) dentro dos elementos com a classe .module dentro da seção #course-content. O transition suaviza a transição da cor ao passar o mouse sobre o link..

- Na section "professional-challenges", adicionei um efeito à imagem quando o mouse passa sobre o centro dela, usando CSS e JavaScript, adicionei uma classe à imagem para torná-la mais fácil de selecionar, adicionei uma div com uma classe ao redor da imagem para criar uma área específica para ativar o efeito, usei CSS para aplicar a animação de curto-circuito.
Usei JavaScript para adicionar uma classe chamada short-circuit com shortCircuitAnimation, tornando o efeito de piscar mais rápido quando o mouse entra na área especificada.

- Padrão de cores utilizadas:

```css
* {
  --Azul1: #33a8db;
  --Azul2: #1472b7;
  --Azul3: #31a8dd;
  --Azul4: #1572b7;
  --Azul5: #3ba1cd;
  --Verde1: #088c19;
  --Preto1: #252525;
}
```

---


[LinkedIN](https://www.linkedin.com/in/mads1974/) - Márcio Adriano [MADS 1974]