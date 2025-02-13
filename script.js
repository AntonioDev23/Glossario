// Objeto que armazena os termos e suas definições
const glossario = {
  "loop": "A structure that repeats a block of code until a condition is met.",
  "function": "A block of code designed to perform a particular task.",
  "variable": "A container for storing data values.",
  "array": "A collection of elements stored in a single variable.",
  "object": "A data structure that stores key-value pairs.",
  "class": "A blueprint for creating objects in object-oriented programming.",
  "method": "A function associated with an object or class.",
  "API": "Application Programming Interface: A set of rules for building and interacting with software applications.",
  "framework": "A reusable set of libraries or tools for developing software applications.",
  "algorithm": "A step-by-step procedure for solving a problem or performing a task.",
  "bug": "An error or flaw in a program that causes it to behave unexpectedly.",
  "debugging": "The process of finding and fixing bugs in a program.",
  "syntax": "The set of rules that define the structure of a programming language.",
  "compiler": "A program that translates code written in a high-level language into machine code.",
  "IDE": "Integrated Development Environment: A software application for writing and testing code.",
  "frontend": "The part of a website or application that users interact with directly.",
  "backend": "The server-side part of a website or application that handles data processing and storage.",
  "database": "A structured collection of data stored and accessed electronically.",
  "SQL": "Structured Query Language: A language used to manage and query relational databases.",
  "NoSQL": "A type of database that stores data in a non-tabular format, such as documents or graphs.",
  "Git": "A distributed version control system for tracking changes in source code.",
  "repository": "A storage location for software packages or version-controlled projects.",
  "pull request": "A method of submitting contributions to a project, commonly used in Git.",
  "agile": "A project management methodology focused on iterative development and collaboration.",
  "scrum": "A framework within agile methodology for managing complex projects.",
  "devops": "A set of practices that combines software development and IT operations.",
  "cloud computing": "The delivery of computing services over the internet, such as storage and processing power.",
  "machine learning": "A subset of artificial intelligence that enables systems to learn from data.",
  "artificial intelligence": "The simulation of human intelligence in machines.",
  "responsive design": "A design approach that ensures websites work well on various devices and screen sizes.",
  "UI": "User Interface: The visual part of a software application that users interact with.",
  "UX": "User Experience: The overall experience a user has while interacting with a product.",
  "DOM": "Document Object Model: A programming interface for web documents.",
  "JSON": "JavaScript Object Notation: A lightweight data interchange format.",
  "REST": "Representational State Transfer: An architectural style for designing networked applications.",
  "HTTP": "Hypertext Transfer Protocol: The foundation of data communication for the web.",
  "HTTPS": "HTTP Secure: A secure version of HTTP that uses encryption.",
  "cookie": "A small piece of data stored on the user's computer by the web browser.",
  "session": "A way to store information on the server about a user's interactions with a website.",
  "authentication": "The process of verifying the identity of a user.",
  "authorization": "The process of granting or denying access to resources based on user permissions.",
  "encryption": "The process of converting data into a code to prevent unauthorized access.",
  "open source": "Software whose source code is made available for modification and distribution.",
  "API endpoint": "A specific URL where an API can be accessed to perform a specific task.",
  "callback": "A function passed as an argument to another function to be executed later.",
  "promise": "An object representing the eventual completion or failure of an asynchronous operation.",
  "async/await": "A modern way to handle asynchronous operations in JavaScript.",
  "closure": "A function that retains access to its lexical scope, even when executed outside that scope.",
  "recursion": "A function that calls itself to solve a problem.",
  "stack overflow": "An error that occurs when a program runs out of memory due to excessive recursion or function calls.",
  "event loop": "A mechanism in JavaScript that handles asynchronous operations.",
  "hoisting": "A behavior in JavaScript where variable and function declarations are moved to the top of their scope.",
  "prototype": "An object from which other objects inherit properties and methods.",
  "this": "A keyword in JavaScript that refers to the current execution context.",
  "arrow function": "A concise way to write functions in JavaScript, using the `=>` syntax.",
  "template literal": "A way to embed expressions inside string literals in JavaScript, using backticks (`).",
  "destructuring": "A syntax in JavaScript that allows unpacking values from arrays or objects into distinct variables.",
  "spread operator": "A syntax in JavaScript that allows expanding elements of an array or object.",
  "module": "A reusable piece of code that can be imported and used in other parts of a program.",
  "package manager": "A tool for managing dependencies in a project, such as npm or yarn.",
  "dependency": "A library or module that a project relies on to function.",
  "unit test": "A test that verifies the functionality of a specific part of the code.",
  "integration test": "A test that verifies the interaction between different parts of the code.",
  "end-to-end test": "A test that verifies the entire workflow of an application.",
  "continuous integration": "A practice of merging code changes into a shared repository frequently.",
  "continuous deployment": "A practice of automatically deploying code changes to production.",
  "containerization": "A method of packaging software so it can run consistently across different environments.",
  "microservices": "An architectural style that structures an application as a collection of small, independent services.",
  "monolith": "An architectural style where an application is built as a single, unified unit.",
  "serverless": "A cloud computing model where the cloud provider manages the infrastructure.",
  "lambda": "A serverless computing service provided by AWS.",
  "big data": "A term used to describe extremely large datasets that require specialized tools to process.",
  "data mining": "The process of discovering patterns in large datasets.",
  "blockchain": "A decentralized and distributed digital ledger used to record transactions.",
  "cryptocurrency": "A digital or virtual currency that uses cryptography for security.",
  "smart contract": "A self-executing contract with the terms of the agreement directly written into code.",
  "IoT": "Internet of Things: A network of physical devices connected to the internet.",
  "virtual reality": "A simulated experience that can be similar to or completely different from the real world.",
  "augmented reality": "An enhanced version of reality created by overlaying digital information on the real world.",
  "cybersecurity": "The practice of protecting systems, networks, and programs from digital attacks.",
  "phishing": "A type of cyber attack that uses disguised emails or websites to steal sensitive information.",
  "firewall": "A network security system that monitors and controls incoming and outgoing network traffic.",
  "VPN": "Virtual Private Network: A service that encrypts internet traffic and hides the user's IP address.",
  "DNS": "Domain Name System: A system that translates domain names into IP addresses.",
  "CDN": "Content Delivery Network: A network of servers that deliver web content to users based on their geographic location.",
  "load balancing": "The process of distributing network traffic across multiple servers to ensure reliability and performance.",
  "scalability": "The ability of a system to handle increased load by adding resources.",
  "latency": "The time it takes for data to travel from one point to another.",
  "bandwidth": "The maximum amount of data that can be transmitted over a network in a given time.",
  "throughput": "The amount of data processed by a system in a given time.",
  "cache": "A hardware or software component that stores data temporarily for faster access."
};

// Função para adicionar um termo ao glossário
function adicionarTermo() {
  const termo = document.getElementById('termo').value.trim();
  if (termo === '') return;

  const definicao = buscarDefinicao(termo);
  const termoCompleto = `<strong>${termo}</strong>: ${definicao}`; // Termo em negrito

  const listaTermos = document.getElementById('listaTermos');
  const novoTermo = document.createElement('li');
  novoTermo.innerHTML = termoCompleto; // Usamos innerHTML para renderizar a tag <strong>
  listaTermos.appendChild(novoTermo);

  document.getElementById('termo').value = ''; // Limpa o campo de input
}

// Função para buscar a definição de um termo no glossário
function buscarDefinicao(termo) {
  const termoFormatado = termo.toLowerCase();
  if (glossario[termoFormatado]) {
    return glossario[termoFormatado];
  } else {
    return "Este termo não está no glossário de programação. Tente palavras como 'loop', 'function' ou 'variable'.";
  }
}

// Função para limpar a lista e o localStorage
function limparLista() {
  const listaTermos = document.getElementById('listaTermos');
  listaTermos.innerHTML = ''; // Remove todos os itens da lista
  localStorage.removeItem('glossario'); // Limpa o localStorage
}

// Adiciona um event listener ao botão "Limpar Lista"
document.getElementById('limparLista').addEventListener('click', limparLista);

// Adiciona um event listener para o campo de input que detecta a tecla Enter
document.getElementById('termo').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') { // Verifica se a tecla pressionada é o Enter
    adicionarTermo(); // Chama a função para adicionar o termo
  }
});