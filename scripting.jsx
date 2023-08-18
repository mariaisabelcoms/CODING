var doc = app.activeDocument;

// Cria a paleta personalizada
var myPalette = new Window('palette', 'Checklist - Medicamentos', undefined);

// Cria o primeiro grupo de opções
var group1 = myPalette.add('group', undefined, 'Group 1');
group1.orientation = 'row';
var label1 = group1.add('statictext', undefined, 'Opção 1:');
var yesBtn1 = group1.add('radiobutton', undefined, 'Sim');
var noBtn1 = group1.add('radiobutton', undefined, 'Não');
var naBtn1 = group1.add('radiobutton', undefined, 'Não se aplica');

// Cria o segundo grupo de opções
var group2 = myPalette.add('group', undefined, 'Group 2');
group2.orientation = 'row';
var label2 = group2.add('statictext', undefined, 'Opção 2:');
var yesBtn2 = group2.add('radiobutton', undefined, 'Sim');
var noBtn2 = group2.add('radiobutton', undefined, 'Não');
var naBtn2 = group2.add('radiobutton', undefined, 'Não se aplica');

// Define o comportamento dos botões
yesBtn1.onClick = function() {
  // Adicionar código para marcar a primeira opção como concluída
  alert('Opção 1 marcada como concluída!');
}
noBtn1.onClick = function() {
  // Adicionar código para marcar a primeira opção como não concluída
  alert('Opção 1 marcada como não concluída!');
}
naBtn1.onClick = function() {
  // Adicionar código para marcar a primeira opção como não se aplica
  alert('Opção 1 marcada como não se aplica!');
}

yesBtn2.onClick = function() {
  // Adicionar código para marcar a segunda opção como concluída
  alert('Opção 2 marcada como concluída!');
}
noBtn2.onClick = function() {
  // Adicionar código para marcar a segunda opção como não concluída
  alert('Opção 2 marcada como não concluída!');
}
naBtn2.onClick = function() {
  // Adicionar código para marcar a segunda opção como não se aplica
  alert('Opção 2 marcada como não se aplica!');
}

// Exibe a paleta personalizada
myPalette.show();
