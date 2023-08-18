var myPalette = new Window("palette", "Checklist", undefined);
myPalette.orientation = "column";
myPalette.alignChildren = ["fill", "top"];

// Adicione as checkboxes
var checkGroup = myPalette.add("group");
checkGroup.orientation = "column";
checkGroup.alignChildren = ["left", "top"];
checkGroup.add("checkbox", undefined, "Verificar se a área é menor que 10 cm²");
checkGroup.add("checkbox", undefined, "Verificar se a área é entre 10 e 50 cm²");
checkGroup.add("checkbox", undefined, "Verificar se a área é maior que 50 cm²");

// Adicione um botão "OK"
var okButton = myPalette.add("button", undefined, "OK");
okButton.onClick = function() {
  // Lógica para verificar as checkboxes selecionadas
  myPalette.close();
};

myPalette.show();
