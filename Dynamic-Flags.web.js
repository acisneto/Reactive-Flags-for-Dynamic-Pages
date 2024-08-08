let alergia = $w("#dynamicDataset").getCurrentItem().TemAlergias;
let diabetico = $w("#dynamicDataset").getCurrentItem().EDiabetico;
let hipertenso = $w("#dynamicDataset").getCurrentItem().PressaoAlterada;
let responsavelLegal = $w("#dynamicDataset").getCurrentItem().ResponsavelNome;

if (alergia == "sim") {
    $w('#text175').html = '<h1 style="color: #FFC000; font-weight:bold;font-size: 12px; font-family:quicksand,sans-serif; letter-spacing:0.03em;line-height:normal; text-align:center;">• Paciente tem alergias</h1>';
    $w('#text175').onClick(() => {
        $w('#statebox8').changeState("infopacienteaberto");
        $w("#text140").scrollTo();
    })
}
if (diabetico == "Sim") {
    $w('#text173').html = '<h1 style="color: #FFC000; font-size: 12px; font-weight:bold; font-family:quicksand,sans-serif; letter-spacing:0.03em;line-height:normal; text-align:center;">• Paciente é diabético</h1>';
    $w('#text173').onClick(() => {
        $w('#statebox8').changeState("infopacienteaberto");
        $w("#text142").scrollTo();
    })
}
if (hipertenso == "Sim") {
    $w('#text174').html = '<h1 style="color: #FFC000; font-size: 12px; font-weight:bold; font-family:quicksand,sans-serif; letter-spacing:0.03em;line-height:normal; text-align:center;">• Paciente é hipertenso</h1>';
    $w('#text174').onClick(() => {
        $w('#statebox8').changeState("infopacienteaberto");
        $w("#text154").scrollTo();
    })
}
if (responsavelLegal !== "") {
    $w('#text176').html = '<h1 style="color: #FFC000; font-size: 12px;font-weight:bold;  font-family:quicksand,sans-serif; letter-spacing:0.03em;line-height:normal; text-align:center;">• Paciente possui Responsável Legal</h1>';
    $w('#text176').onClick(() => {
        $w('#statebox8').changeState("infopacienteaberto");
        $w('#boxInfosResponsavel').changeState("boxInfosResponsavelAberto");
        $w("#boxInfosResponsavel").scrollTo();
    })

}
