
var myPalette = new Window("palette", "Checklist", undefined);
myPalette.orientation = "column";
myPalette.alignChildren = ["fill", "top"];

// Adicione o cabeçalho
var headerGroup = myPalette.add("group");
headerGroup.orientation = "row";
headerGroup.add("statictext", undefined, "Elaborador:");
var textField = headerGroup.add("edittext", undefined, "", {maxLength: 10});
textField.characters = 10;
headerGroup.add("statictext", undefined, "Revisor:");
var textField = headerGroup.add("edittext", undefined, "", {maxLength: 10});
textField.characters = 10;


// Adicione as checkboxes
var checkGroup = myPalette.add("group");
checkGroup.orientation = "column";
checkGroup.alignChildren = ["left", "top"];
checkGroup.add("statictext", undefined, "Informações obrigatórias");

var rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Denominação genérica de cada princípio ativo.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Concentração de cada princípio ativo.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Logo da empresa detentora do registro.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Número de telefone do SAC.");
rowGroup.add("checkbox", undefined, ""); 

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Via de administração.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Fontes menores com no mínimo 1mm de tamanho.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Quadro de Informações preenchido corretamente.");
rowGroup.add("checkbox", undefined, "");

rowGroup = checkGroup.add("group");
rowGroup.orientation = "row";
rowGroup.alignChildren = ["left", "center"];
rowGroup.add("checkbox", undefined, "Planta técnica/Medidas.");
rowGroup.add("checkbox", undefined, "");

// Adicione uma caixa de texto para observações
var notesGroup = myPalette.add("group");
notesGroup.orientation = "column";
notesGroup.alignChildren = ["left", "top"];
notesGroup.add("statictext", undefined, "Observações:");

var notesField = notesGroup.add("edittext", undefined, "", {multiline: true, scrolling: true, maxLength: 1000});
notesField.characters = 32;

// Adicione um botão "Salvar"
var saveButton = myPalette.add("button", undefined, "Salvar");
/**
 * Handles the click event of the save button.
 *
 * @param {Event} event - The click event object.
 * @returns {undefined} This function does not return a value.
 */

/**
 * Handles the click event of the save button.
 *
 * @param {Event} event - The click event object.
 * @returns {undefined} This function does not return a value.
 */
function exportPDF(document, filePath) {
  // Export the active document to PDF
  var saveOptions = new ExportOptionsPDF();
  saveOptions.acrobatLayers = true;
  saveOptions.colorBars = false;
  saveOptions.colorCompression = CompressionQuality.AUTOMATICJPEGHIGH;
  saveOptions.compressArt = true;
  saveOptions.embedICCProfile = true;
  saveOptions.enablePlainText = true;
  saveOptions.generateThumbnails = true;
  saveOptions.grayscaleCompression = CompressionQuality.AUTOMATICJPEGHIGH;
  saveOptions.monochromeCompression = MonochromeCompression.MONOZIP;
  saveOptions.optimization = true;
  saveOptions.pageInformation = false;
  saveOptions.preserveEditability = false;
  saveOptions.viewAfterSaving = false;

  document.exportFile(new File(filePath), ExportType.PDF_TYPE, saveOptions);
}

function saveContentToPDF(content, filePath) {
  // Create a new document
  var doc = app.documents.add();

  // Set the document preferences
  doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.MILLIMETERS;
  doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.MILLIMETERS;

  // Create a new text frame
  var textFrame = doc.textFrames.add();
  textFrame.contents = content;

  // Save the document as a PDF file
  var saveOptions = new PDFSaveOptions();
  saveOptions.compatibility = PDFCompatibility.ACROBAT5;
  saveOptions.generateThumbnails = true;
  saveOptions.preserveEditability = false;
  saveOptions.viewAfterSaving = false;

  doc.saveAs(new File(filePath), saveOptions);

  // Close the document
  doc.close(SaveOptions.DONOTSAVECHANGES);
}




