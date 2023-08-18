var checklistPanel = new Window("dialog", "Verificação de Área");
var questionText = checklistPanel.add("statictext", undefined, "Essa área será utilizada para corte?");

var yesRadioButton = checklistPanel.add("panel", undefined, "Sim");
var yesRadioGroup = yesRadioButton.add("group");
yesRadioGroup.add("radiobutton", undefined, " ( ) ");
var yesRadioText = yesRadioGroup.add("statictext", undefined, "Sim");

var noRadioButton = checklistPanel.add("panel", undefined, "Não");
var noRadioGroup = noRadioButton.add("group");
noRadioGroup.add("radiobutton", undefined, " ( ) ");
var noRadioText = noRadioGroup.add("statictext", undefined, "Não");

var naRadioButton = checklistPanel.add("panel", undefined, "Não se aplica");
var naRadioGroup = naRadioButton.add("group");
naRadioGroup.add("radiobutton", undefined, " ( ) ");
var naRadioText = naRadioGroup.add("statictext", undefined, "Não se aplica");

var checkButton = checklistPanel.add("button", undefined, "Verificar");

yesRadioGroup.children[0].value = true;

checkButton.onClick = function() {
  // Código para verificação de área aqui
};

checklistPanel.show();
