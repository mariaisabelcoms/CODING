// Cria o menu suspenso de usuários
var w = new Window("dialog");
w.add("statictext", undefined, "Selecione o usuário:");
var userDropdown = w.add("dropdownlist", undefined, ["Elaborador(a)", "Revisor(a)"]);
userDropdown.selection = 0; // seleciona "Elaborador" como padrão

// Cria o menu suspenso de tipos de arte
w.add("statictext", undefined, "Selecione o tipo de arte:");
var typeDropdown = w.add("dropdownlist", undefined, ["Tipo A", "Tipo B"]);
typeDropdown.selection = 0; // seleciona "Tipo A" como padrão

var okButton = w.add("button", undefined, "OK");
w.show();

// Verifica qual opção foi selecionada no menu suspenso de usuários
var userSelection = userDropdown.selection.text;

// Cria a lista de verificação com base na seleção do usuário e do tipo de arte
var checklist;
if (userSelection == "Elaborador(a)") {
  if (typeDropdown.selection.text == "Tipo A") {
    checklist = [
      // Lista de verificação para o Elaborador - Tipo A
    ];
  } else if (typeDropdown.selection.text == "Tipo B") {
    checklist = [
      // Lista de verificação para o Elaborador - Tipo B
    ];
  }
} else if (userSelection == "Revisor(a)") {
  if (typeDropdown.selection.text == "Tipo A") {
    checklist = [
      // Lista de verificação para o Revisor - Tipo A
    ];
  } else if (typeDropdown.selection.text == "Tipo B") {
    checklist = [
      // Lista de verificação para o Revisor - Tipo B
    ];
  }
}

// Cria a paleta personalizada
var myPalette = new Window('palette', 'Checklist', undefined);

// Adiciona a lista de verificação à paleta personalizada
for (var i = 0; i < checklist.length; i++) {
  var checkbox = myPalette.add("checkbox", undefined, checklist[i]);
}

myPalette.show();
