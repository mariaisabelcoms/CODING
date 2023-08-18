// Cria o menu suspenso de usuários
var w = new Window("dialog");
w.add("statictext", undefined, "Selecione o usuário:");
var userDropdown = w.add("dropdownlist", undefined, ["Elaborador(a)", "Revisor(a)"]);

// Cria o menu suspenso de tipos de arte
w.add("statictext", undefined, "Selecione o tipo de checklist:");
var arteDropdown = w.add("dropdownlist", undefined, ["Medicamento", "Não Medicamento", "Dermo"]);

// Cria o menu suspenso de tipos de embalagem
w.add("statictext", undefined, "Selecione o tipo de arte:");
var embalagemDropdown = w.add("dropdownlist", undefined, []);

// Define as opções de embalagem para cada tipo de arte
var tiposEmbalagem = [
  ["Primária", "Secundária Genérico", "Secundária Similar", "Caixa de Embarque", "Bula"],
  ["Primária", "Secundária", "Caixa de Embarque", "Folheto"],
  ["Primária", "Secundária", "Caixa de Embarque"]
];

// Define a lista de opções de embalagem com base na seleção do tipo de arte
var embalagemOptions = tiposEmbalagem[arteDropdown.selection.index];
for (var i = 0; i < embalagemOptions.length; i++) {
  embalagemDropdown.add("item", embalagemOptions[i]);
}

var okButton = w.add("button", undefined, "OK");
  
  // Define as opções de embalagem adequadas para o tipo de arte selecionado
  var embalagemOptions = tiposEmbalagem[arteDropdown.selection.index];
  for (var i = 0; i < embalagemOptions.length; i++) {
    embalagemDropdown.add("item", embalagemOptions[i]);
  }

