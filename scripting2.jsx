// Cria o menu suspenso
var w = new Window("dialog");
w.add("statictext", undefined, "Selecione o usuário:");
var userDropdown = w.add("dropdownlist", undefined, ["Elaborador(a)", "Revisor(a)"]);
userDropdown.selection = 0; // seleciona "Elaborador" como padrão
var okButton = w.add("button", undefined, "OK");
w.show();

// Verifica qual opção foi selecionada no menu suspenso
var userSelection = userDropdown.selection.text;

// Cria a lista de verificação com base na seleção do usuário
var checklist;
if (userSelection == "Elaborador") {
  checklist = [
    // Lista de verificação para o Elaborador
    {
      label: "Verificar se a arte está de acordo com o briefing",
      checked: false
    },
    {
      label: "Verificar se as dimensões da arte estão corretas",
      checked: false
    },
    {
      label: "Verificar se todas as informações foram incluídas",
      checked: false
    }
  ];
} else {
  // Lista de verificação para o Revisor
  checklist = [
    {
      label: "Verificar se a arte está de acordo com o briefing",
      checked: false
    },
    {
      label: "Verificar se as dimensões da arte estão corretas",
      checked: false
    },
    {
      label: "Verificar se todas as informações foram incluídas",
      checked: false
    },
    {
      label: "Verificar se não há erros de ortografia ou gramática",
      checked: false
    }
  ];
}


