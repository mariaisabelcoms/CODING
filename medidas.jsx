// Verifica se há um documento aberto
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Verifica se há objetos selecionados
    if (doc.selection.length > 0) {
        for (var i = 0; i < doc.selection.length; i++) {
            var selectedObject = doc.selection[i];

            // Verifica se o objeto é uma forma, um texto, um grupo ou um símbolo
            if (
                selectedObject.typename == "PathItem" ||
                selectedObject.typename == "TextFrame" ||
                selectedObject.typename == "GroupItem" ||
                selectedObject.typename == "SymbolItem"
            ) {
                var objBounds = selectedObject.geometricBounds;
                var widthInPoints = objBounds[3] - objBounds[1]; // Largura do objeto em pontos

                // Conversão para milímetros (1 ponto = 0.352777778 milímetros)
                var widthInMillimeters = widthInPoints * 0.352777778;

                // Posição do eixo X do objeto
                var objXPosition = objBounds[0] + widthInPoints / 2;
                // Posição do eixo Y do objeto
                var objYPosition = objBounds[1];

                // Distância das cotas em pontos (1 ponto = 0.352777778 milímetros)
                var cotaDistance = 2 / 0.352777778; // 2mm em pontos

                var widthText = widthInMillimeters.toFixed(2);
                if (widthInMillimeters >= 0) {
                    widthText = "+" + widthText;
                } else {
                    widthText = widthText.slice(1); // Remove o sinal de negativo "-"
                }

                // Cria um grupo para as cotas
                var group = doc.groupItems.add();

                // Adicionar linha vertical para indicar a largura do objeto
                var line = group.pathItems.add();
                line.stroked = true;
                line.setEntirePath([
                    [objXPosition, objYPosition],
                    [objXPosition, objYPosition - widthInPoints],
                ]);
                line.strokeWidth = 1; // Espessura de 1pt

                // Adicionar linhas de cota
                var cotaTop = group.pathItems.add();
                cotaTop.stroked = true;
                cotaTop.strokeWidth = 1; // Espessura de 1pt
                cotaTop.setEntirePath([
                    [objXPosition - cotaDistance, objYPosition],
                    [objXPosition + cotaDistance, objYPosition],
                ]);

                var cotaBottom = group.pathItems.add();
                cotaBottom.stroked = true;
                cotaBottom.strokeWidth = 1; // Espessura de 1pt
                cotaBottom.setEntirePath([
                    [objXPosition - cotaDistance, objYPosition - widthInPoints],
                    [objXPosition + cotaDistance, objYPosition - widthInPoints],
                ]);

                // Adicionar a medida do objeto ao lado do grupo de cotas
                var text = group.textFrames.add();
                text.contents = widthText + " mm";
                text.textRange.characterAttributes.size = 6; // Tamanho do texto = 5pt
                text.left = objXPosition + cotaDistance; // Alinha à direita do grupo de cotas
                text.top = (objYPosition - widthInPoints + objYPosition) / 2.02; // Centralizado verticalmente

                // Rotaciona o texto em 90 graus
                text.rotate(0);

                // Posição do grupo de cotas (horizontalmente alinhado com o objeto)
                group.left = objBounds[2] + cotaDistance;
                group.top = objYPosition;
            } else {
                // Não faça nada se o objeto não for uma forma, um texto, um grupo ou um símbolo
            }
        }
    } else {
        // Não faça nada se nenhum objeto estiver selecionado
    }
} else {
    alert("Nenhum documento aberto.");
}
