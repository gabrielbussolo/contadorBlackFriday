function diaBlackFriday(){
    const anoAtual =  new Date()
    let diaBlackFriday = new Date(anoAtual.getFullYear(),10)

    const sextasDeNovembro = new Array()
    for(i=1; i <= 30; i++){
        const procuraDia = diaBlackFriday
        procuraDia.setDate(i);

        if(procuraDia.getDay() == 5){
            sextasDeNovembro.push(procuraDia.getDate())
        }
    }
    const diaDaBlack = sextasDeNovembro[sextasDeNovembro.length - 1]
    diaBlackFriday = new Date(anoAtual.getFullYear(), 10, diaDaBlack,0,0,0,0)

    return diaBlackFriday
}
