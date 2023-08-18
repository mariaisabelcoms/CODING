// Cria a lista de verificação com base na seleção do usuário e tipo de arte
var checklist;
if (userDropdown.selection == "Elaborador(a)") {
  if (arteDropdown.selection == "Medicamento") {
    if (embalagemDropdown.selection == "Primária") {
      checklist = [        // Lista de verificação para o Elaborador - Medicamento - Primária        
        ["Nome Comercial", false],
        ["Dosagem", false],
        ["Forma Farmacêutica", false],
        ["Validade", false],
        ["Lote", false],
        ["QR Code", false],
        ["Logotipo", false],
        ["Indicação de Uso", false],
        ["Código de Barras", false],
        ["Peso", false],
        ["Dimensões", false],
        ["Símbolo de Cuidado, Perigo e etc", false],
        ["Descrição do Cuidado, Perigo e etc", false],
        ["Alerta Não use em caso de", false],
        ["Informação do Fabricante", false],
        ["Endereço do Fabricante", false]
      ];
    } else if (embalagemSelection == "Secundária Genérico") {
      checklist = [
        // Lista de verificação para o Elaborador - Medicamento - Secundária Genérico
        ["Nome do Produto", false],
        ["Dosagem", false],
        ["Forma Farmacêutica", false],
        ["Validade", false],
        ["Lote", false],
        ["QR Code", false],
        ["Logotipo", false],
        ["Indicação de Uso", false],
        ["Código de Barras", false],
        ["Peso", false],
        ["Dimensões", false],
        ["Símbolo de Cuidado, Perigo e etc", false],
        ["Descrição do Cuidado, Perigo e etc", false],
        ["Alerta Não use em caso de", false],
        ["Informação do Fabricante", false],
        ["Endereço do Fabricante", false]
      ];
    } else if (embalagemSelection == "Secundária Similar") {
      checklist = [        // Lista de verificação para o Elaborador - Medicamento - Secundária Similar        ["Nome do Produto", false],
        ["Dosagem", false],
        ["Forma Farmacêutica", false],
        ["Validade", false],
        ["Lote", false],
        ["QR Code", false],
        ["Logotipo", false],
        ["Indicação de Uso", false],
        ["Código de Barras", false],
        ["Peso", false],
        ["Dimensões", false],
        ["Símbolo de Cuidado, Perigo e etc", false],
        ["Descrição do Cuidado, Perigo e etc", false],
        ["Alerta Não use em caso de", false],
        ["Informação do Fabricante", false],
        ["Endereço do Fabricante", false]
      ];
    } else if (embalagemSelection == "Caixa de Embarque") {
      checklist = [
        // Lista de verificação para o Elaborador - Medicamento - Caixa de Embarque
        ["Número do Lote", false],
        ["Data de Fabricação", false],
        ["Data de Validade", false],
        ["Nome do Produto", false],
        ["Peso Bruto", false]
      ]}}}

