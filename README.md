# Node.js

## O que é Node.js ?

O node é uma **runtime** de **javascript**, ou seja **uma biblioteca utilizada por um compilador** durante a execução do programa.
Que está construída na **V8 engine** (*escrita em **C++***) da **Google**. Possibilitando criar softwares em **JS no lado do servidor.**

Temos então um código **JS** rodando em **C++** para garantir alta performance.

## O que é npm? (**node package manager**)

O **npm** é um gerenciador de pacotes do **Node**. ( *php/composer*  |  *python/pip*  |  *java/maven*  |  *C#/nuget* …)

Vamos poder utilizar **bibliotecas de terceiros**, baixando elas pelo **npm**.

E também **executar determinados scripts** no nosso programa.

Dificilmente um software em **Node.js** não utiliza o **npm.**

Os módulos externos ficam numa pasta chamada **node_modules**.

Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente.


## REPL
<details>
  <summary>Read-Eval-Print Loop</summary>
  Na maioria das vezes <strong>estaremos executando o Node via arquivos</strong> do nosso projeto, porém também é possível <strong>executá-lo via terminal</strong> bastando digitar:

  ```node```

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

  - <strong>Autocompletar:</strong> Pressionando a tecla ```Tab```, você pode ver sugestões de comandos ou propriedades disponíveis.

  - <strong>Comandos de controle:</strong> Algumas combinações de teclas, como ```Ctrl+C``` para encerrar a entrada atual ou ```Ctrl+D``` para sair do REPL, ajudam no controle da sessão.
  
O REPL do Node.js é uma ferramenta poderosa para desenvolvedores que desejam experimentar rapidamente com código JavaScript, depurar problemas ou aprender mais sobre o comportamento de certas funções e bibliotecas.
</details>