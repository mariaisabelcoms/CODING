
// Cria o menu suspenso de usuários
var w = new Window("dialog");
w.add("statictext", undefined, "Selecione o(a) usuário(a):");
var userDropdown = w.add("dropdownlist", undefined, ["Elaborador(a)", "Revisor(a)"]);
userDropdown.selection = 0; // seleciona "Elaborador" como padrão

// Cria o menu suspenso de tipos de checklist
w.add("statictext", undefined, "Selecione o tipo de checklist:");
var typeDropdown = w.add("dropdownlist", undefined, ["Medicamento", "Não Medicamento", "Dermo"]);
typeDropdown.selection = 0; // seleciona "Medicamento" como padrão

// Cria o menu suspenso de tipos de embalagem
w.add("statictext", undefined, "Selecione o tipo de embalagem:");
var typeDropdown = w.add("dropdownlist", undefined, ["Medicamento", "Não Medicamento", "Dermo"]);
typeDropdown.selection = 0; // seleciona "Medicamento" como padrão

var okButton = w.add("button", undefined, "OK");

// Verifica qual opção foi selecionada no menu suspenso de usuários
var userSelection = userDropdown.selection.text;

// Função para criar o checklist
function createChecklist(selection) {
  var groupName = selection + " Checklist";
  var group = w.add("group", undefined, groupName);
  group.add("statictext", undefined, "Checklist para " + selection + ":");
  // Adicione aqui os elementos do checklist
  group.add("checkbox", undefined, "Item 1");
  group.add("checkbox", undefined, "Item 2");
  group.add("checkbox", undefined, "Item 3");
  w.layout.layout(true);
}

// Adiciona um evento de clique ao botão OK
okButton.onClick = function() {
  var userSelection = userDropdown.selection.text;
  createChecklist(userSelection);
}

w.show();
