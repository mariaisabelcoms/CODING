// Função para criar uma cota de medida em milímetros
function createDimension(startX, startY, endX, endY, textX, textY, measurement) {
    var layer = activeDocument.activeLayer;
  
    var line = layer.pathItems.add();
    line.setEntirePath([
      [startX, startY],
      [endX, endY]
    ]);
  
    var text = layer.textFrames.add();
    text.position = [textX, textY];
    text.contents = measurement + " mm";
  }
  
  // Função para percorrer os objetos selecionados e criar cotas de medida
  function createDimensionsForSelected() {
    var selection = app.activeDocument.selection;
  
    for (var i = 0; i < selection.length; i++) {
      var obj = selection[i];
      var bounds = obj.geometricBounds;
  
      var startX = bounds[0];
      var startY = bounds[1];
      var endX = bounds[2];
      var endY = bounds[1];
  
      var textX = (startX + endX) / 2;
      var textY = startY - 10;
  
      var width = Math.abs(endX - startX);
      var height = Math.abs(endY - startY);
  
      createDimension(startX, startY, endX, endY, textX, textY, width.toFixed(2));
      createDimension(startX, startY, startX, endY, textX - 10, (startY + endY) / 2, height.toFixed(2));
    }
  }
  
  // Verifica se há um documento aberto
  if (app.documents.length > 0) {
    createDimensionsForSelected();
  } else {
    alert("Nenhum documento aberto.");
  }
  