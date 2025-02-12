
function adicionarTermo() {
    const termo = document.getElementById('termo').value.trim();
    if (termo === '') return;
  
    const definicao = buscarDefinicao(termo);
    const termoCompleto = `${termo}: ${definicao}`;
  
    const listaTermos = document.getElementById('listaTermos');
    const novoTermo = document.createElement('li');
    novoTermo.textContent = termoCompleto;
    listaTermos.appendChild(novoTermo);
  
    // Salva o termo no localStorage
    const termosSalvos = JSON.parse(localStorage.getItem('glossario')) || [];
    termosSalvos.push(termoCompleto);
    localStorage.setItem('glossario', JSON.stringify(termosSalvos));
  
    document.getElementById('termo').value = ''; // Limpa o campo de input
  }
  
  function buscarDefinicao(termo) {
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
      "IDE": "Integrated Development Environment: A software application for writing and testing code."
    };
  
    const termoFormatado = termo.toLowerCase();
    if (glossario[termoFormatado]) {
      return glossario[termoFormatado];
    } else {
      return "Este termo não está no glossário de programação. Tente palavras como 'loop', 'function' ou 'variable'.";
    }
  }