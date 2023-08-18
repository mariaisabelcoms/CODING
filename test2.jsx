var myPalette = new Window("palette", "Checklist", undefined);
myPalette.orientation = "row";

// Adicione um painel para a coluna "Sim"
var yesPanel = myPalette.add("panel");
yesPanel.text = "Sim";
yesPanel.alignChildren = ["left", "top"];
var yesButton = yesPanel.add("radiobutton", undefined, "Sim");

// Adicione um painel para a coluna "Não"
var noPanel = myPalette.add("panel");
noPanel.text = "Não";
noPanel.alignChildren = ["left", "top"];
var noButton = noPanel.add("radiobutton", undefined, "Não");

// Adicione um painel para a coluna "Não se aplica"
var naPanel = myPalette.add("panel");
naPanel.text = "Não se aplica";
naPanel.alignChildren = ["left", "top"];
var naButton = naPanel.add("radiobutton", undefined, "Não se aplica");

// Adicione um botão "OK"
var okButton = myPalette.add("button", undefined, "OK");
okButton.onClick = function() {
  // Lógica para verificar qual botão de opção foi selecionado
  if (yesButton.value) {
    alert("Sim foi selecionado.");
  } else if (noButton.value) {
    alert("Não foi selecionado.");
  } else if (naButton.value) {
    alert("Não se aplica foi selecionado.");
  }
  myPalette.close();
};

myPalette.show();
