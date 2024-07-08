# Node.js

## O que é Node.js

O node é uma **runtime** de **javascript**, ou seja **uma biblioteca utilizada por um compilador** durante a execução do programa.
Que está construída na **V8 engine** (\*escrita em **C++\***) da **Google**. Possibilitando criar softwares em **JS no lado do servidor.**

Temos então um código **JS** rodando em **C++** para garantir alta performance.

## O que é npm

<details>
<summary>Node Package Manager</summary>

O **npm** é um gerenciador de pacotes do **Node**. ( _php/composer_ | _python/pip_ | _java/maven_ | _C#/nuget_ …)

Vamos poder utilizar **bibliotecas de terceiros**, baixando elas pelo **npm**.

E também **executar determinados scripts** no nosso programa.

Dificilmente um software em **Node.js** não utiliza o **npm.**

Os módulos externos ficam numa pasta chamada **node_modules**.

Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente.

</details>

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
- **Módulos Externos**: São módulos criados pela comunidade e publicados no **npm** (_Node Package Manager_). Eles podem ser instalados e usados em seus projetos.
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

## Sistema de módulos

Em Node.js, há duas formas principais de gerenciar módulos e suas dependências: o sistema **CommonJS** e o sistema **ECMAScript Modules** (**ESM**).

<details>
<summary>CommonJS</summary>

### CommonJS

O commonJS é o sistema de módulos padrão do **Node.js**. Ele usa as funções `require` para importar módulos e `module.exports` ou `exports` para exportar módulos.

**Exportando com CommonJS:**

```js
//arquivo math.js
function add(a, b) {
  return a + b;
}

module.exports = {
  add,
};
```

**Importando com CommonJS**:

```jsx
const math = require("./math");
console.log(math.add(2, 3)); // saída: 5
```

</details>

<details>
<summary>ECMAScript Modules (ESM)</summary>

### ECMAScript Modules (ESM)

O ECMAScript Modules, é o sistema de módulos moderno introduzido no _ES6 (ECMAScript 2015)_.

Ele usa as palavras-chave `import` e `export` para gerenciar módulos. **Node.js** Começou a suportar **ESM** nativamente a partir da versão `12.x`, embora com algumas restrições e necessidade de configuração.

**Exportando com ESM**:

```jsx
//arquivo math.mjs

export function add(a, b) {
  return a + b;
}
```

**Importando com ESM**:

```jsx
import { add } from "./math.mjs";
console.log(add(2, 3)); // saída 5
```

</details>

<details>
<summary>Configuração de ESM em Node.js</summary>

### Configuração de ESM em Node.js

Para utilizar ESM você pode:

1. Nomear os arquivos de módulo com a extensão `.mjs`
2. Ou configurar o arquivo `package.json` com `"type": "module"` para permitir o uso de ESM com arquivos `.js`.

**Exemplo de** `package.json`:

```jsx
{
	"type": "module"
}
```

</details>

<details>
<summary>Comparação entre CommonJS e ESM</summary>

### Comparação entre CommonJS e ESM

- **CommonJS**
  - Usa `require` e `module.exports`.
  - Carregamento síncrono, adequado para módulos do lado do servidor.
  - Suporta condicionais dinâmicos na importação.
- **ESM**
  - Usa `import` e `export`.
  - Carregamento assíncrono, adequado tanto para módulos do lado do servidor quanto para o navegador.
  - Oferece melhorias de desempenho através de otimizações de estática.

### Exemplos de uso mais avançado:

Importação e Exportação Padrão:

```jsx
// math.mjs
export default function add(a, b) {
  return a + b;
}

// app.mjs
import add from "./math.mjs";
console.log(add(2, 3)); // saída: 5
```

Importação e exportação nomeada:

```jsx
// math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs
import { add, subtract } from "./math.mjs";
console.log(add(2, 3)); // saída: 5
console.log(subtract(5, 2)); // saída: 3
```

#### Importação Dinâmica:

O ESM também suporta importação dinâmica usando a função `import()`, permitindo carregar módulos condicionalmente ou de forma assíncrona.

```jsx
// app.mjs
async function loadMathModule() {
  const math = await import("./math.mjs");
  console.log(math.add(2, 3)); // saída: 5
}

loadMathModule();
```

Em resumo, **Node.js** oferece flexibilidade para usar tanto o sistema de módulos **CommonJS** quanto o **ESM**, permitindo a escolha o que melhor se adapta às suas necessidades de desenvolvimento.

</details>

## Leitura de argumentos

<details>
<summary>process.argv</summary>
No node, é comum precisar ler argumentos passados pelo terminal, quando se executa um script.

Para isso, usamos a propriedade `process.argv`, que é um array contendo os argumentos da linha de comando.

### Estrutura do `process.argv`

- `process.argv[0]`: O caminho para o executável do node.
- `process.argv[1]`: O caminho para o script que está sendo executado.
- `process.argv[2]` em diante: Os argumentos passados pelo usuário.

O `process.argv` é uma ferramenta poderosa e simples para capturar argumentos de linha de comando em scripts Node.js.

Para aplicações mais complexas, módulos externos oferecem funcionalidades adicionais para parsing de argumentos, tornando o desenvolvimento mais fácil e o código mais legível.

</details>

## Módulos externos

<details>
<summary>npm install</summary>

Módulos externos são pacotes de software que não estão incluídos no **core** do **Node.js**, mas que podem ser instalados e usados para adicionar funcionalidades ao seu projeto.

O **Node.js** utiliza o **npm** para gerenciar esses pacotes.

```bash
npm install pckge
```

Isso cria uma pasta `node_modules` no diretório do seu projeto, onde o pacote e suas dependências são armazenadas.

### Npm init

O comando `npm init` é usado para criar um arquivo `package.json` no diretório do seu projeto.

Este arquivo contém informações sobre o seu projeto e suas dependências. É uma prática recomendada iniciar um novo projeto **Node.js** executando `npm init`.

Quando você instala um módulo com `npm install`, você pode usar a flag `--save` para adicionar o módulo como uma dependência no `package.json`

### Benefícios do `package.json`

1. **Gestão de Dependências**: Todas as dependências do projeto são listadas, facilitando a instalação e manutenção.
2. **Automação de Scripts**: Você pode definir scripts para automação de tarefas, como testes, construção e desenvolvimento.
3. **Informações do Projeto**: O arquivo contém metadados sobre o projeto, facilitando a colaboração e a publicação.

</details>

## Event Loop

<details>
<summary>Event Loop</summary>
  
O **Event Loop** é um dos componentes de arquitetura mais importantes do **Node**. Ele permite que o **Node** execute operações de **I/O** (entrada/saída) de maneira não bloqueante, mesmo que o **JavaScript** seja _single-threaded_. O **Event Loop** faz isso delegando operações para o sistema operacional sempre que possível e registrando callbacks para serem chamados quando a operação for concluída.

### Como o Event Loop Funciona

O **Event Loop** é responsável por gerenciar a execução de tarefas, eventos e callbacks.

Ele verifica continuamente a fila de eventos para ver se há funções que precisam ser executadas.

### Fases do Event Loop

O **Event Loop** em **Node.js** é dividido em várias fases, cada uma com uma fila de callbacks que são processados em ordem. As principais fases são:

1. **Timers**: Esta fase lida com callbacks agendados por `setTimeout()` e `setInterval()`.
2. **I/O Callbacks**: Processa callbacks de I/O diferidos, como aqueles provenientes de algumas operações de sistema de arquivos.
3. **Idle, Prepare**: Apenas para uso interno do Node.js.
4. **Poll**: Recupera novos eventos de I/O; executa quase todas as operações de I/O de forma bloqueante.
5. **Check**: Executa callbacks `setImmediate()`.
6. **Close Callbacks**: Processa eventos de fechamento, como `socket.on('close', ...)`.

### Exemplo Simplificado

Vamos considerar um exemplo para entender melhor o Event Loop.

```jsx
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setImmediate(() => {
  console.log("Immediate 1");
});

console.log("End");
```

Saída Esperada:

```jsx
Start
End
Immediate 1
Timeout 1
```

### Explicação:

1. **Start** é impresso imediatamente.
2. **setTimeout** e **setImmediate** são colocados nas suas respectivas filas.
3. **End** é impresso imediatamente.
4. **setImmediate** é processado antes de **setTimeout** porque, mesmo que ambos sejam assíncronos, `setImmediate` é executado no final da fase de check do Event Loop,

enquanto `setTimeout` é agendado para a próxima fase de timers.

### Modo de Funcionamento do Event Loop

#### 1. **Timers**:

- O Event Loop verifica se há algum callback de `setTimeout` ou `setInterval` que está pronto para ser executado. Se houver, ele executa esses callbacks.

#### 2. **I/O Callbacks**:

- Após processar os timers, ele verifica a fila de callbacks de I/O. Estes são callbacks que foram adiados para a próxima iteração do loop.

#### 3. **Idle, Prepare**:

- Esta fase é usada internamente pelo Node.js.

#### 4. **Poll**:

- Esta é a fase onde a maior parte do trabalho de I/O é realizado. Se o Event Loop entrar nesta fase e não houver timers agendados, ele poderá bloquear aqui esperando por eventos de I/O.

#### 5. **Check**:

- Esta fase é onde os callbacks agendados por `setImmediate` são executados.

#### 6. **Close Callbacks**:

- Se um socket ou handle foi fechado, como `socket.on('close')`, os callbacks de fechamento são chamados nesta fase.

### Diferença entre `setTimeout` e `setImmediate`

- `setTimeout(callback, 0)`: Coloca o callback na fila de timers e será executado na próxima iteração ou após o intervalo especificado.
- `setImmediate(callback)`: Coloca o callback na fila de check e será executado na mesma iteração do Event Loop, após a fase de poll.

### Event Loop e Assincronia

**Node.js** utiliza o Event Loop para permitir a execução assíncrona de operações I/O. Em vez de bloquear a execução até que uma operação de I/O seja concluída, **Node.js** registra um callback e passa para a próxima operação. Quando a operação de I/O é concluída, o callback é colocado na fila de eventos para ser executado.

</details>

## Event Emitter

<details>
<summary>Event Emitter</summary>

O `EventEmitter` é uma **classe** central no **Node** que facilita o tratamento de eventos. É uma implementação do padrão de projeto "Observer" (observador), onde um objeto (o emissor de eventos) mantém uma lista de dependentes (ouvintes) e notifica-os automaticamente sobre qualquer mudança de estado.

### Uso Básico do `EventEmitter`

Para usar o `EventEmitter`, você precisa importar o módulo `events` e criar uma instância do `EventEmitter`.

**Exemplo Básico:**

```jsx
const EventEmitter = require("events");

// Cria uma instância do EventEmitter
const myEmitter = new EventEmitter();

// Define um ouvinte para um evento chamado 'start'
myEmitter.on("start", () => {
  console.log("An event occurred!");
});

// Emite o evento 'start'
myEmitter.emit("start"); // Output: An event occurred!
```

### Limites de Ouvintes

Por padrão, um `EventEmitter` pode ter até 10 ouvintes para um evento específico. Se você adicionar mais do que isso,

o **Node** emitirá um aviso de possíveis vazamentos de memória. Você pode ajustar esse limite com o método `setMaxListeners`.

</details>

## Core Modules

<details>
<summary>HTTP</summary>

O módulo `http` é um dos módulos principais (core modules) do **Node.js**. Ele permite a criação de servidores web e clientes HTTP, facilitando a construção de aplicações web de maneira eficiente. Este módulo fornece classes e métodos para realizar operações HTTP, como enviar e receber dados através do protocolo HTTP.

### Criando um Servidor HTTP

Para criar um servidor HTTP básico em **Node.js**, você utiliza o módulo `http`. Aqui está um exemplo simples de um servidor que responde com "_Hello, World!_" a qualquer requisição:

```jsx
const http = require("http");

// Cria um servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

// O servidor escuta na porta 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor rodando em http://127.0.0.1:3000/");
});
```

### Explicação:

- **`http.createServer(callback)`**: Cria um servidor HTTP. O callback recebe dois parâmetros: `req` (objeto de requisição) e `res` (objeto de resposta).
- **`res.statusCode`**: Define o código de status HTTP da resposta.
- **`res.setHeader('Content-Type', 'text/plain')`**: Define o cabeçalho `Content-Type` da resposta.
- **`res.end('Hello, World!\n')`**: Envia a resposta e finaliza a conexão.
- **`server.listen(port, hostname, callback)`**: Faz o servidor escutar em uma porta específica (3000 neste caso) e um hostname específico (`127.0.0.1`).
</details>

<details>
<summary>URL</summary>

O módulo `url` do **Node** é um módulo fundamental que fornece utilitários para a análise (_parsing_), resolução e manipulação de URLs.
Ele é útil para extrair componentes de URLs, como o protocolo, hostname, caminho e query strings.

### Parsing de URLs

A função `url.parse()` é utilizada para analisar uma URL e retornar um objeto contendo suas diferentes partes.

**Exemplo**:

```jsx
const url = require("url");

const myURL = url.parse("https://example.com:8080/path/name?query=string#hash");

console.log(myURL);
```

**Saida**:

```jsx
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com:8080',
  port: '8080',
  hostname: 'example.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/name',
  path: '/path/name?query=string',
  href: 'https://example.com:8080/path/name?query=string#hash'
}
```

### Componentes de uma URL

- **protocol**: O protocolo da URL (por exemplo, `http:` ou `https:`).
- **slashes**: Indica se a URL contém `//` após o protocolo.
- **auth**: Informação de autenticação (por exemplo, `user:pass`).
- **host**: O hostname, incluindo a porta (por exemplo, `example.com:8080`).
- **port**: A porta (por exemplo, `8080`).
- **hostname**: O hostname sem a porta (por exemplo, `example.com`).
- **hash**: O fragmento da URL (por exemplo, `#hash`).
- **search**: A query string, incluindo o `?` (por exemplo, `?query=string`).
- **query**: A query string sem o `?` (por exemplo, `query=string`).
- **pathname**: O caminho (por exemplo, `/path/name`).
- **path**: O caminho e a query string (por exemplo, `/path/name?query=string`).
- **href**: A URL completa.

### Manipulando URLs com `URL` e `URLSearchParams`

Com **Node** `10.x` ou superior, a classe `URL` e o objeto `URLSearchParams` são recomendados para manipulação de URLs e query strings.
**Exemplo de** `URL`:

```jsx
const { URL } = require("url");

const myURL = new URL("https://example.com:8080/path/name?query=string#hash");

console.log(myURL.href); // https://example.com:8080/path/name?query=string#hash
console.log(myURL.origin); // https://example.com:8080
console.log(myURL.protocol); // https:
console.log(myURL.hostname); // example.com
console.log(myURL.port); // 8080
console.log(myURL.pathname); // /path/name
console.log(myURL.search); // ?query=string
console.log(myURL.hash); // #hash
```

**Exemplo de** `URLSearchParams`:

```jsx
const { URLSearchParams } = require("url");

const params = new URLSearchParams("query=string&key=value");

console.log(params.get("query")); // string
console.log(params.get("key")); // value

// Adicionando novos parâmetros
params.append("newKey", "newValue");
console.log(params.toString()); // query=string&key=value&newKey=newValue

// Iterando sobre os parâmetros
for (const [key, value] of params) {
  console.log(`${key}: ${value}`);
}
```

### Comparando `url.parse()` e `new URL()`

- **`url.parse()`**: Retorna um objeto com propriedades específicas que representam diferentes partes da URL.
- **`new URL()`**: Cria uma instância da classe `URL`, que oferece métodos e propriedades mais poderosos e padronizados para manipulação de URLs.
</details>

<details>
<summary>File System - fs</summary>

O módulo `fs` (File System) do **Node** é um dos módulos principais que permite interagir com o sistema de arquivos. Ele oferece uma API para realizar operações como leitura, escrita, atualização, remoção e verificação de arquivos e diretórios. O `fs` suporta tanto métodos síncronos quanto assíncronos, permitindo escolher entre operações bloqueantes e não bloqueantes.

### Funcionalidade essenciais

- **Leitura e Gravação de Arquivos:** Acesse e manipule o conteúdo de arquivos de texto e binários de forma assíncrona ou síncrona.
- **Criação e Exclusão de Arquivos:** Crie novos arquivos ou exclua arquivos existentes com base em suas necessidades.
- **Gerenciamento de Diretórios:** Crie, renomeie e exclua diretórios, além de verificar sua existência e listar seu conteúdo.
- **Manipulação de Caminhos:** Trabalhe com caminhos de arquivos de forma eficiente, resolvendo e normalizando caminhos e construindo caminhos relativos.
- **Fluxos de Dados:** Crie fluxos de leitura e gravação para lidar com grandes volumes de dados de forma eficiente.
- **Estatísticas de Arquivos:** Obtenha informações detalhadas sobre arquivos e diretórios, como tamanho, data de modificação e permissões.
  </details>

<details>
<summary>Path</summary>

O módulo `path` é um dos módulos principais do **Node** e fornece utilitários para trabalhar com caminhos de arquivos e diretórios. Ele facilita a manipulação e formatação de caminhos de uma maneira que é independente do sistema operacional, tornando o código mais portável entre diferentes ambientes (_Windows, macOS, Linux_).

### Principais Métodos do Módulo `path`

- `path.basename()`: Retorna a última parte de um caminho. É útil para obter o nome do arquivo de um caminho completo.
- `path.dirname()`: Retorna o diretório pai de um caminho. É útil para obter o caminho do diretório de um arquivo.
- `path.extname()`: Retorna a extensão de um arquivo. É útil para determinar o tipo de arquivo.
- `path.join()`: Une todos os argumentos fornecidos em um único caminho. Ele usa o separador apropriado para o sistema operacional.
- `path.resolve()`: Resolve uma sequência de caminhos ou segmentos de caminhos em um caminho absoluto. Ele processa as partes da direita para a esquerda, adicionando-as até formar um caminho absoluto.
- `path.normalize()`: Normaliza um caminho, resolvendo `..` e `.` segmentos.
- `path.isAbsolute()`: Verifica se um caminho é absoluto.
- `path.relative()`: Retorna o caminho relativo de um local para outro.
</details>

<details>
<summary>OS Module</summary>

O módulo `os` é um dos módulos nativos do **Node** que fornece uma série de métodos utilitários para interagir com o sistema operacional subjacente. Ele permite acessar informações do sistema, manipular variáveis de ambiente, e realizar várias operações relacionadas ao sistema.

### Importando o Módulo `os`

Para usar o módulo `os`, você precisa importá-lo no seu script:

```jsx
const os = require("os");
```

### Principais Métodos do Módulo `os`

- `os.arch()`: Retorna a arquitetura da CPU para a qual a versão do Node.js foi compilada (por exemplo, `'x64'`, `'arm'`, `'ia32'`).
- `os.platform()`: Retorna uma string identificando a plataforma do sistema operacional (por exemplo, `'darwin'`, `'win32'`, `'linux'`).
- `os.type()`: Retorna uma string identificando o tipo do sistema operacional (por exemplo, `'Linux'`, `'Darwin'`, `'Windows_NT'`).
- `os.release()`: Retorna uma string que identifica a versão do sistema operacional.
- `os.uptime()`: Retorna o tempo de atividade do sistema em segundos.
- `os.totalmem()`: Retorna a quantidade total de memória do sistema em bytes.
- `os.freemem()`: Retorna a quantidade de memória livre do sistema em bytes.
- `os.homedir()`: Retorna o diretório inicial do usuário atual.
- `os.tmpdir()`: Retorna o diretório para arquivos temporários.
- `os.hostname()`: Retorna o nome do host do sistema operacional.
- `os.networkInterfaces()`: Retorna um objeto contendo as interfaces de rede que foram atribuídas um endereço de rede.
- `os.cpus()`: Retorna uma matriz de objetos contendo informações sobre cada CPU/lógica do processador disponível.

</details>

## Rotas

<details>
<summary>Rotas em node</summary>

Em **Node**, "rotas" referem-se aos pontos finais (endpoints) de uma aplicação que correspondem a diferentes URLs e métodos HTTP (como _GET, POST, PUT, DELETE_). Rotas são essenciais para construir APIs RESTful e para lidar com diferentes requisições em aplicações web.

Para gerenciar rotas em **Node**, o módulo `http` pode ser usado para criar um servidor simples com rotas básicas, mas o uso de frameworks como **_Express_** simplifica e aprimora significativamente o gerenciamento de rotas.

</details>

## Express

<details>
<summary>O que é Express?</summary>

**Express** é um _framework_ web para **Node.js** que facilita o desenvolvimento de aplicações web e APIs.

Ele fornece um conjunto de recursos robustos para construir aplicativos de uma única página, multi-páginas e híbridos. Aqui estão algumas características do **Express**:

- **Middleware**: Express usa um sistema de middleware, o que permite adicionar funcionalidades à sua aplicação de forma modular e flexível. Você pode usar middlewares para manipular solicitações HTTP, adicionar autenticação, lidar com erros, entre outros.
- **Roteamento**: O Express possui um sistema de roteamento poderoso que permite definir rotas para diferentes URLs e métodos HTTP (GET, POST, PUT, DELETE, etc.). Você pode criar rotas para responder a solicitações específicas, como exibir uma página ou manipular dados de um formulário.
- **Manuseio de Solicitações e Respostas**: Express facilita o manuseio de solicitações e respostas HTTP. Você pode acessar facilmente parâmetros de URL, corpo de solicitações, cabeçalhos, cookies, entre outros.
- **Templates**: Express suporta mecanismos de templates como Pug, EJS e Handlebars, permitindo que você gere HTML dinâmico no lado do servidor.
- **Desenvolvimento de APIs**: Com Express, você pode criar APIs RESTful de maneira simples e eficiente, definindo endpoints que retornam dados em formato JSON ou outros formatos apropriados.
- **Flexibilidade**: Express é minimalista e não impõe muitas restrições, o que permite que você configure e estruture sua aplicação da maneira que preferir.
</details>
