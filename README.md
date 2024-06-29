# Node.js

## O que é Node.js ?

O node é uma **runtime** de **javascript**, ou seja **uma biblioteca utilizada por um compilador** durante a execução do programa.
Que está construída na **V8 engine** (\*escrita em **C++\***) da **Google**. Possibilitando criar softwares em **JS no lado do servidor.**

Temos então um código **JS** rodando em **C++** para garantir alta performance.

## O que é npm? (**node package manager**)

O **npm** é um gerenciador de pacotes do **Node**. ( _php/composer_ | _python/pip_ | _java/maven_ | _C#/nuget_ …)

Vamos poder utilizar **bibliotecas de terceiros**, baixando elas pelo **npm**.

E também **executar determinados scripts** no nosso programa.

Dificilmente um software em **Node.js** não utiliza o **npm.**

Os módulos externos ficam numa pasta chamada **node_modules**.

Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente.

## REPL

<details>
  <summary>Read-Eval-Print Loop</summary>
  Na maioria das vezes <strong>estaremos executando o Node via arquivos</strong> do nosso projeto, porém também é possível <strong>executá-lo via terminal</strong> bastando digitar:

`node`

Isto irá executar o **REPL**, que é um ambiente interativo que lê, avalia e imprime resultados de comandos introduzidos pelo usuário, repetidamente. Ele permite que você execute código **JavaScript** de maneira interativa, tornando-o uma ferramenta valiosa para testes rápidos, experimentação e depuração.

### Funcionalidades do REPL do Node.js:

- 1. Read (Ler): Lê a entrada do usuário.
- 2. Eval (Avaliar): Avalia/Executa o código JavaScript inserido.
- 3. Print (Imprimir): Imprime o resultado da avaliação.
- 4. Loop (Laço): Retorna ao estado de leitura para aguardar nova entrada.

### Exemplos:

```js
> 2 + 2
4

> console.log("Hello, world!")
Hello, world!

> let x = 10;
> x * 2
20
```

### Recursos adicionais:

- <strong>Histórico de comandos:</strong> O REPL armazena um histórico dos comandos digitados, permitindo navegar pelos comandos anteriores com as setas para cima ↑ e para baixo ↓.

- <strong>Autocompletar:</strong> Pressionando a tecla `Tab`, você pode ver sugestões de comandos ou propriedades disponíveis.

- <strong>Comandos de controle:</strong> Algumas combinações de teclas, como `Ctrl+C` para encerrar a entrada atual ou `Ctrl+D` para sair do REPL, ajudam no controle da sessão.

O REPL do Node.js é uma ferramenta poderosa para desenvolvedores que desejam experimentar rapidamente com código JavaScript, depurar problemas ou aprender mais sobre o comportamento de certas funções e bibliotecas.

</details>

## O que são módulos

<details>
  <summary>Tipos de módulos</summary>

Um módulo é **_um pedaço de código encapsulado que possui suas próprias funcionalidades_** e pode ser facilmente reutilizado em outros projetos.

Os módulos ajudam a organizar o código, dividir responsabilidades e melhorar a manutenção e a reutilização do código.

Módulos são scripts reutilizáveis, eles são divididos em três categorias:

- **Modulo local**: São módulos definidos pelo usuário dentro de um projeto Node.js.
  Eles são usados para encapsular funcionalidades específicas que você deseja reutilizar em diferentes partes da sua aplicação.
- **Core Modules**: São módulos embutidos que vêm com a instalação do Node.js, como `fs`, `http`, `path`, `os`, entre outros.
- **Modulos Externos**: São módulos criados pela comunidade e publicados no **npm** (_Node Package Manager_). Eles podem ser instalados e usados em seus projetos.
</details>

## Utilizando um módulo

<details>
<summary>Core Modules</summary>

Importaremos um **módulo do node**: o **File System (fs).** Este módulo serve para trabalhar com diretórios, arquivos e etc.

E ele é um **Core Module**, nativo do **node:**

**Core Modules** são módulos integrados que vêm com a instalação do **Node.js**.

Eles fornecem funcionalidades básicas que são essenciais para o desenvolvimento de aplicações Node.js sem a necessidade de instalar pacotes adicionais.

Esses módulos são escritos em **C++** e **JavaScript**, sendo altamente otimizados para desempenho e eficiência.

### Características dos Core Modules:

1. **Disponibilidade Imediata**: Estão disponíveis imediatamente após a instalação do **Node.js**, sem a necessidade de instalação adicional.
2. **Desempenho Otimizado**: Como são parte do núcleo do **Node.js**, são projetados para serem altamente eficientes e rápidos.
3. **Ampla Funcionalidade**: Cobre uma ampla gama de funcionalidades necessárias para construir aplicações _server-side_, como manipulação de arquivos, redes, streams, buffers e mais.
</details>
