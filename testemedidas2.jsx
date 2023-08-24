function createDimensionLine(startX, startY, endX, endY, measurement, document) {
    var layer = document.layers.add();
    var line = layer.pathItems.add();
    line.stroked = true;
    line.setEntirePath([
        [startX, startY],
        [endX, endY]
    ]);

    var arrowHead = layer.pathItems.add();
    arrowHead.stroked = true;
    arrowHead.setEntirePath([
        [endX - 5, endY - 5],
        [endX, endY],
        [endX - 5, endY + 10]
    ]);

    var text = layer.textFrames.add();
    text.position = [(startX + endX) / 2, startY - 10];
    text.contents = measurement + " mm"; 
}

function getTextDimensionsWithoutFrame(textItem) {
    var textRange = textItem.textRange;
    
    var tempText = textItem.duplicate();
    tempText.position = [0, 0]; // Move o texto para uma posição temporária
    
    var textWidth = tempText.width;
    var textHeight = textRange.ascent - textRange.descent;

    tempText.remove(); // Remove o texto temporário

    return { width: textWidth, height: textHeight };
}

// Exemplo de uso
var selectedText = app.activeDocument.selection[0];

if (selectedText && selectedText.typename === "TextFrame") {
    var textDimensions = getTextDimensionsWithoutFrame(selectedText);
    var doc = app.activeDocument;

    var startX = selectedText.left;
    var startY = selectedText.top - 10;
    var endX = startX + textDimensions.width; // Alterado para largura
    var endY = startY;

    createDimensionLine(startX, startY, endX, endY, textDimensions.height.toFixed(2), doc); // Exibindo altura
} else {
    alert("Selecione um quadro de texto válido.");
}
