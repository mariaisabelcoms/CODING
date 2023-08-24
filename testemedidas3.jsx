function getCapHeight(textItem) {
    var firstCharacter = textItem.characters[0];
    var baseline = firstCharacter.baseline;

    for (var i = 1; i < textItem.characters.length; i++) {
        var character = textItem.characters[i];
        if (character.baseline !== baseline) {
            var capHeight = character.baseline - baseline;
            return capHeight;
        }
    }

    return 0; // Não foi encontrada uma capitular
}

// Exemplo de uso
var selectedText = app.activeDocument.selection[0];

if (selectedText && selectedText.typename === "TextFrame") {
    var capHeight = getCapHeight(selectedText);
    
    if (capHeight > 0) {
        alert("Altura da capitular: " + capHeight.toFixed(2) + " pt");
    } else {
        alert("Nenhuma capitular encontrada.");
    }
} else {
    alert("Selecione um quadro de texto válido.");
}
