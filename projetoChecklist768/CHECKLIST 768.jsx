// Função para imprimir em diferentes formatos de documentos
function printToFile(doc, fileName, saveOptions) {
  doc.saveAs(new File(fileName), saveOptions);
}

var versionPalette = new Window("palette", "CHECKLIST RDC 768", undefined);
versionPalette.orientation = "column";
versionPalette.alignChildren = ["center", "top"];

// Cabeçalho com logo
var headerGroup = versionPalette.add("group");
headerGroup.orientation = "column";
headerGroup.alignment = ["fill", "top"];

var logo = headerGroup.add("image", undefined, File("\\\\flsprd04.pratika.br\\Grupos\\Desenvolvimento de Embalagem\\AA CONTROLE\\@_EMBTEC\\@ITENS DE PADRONIZAÇÃO\\Logo Hypera.png"));
logo.preferredSize.width = 180; // Largura da logo
logo.preferredSize.height = 90; // Altura do cabeçalho

var headerTitle = headerGroup.add("statictext", undefined, "CHECKLIST RDC Nº 768");
headerTitle.alignment = "center"; // Centraliza o título

var headerText = headerGroup.add("statictext", undefined, "Selecione o tipo de Embalagem:");
headerText.alignment = "center";

var versionList = versionPalette.add("dropdownlist", undefined, ["Primária", "Cart Similar", "Cart Genérico"]);

var confirmButton = versionPalette.add("button", undefined, "Confirmar");

confirmButton.onClick = function() {
  versionPalette.close();

  var selectedVersion = versionList.selection.index;

  switch (selectedVersion) {
    case 0:
                                                                            // PRIMÁRIA
      // Função para imprimir em diferentes formatos de documentos
function printToFile(doc, fileName, saveOptions) {
  doc.saveAs(new File(fileName), saveOptions);
}

var myPalette = new Window("palette", "ARTEC", undefined);
myPalette.orientation = "column";
myPalette.alignChildren = ["fill", "top"];

// Adicione o cabeçalho acima do Elaborador, Logo e Material
var headerGroup = myPalette.add("group");
headerGroup.orientation = "row";

// Adicione o texto "Checklist RDC 768" ao cabeçalho
var headerText = headerGroup.add("statictext", undefined, "Checklist RDC 768");
headerText.alignment = ["left", "center"];

// Adicione um espaçador entre o texto e a logo
var spacer = headerGroup.add("statictext", undefined, " ");
spacer.size = [70, 10]; // Defina o tamanho do espaçador

// Adicione a logo no cabeçalho
var logo = headerGroup.add("image", undefined, File("\\\\flsprd04.pratika.br\\Grupos\\Desenvolvimento de Embalagem\\AA CONTROLE\\@_EMBTEC\\@ITENS DE PADRONIZAÇÃO\\Logo Hypera.png"));
logo.size = [150, 55]; // Defina o tamanho da logo

// Adicione o grupo do Elaborador e Material
var group = myPalette.add("group");
group.orientation = "column";
group.alignChildren = ["left", "center"];

// Adicione o grupo do Elaborador e Logo na mesma linha
var elaboradorLogoGroup = group.add("group");
elaboradorLogoGroup.orientation = "row";
elaboradorLogoGroup.alignChildren = ["left", "center"];

// Adicione o campo Elaborador à esquerda
var leftColumn = elaboradorLogoGroup.add("group"); // Left column
leftColumn.orientation = "column";

var elaboradorRow = leftColumn.add("group"); // Elaborador row
elaboradorRow.orientation = "row";
elaboradorRow.alignChildren = ["left", "center"]; // Align children to the left
elaboradorRow.add("statictext", undefined, "Elaborador:");
var elaboradorOptions = ["Angélica", "Carlos", "Fernando", "Isabel", "Jackson", "Márcio", "Pedro"];
var sortedElaboradorOptions = elaboradorOptions.slice().sort(); // Copia ordenada
var elaboradorDropdown = elaboradorRow.add("dropdownlist", undefined, sortedElaboradorOptions);
elaboradorDropdown.selection = 0; // Defina a opção padrão

// Adicione o campo Material abaixo do grupo do Elaborador e Logo
var materialRow = group.add("group");
materialRow.orientation = "row";
materialRow.alignChildren = ["left", "center"];
materialRow.add("statictext", undefined, "Material:");
var materialField = materialRow.add("edittext", undefined, "");
materialField.characters = 28; // Defina o tamanho do campo para 25 caracteres
  
  // Adicione as checkboxes
  var checkGroup = myPalette.add("group");
  checkGroup.orientation = "column";
  checkGroup.alignChildren = ["left", "top"];
  checkGroup.add("statictext", undefined, "Informações obrigatórias - PRIMÁRIA");
  
  var checkboxLabels = [
    "VENDA SOB PRESCRIÇÃO COM RETENÇÃO DE RECEITA",
    "Texto 2",
    "Texto 3",
    "Texto 4",
    "Texto 5",
  ];
  
  var checkboxes = [];
  
  for (var i = 0; i < checkboxLabels.length; i++) {
    var rowGroup = checkGroup.add("group");
    rowGroup.orientation = "row";
    rowGroup.alignChildren = ["left", "center"];
    checkboxes[i] = rowGroup.add("checkbox", undefined, checkboxLabels[i]);
  }
  
  var notesGroup = myPalette.add("group");
  notesGroup.orientation = "column";
  notesGroup.alignChildren = ["left", "top"];
  notesGroup.add("statictext", undefined, "Observações:");
  
  var notesField = notesGroup.add("edittext", undefined, "", {multiline: true, scrolling: true, maxLength: 1000});
  notesField.characters = 32;
  
  // Adicione um botão "Exportar Script"
  var exportScriptButton = myPalette.add("button", undefined, "Exportar Script");
  exportScriptButton.onClick = function() {
    var scriptText = "";
  
    // Coletar informações do cabeçalho
    var elaboradorSelecionado = elaboradorDropdown.selection.text; // Obtém o elaborador selecionado
    var materialInformado = materialField.text; // Obtém o material informado
  
    // Coletar informações dos checkboxes marcados
    var checkboxesText = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value) {
        checkboxesText += "- " + checkboxLabels[i] + "\n";
        checkboxes[i].value = false; // Desmarcar a checkbox
      }
    }
  
    // Coletar informações das observações
    var observacoes = notesField.text;
    notesField.text = ""; // Limpar a caixa de observações
  
    // Montar as informações separadas por asteriscos
    scriptText += "Elaborador: " + elaboradorSelecionado + "\n";
    scriptText += "Material: " + materialInformado + "\n\n";
    scriptText += "Informações obrigatórias:\n" + checkboxesText + "\n";
    scriptText += "Observações:\n" + observacoes + "\n\n";
    scriptText += "**************************************************\n\n";
  
    // Salvar as informações no arquivo
    var exportFileName = File.saveDialog("Salvar arquivo do script como", "*.txt");
    if (exportFileName) {
      var exportFile = new File(exportFileName);
  
      if (exportFile.open("a")) {
        exportFile.write(scriptText);
        exportFile.close();
        alert("Informações do script exportadas com sucesso para:\n" + exportFile.fsName);
  
        // Resetar checkboxes após exportar
        for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].value = false;
        }
      } else {
        alert("Não foi possível criar o arquivo de exportação.");
      }
    }
  };
  
  myPalette.show();
  


      break;

    case 1:
                                                                            // CART SIMILAR
      // Função para imprimir em diferentes formatos de documentos
function printToFile(doc, fileName, saveOptions) {
  doc.saveAs(new File(fileName), saveOptions);
}

var myPalette = new Window("palette", "ARTEC", undefined);
myPalette.orientation = "column";
myPalette.alignChildren = ["fill", "top"];

// Adicione o cabeçalho acima do Elaborador, Logo e Material
var headerGroup = myPalette.add("group");
headerGroup.orientation = "row";

// Adicione o texto "Checklist RDC 768" ao cabeçalho
var headerText = headerGroup.add("statictext", undefined, "Checklist RDC 768    ");
headerText.alignment = ["left", "center"];

// Adicione um espaçador entre o texto e a logo
var spacer = headerGroup.add("statictext", undefined, " ");
spacer.size = [70, 10]; // Defina o tamanho do espaçador

// Adicione a logo no cabeçalho
var logo = headerGroup.add("image", undefined, File("\\\\flsprd04.pratika.br\\Grupos\\Desenvolvimento de Embalagem\\AA CONTROLE\\@_EMBTEC\\@ITENS DE PADRONIZAÇÃO\\Logo Hypera.png"));
logo.size = [150, 55]; // Defina o tamanho da logo

// Adicione o grupo do Elaborador e Material
var group = myPalette.add("group");
group.orientation = "column";
group.alignChildren = ["left", "center"];

// Adicione o grupo do Elaborador e Logo na mesma linha
var elaboradorLogoGroup = group.add("group");
elaboradorLogoGroup.orientation = "row";
elaboradorLogoGroup.alignChildren = ["left", "center"];

// Adicione o campo Elaborador à esquerda
var leftColumn = elaboradorLogoGroup.add("group"); // Left column
leftColumn.orientation = "column";

var elaboradorRow = leftColumn.add("group"); // Elaborador row
elaboradorRow.orientation = "row";
elaboradorRow.alignChildren = ["left", "center"]; // Align children to the left
elaboradorRow.add("statictext", undefined, "Elaborador:");
var elaboradorOptions = ["Angélica", "Carlos", "Fernando", "Isabel", "Jackson", "Márcio", "Pedro"];
var sortedElaboradorOptions = elaboradorOptions.slice().sort(); // Copia ordenada
var elaboradorDropdown = elaboradorRow.add("dropdownlist", undefined, sortedElaboradorOptions);
elaboradorDropdown.selection = 0; // Defina a opção padrão

// Adicione o campo Material abaixo do grupo do Elaborador e Logo
var materialRow = group.add("group");
materialRow.orientation = "row";
materialRow.alignChildren = ["left", "center"];
materialRow.add("statictext", undefined, "Material:");
var materialField = materialRow.add("edittext", undefined, "");
materialField.characters = 28; // Defina o tamanho do campo para 25 caracteres
  
  // Adicione as checkboxes
  var checkGroup = myPalette.add("group");
  checkGroup.orientation = "column";
  checkGroup.alignChildren = ["left", "top"];
  checkGroup.add("statictext", undefined, "Informações obrigatórias - CART SIMILAR");
  
  var checkboxLabels = [
    "Expressão: “Informações ao paciente/profissional...”",
    "“TODO MEDICAMENTO DEVE SER MANTIDO FORA...”.",
    "Código EAN (validar via SAP ou planilha de EAN’s).",
    "Forma farmacêutica.",
    "Denominação genérica em BRAILLE.",
    "Via de administração.",
    "Registro M.S.",
    "Nome e endereço da empresa titular do REGISTRO.",
    "Nome e endereço da empresa FABRICANTE",
    "Expressão “Amostra Grátis",
    
  ];
  
  var checkboxes = [];
  
  for (var i = 0; i < checkboxLabels.length; i++) {
    var rowGroup = checkGroup.add("group");
    rowGroup.orientation = "row";
    rowGroup.alignChildren = ["left", "center"];
    checkboxes[i] = rowGroup.add("checkbox", undefined, checkboxLabels[i]);
  }
  
  var notesGroup = myPalette.add("group");
  notesGroup.orientation = "column";
  notesGroup.alignChildren = ["left", "top"];
  notesGroup.add("statictext", undefined, "Observações:");
  
  var notesField = notesGroup.add("edittext", undefined, "", {multiline: true, scrolling: true, maxLength: 1000});
  notesField.characters = 32;
  
  // Adicione um botão "Exportar Script"
  var exportScriptButton = myPalette.add("button", undefined, "Exportar Script");
  exportScriptButton.onClick = function() {
    var scriptText = "";
  
    // Coletar informações do cabeçalho
    var elaboradorSelecionado = elaboradorDropdown.selection.text; // Obtém o elaborador selecionado
    var materialInformado = materialField.text; // Obtém o material informado
  
    // Coletar informações dos checkboxes marcados
    var checkboxesText = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value) {
        checkboxesText += "- " + checkboxLabels[i] + "\n";
        checkboxes[i].value = false; // Desmarcar a checkbox
      }
    }
  
    // Coletar informações das observações
    var observacoes = notesField.text;
    notesField.text = ""; // Limpar a caixa de observações
  
    // Montar as informações separadas por asteriscos
    scriptText += "Elaborador: " + elaboradorSelecionado + "\n";
    scriptText += "Material: " + materialInformado + "\n\n";
    scriptText += "Informações obrigatórias:\n" + checkboxesText + "\n";
    scriptText += "Observações:\n" + observacoes + "\n\n";
    scriptText += "**************************************************\n\n";
  
    // Salvar as informações no arquivo
    var exportFileName = File.saveDialog("Salvar arquivo do script como", "*.txt");
    if (exportFileName) {
      var exportFile = new File(exportFileName);
  
      if (exportFile.open("a")) {
        exportFile.write(scriptText);
        exportFile.close();
        alert("Informações do script exportadas com sucesso para:\n" + exportFile.fsName);
  
        // Resetar checkboxes após exportar
        for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].value = false;
        }
      } else {
        alert("Não foi possível criar o arquivo de exportação.");
      }
    }
  };
  
  myPalette.show();
  

      break;

    case 2:
                                                                            // CART GENÉRICO
      // Função para imprimir em diferentes formatos de documentos
function printToFile(doc, fileName, saveOptions) {
  doc.saveAs(new File(fileName), saveOptions);
}

var myPalette = new Window("palette", "ARTEC", undefined);
myPalette.orientation = "column";
myPalette.alignChildren = ["fill", "top"];

// Adicione o cabeçalho acima do Elaborador, Logo e Material
var headerGroup = myPalette.add("group");
headerGroup.orientation = "row";

// Adicione o texto "Checklist RDC 768" ao cabeçalho
var headerText = headerGroup.add("statictext", undefined, "Checklist RDC 768    ");
headerText.alignment = ["left", "center"];

// Adicione um espaçador entre o texto e a logo
var spacer = headerGroup.add("statictext", undefined, " ");
spacer.size = [70, 10]; // Defina o tamanho do espaçador

// Adicione a logo no cabeçalho
var logo = headerGroup.add("image", undefined, File("\\\\flsprd04.pratika.br\\Grupos\\Desenvolvimento de Embalagem\\AA CONTROLE\\@_EMBTEC\\@ITENS DE PADRONIZAÇÃO\\Logo Hypera.png"));
logo.size = [150, 55]; // Defina o tamanho da logo

// Adicione o grupo do Elaborador e Material
var group = myPalette.add("group");
group.orientation = "column";
group.alignChildren = ["left", "center"];

// Adicione o grupo do Elaborador e Logo na mesma linha
var elaboradorLogoGroup = group.add("group");
elaboradorLogoGroup.orientation = "row";
elaboradorLogoGroup.alignChildren = ["left", "center"];

// Adicione o campo Elaborador à esquerda
var leftColumn = elaboradorLogoGroup.add("group"); // Left column
leftColumn.orientation = "column";

var elaboradorRow = leftColumn.add("group"); // Elaborador row
elaboradorRow.orientation = "row";
elaboradorRow.alignChildren = ["left", "center"]; // Align children to the left
elaboradorRow.add("statictext", undefined, "Elaborador:");
var elaboradorOptions = ["Angélica", "Carlos", "Fernando", "Isabel", "Jackson", "Márcio", "Pedro"];
var sortedElaboradorOptions = elaboradorOptions.slice().sort(); // Copia ordenada
var elaboradorDropdown = elaboradorRow.add("dropdownlist", undefined, sortedElaboradorOptions);
elaboradorDropdown.selection = 0; // Defina a opção padrão

// Adicione o campo Material abaixo do grupo do Elaborador e Logo
var materialRow = group.add("group");
materialRow.orientation = "row";
materialRow.alignChildren = ["left", "center"];
materialRow.add("statictext", undefined, "Material:");
var materialField = materialRow.add("edittext", undefined, "");
materialField.characters = 28; // Defina o tamanho do campo para 25 caracteres
  
  // Adicione as checkboxes
  var checkGroup = myPalette.add("group");
  checkGroup.orientation = "column";
  checkGroup.alignChildren = ["left", "top"];
  checkGroup.add("statictext", undefined, "Informações obrigatórias - CART GENÉRICO");
  
  var checkboxLabels = [
    "Texto cart 1",
    "Texto cart 2",
    "Texto cart 3",
    "Texto cart 4",
    "Texto cart 5",
  ];
  
  var checkboxes = [];
  
  for (var i = 0; i < checkboxLabels.length; i++) {
    var rowGroup = checkGroup.add("group");
    rowGroup.orientation = "row";
    rowGroup.alignChildren = ["left", "center"];
    checkboxes[i] = rowGroup.add("checkbox", undefined, checkboxLabels[i]);
  }
  
  var notesGroup = myPalette.add("group");
  notesGroup.orientation = "column";
  notesGroup.alignChildren = ["left", "top"];
  notesGroup.add("statictext", undefined, "Observações:");
  
  var notesField = notesGroup.add("edittext", undefined, "", {multiline: true, scrolling: true, maxLength: 1000});
  notesField.characters = 32;
  
  // Adicione um botão "Exportar Script"
  var exportScriptButton = myPalette.add("button", undefined, "Exportar Script");
  exportScriptButton.onClick = function() {
    var scriptText = "";
  
    // Coletar informações do cabeçalho
    var elaboradorSelecionado = elaboradorDropdown.selection.text; // Obtém o elaborador selecionado
    var materialInformado = materialField.text; // Obtém o material informado
  
    // Coletar informações dos checkboxes marcados
    var checkboxesText = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value) {
        checkboxesText += "- " + checkboxLabels[i] + "\n";
        checkboxes[i].value = false; // Desmarcar a checkbox
      }
    }
  
    // Coletar informações das observações
    var observacoes = notesField.text;
    notesField.text = ""; // Limpar a caixa de observações
  
    // Montar as informações separadas por asteriscos
    scriptText += "Elaborador: " + elaboradorSelecionado + "\n";
    scriptText += "Material: " + materialInformado + "\n\n";
    scriptText += "Informações obrigatórias:\n" + checkboxesText + "\n";
    scriptText += "Observações:\n" + observacoes + "\n\n";
    scriptText += "**************************************************\n\n";
  
    // Salvar as informações no arquivo
    var exportFileName = File.saveDialog("Salvar arquivo do script como", "*.txt");
    if (exportFileName) {
      var exportFile = new File(exportFileName);
  
      if (exportFile.open("a")) {
        exportFile.write(scriptText);
        exportFile.close();
        alert("Informações do script exportadas com sucesso para:\n" + exportFile.fsName);
  
        // Resetar checkboxes após exportar
        for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].value = false;
        }
      } else {
        alert("Não foi possível criar o arquivo de exportação.");
      }
    }
  };
  
  myPalette.show();
  
  
  // Adicione as checkboxes
  var checkGroup = myPalette.add("group");
  checkGroup.orientation = "column";
  checkGroup.alignChildren = ["left", "top"];
  checkGroup.add("statictext", undefined, "Informações obrigatórias");
  
  var checkboxLabels = [
    "Texto cart gen 1",
    "Texto cart gen 2",
    "Texto cart gen 3",
    "Texto cart gen 4",
    "Texto cart gen 5",
  ];
  
  var checkboxes = [];
  
  for (var i = 0; i < checkboxLabels.length; i++) {
    var rowGroup = checkGroup.add("group");
    rowGroup.orientation = "row";
    rowGroup.alignChildren = ["left", "center"];
    checkboxes[i] = rowGroup.add("checkbox", undefined, checkboxLabels[i]);
  }
  
  var notesGroup = myPalette.add("group");
  notesGroup.orientation = "column";
  notesGroup.alignChildren = ["left", "top"];
  notesGroup.add("statictext", undefined, "Observações:");
  
  var notesField = notesGroup.add("edittext", undefined, "", {multiline: true, scrolling: true, maxLength: 1000});
  notesField.characters = 32;
  
  // Adicione um botão "Exportar Script"
  var exportScriptButton = myPalette.add("button", undefined, "Exportar Script");
  exportScriptButton.onClick = function() {
    var scriptText = "";
  
    // Coletar informações do cabeçalho
    var elaboradorSelecionado = elaboradorDropdown.selection.text; // Obtém o elaborador selecionado
    var materialInformado = materialField.text; // Obtém o material informado
  
    // Coletar informações dos checkboxes marcados
    var checkboxesText = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].value) {
        checkboxesText += "- " + checkboxLabels[i] + "\n";
        checkboxes[i].value = false; // Desmarcar a checkbox
      }
    }
  
    // Coletar informações das observações
    var observacoes = notesField.text;
    notesField.text = ""; // Limpar a caixa de observações
  
    // Montar as informações separadas por asteriscos
    scriptText += "Elaborador: " + elaboradorSelecionado + "\n";
    scriptText += "Material: " + materialInformado + "\n\n";
    scriptText += "Informações obrigatórias:\n" + checkboxesText + "\n";
    scriptText += "Observações:\n" + observacoes + "\n\n";
    scriptText += "**************************************************\n\n";
  
    // Salvar as informações no arquivo
    var exportFileName = File.saveDialog("Salvar arquivo do script como", "*.txt");
    if (exportFileName) {
      var exportFile = new File(exportFileName);
  
      if (exportFile.open("a")) {
        exportFile.write(scriptText);
        exportFile.close();
        alert("Informações do script exportadas com sucesso para:\n" + exportFile.fsName);
  
        // Resetar checkboxes após exportar
        for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].value = false;
        }
      } else {
        alert("Não foi possível criar o arquivo de exportação.");
      }
    }
  };
  
  myPalette.show();
  

      break;

    default:
      // Trate casos não reconhecidos aqui
      break;
  }
};

versionPalette.show();
