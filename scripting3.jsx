// Cria o menu suspenso
var w = new Window("dialog");
w.add("statictext", undefined, "Selecione o usuário:");
var userDropdown = w.add("dropdownlist", undefined, ["Elaborador(a)", "Revisor(a)"]);
userDropdown.selection = 0; // seleciona "Elaborador" como padrão
var okButton = w.add("button", undefined, "OK");

// Função para criar a paleta personalizada
function createPalette() {
  var myPalette = new Window('palette', 'Checklist - Medicamentos', undefined);
  // Aqui você pode adicionar os componentes da paleta
  myPalette.show();
}

// Define a ação do botão OK
okButton.onClick = function() {
  // Verifica qual opção foi selecionada no menu suspenso
  var userSelection = userDropdown.selection.text;
  // Cria a lista de verificação com base na seleção do usuário
  var checklist;
  if (userSelection == "Elaborador(a)") {
    // Lista de verificação para o Elaborador
    checklist = [
      "Item 1",
      "Item 2",
      "Item 3"
    ];
  } else if (userSelection == "Revisor(a)") {
    // Lista de verificação para o Revisor
    checklist = [
      "Item A",
      "Item B",
      "Item C"
    ];
  }
  // Cria a paleta personalizada
  createPalette();
};

// Mostra o menu suspenso
w.show();
