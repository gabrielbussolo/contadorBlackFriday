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

function quantoFaltaParaBlack(diferencaEntredatas){
    const horasDiferenca = new Date(diferencaEntredatas)

    const dias = Math.floor(diferencaEntredatas / (24*3600*1000))
    const horas = horasDiferenca.getUTCHours()
    const minutos = horasDiferenca.getMinutes()
    const segundos = horasDiferenca.getSeconds()
    return {dias, horas, minutos, segundos}
}

function contagemRegressivaBlackFriday(){
    const hoje = new Date()
    let dataDiferenca = Math.abs(diaBlackFriday().getTime() - hoje.getTime())
    
    if(hoje.getTime() < diaBlackFriday().getTime()){
        document.getElementById("black").innerHTML = `
            ${quantoFaltaParaBlack(dataDiferenca).dias} dias, 
            ${quantoFaltaParaBlack(dataDiferenca).horas} horas, 
            ${quantoFaltaParaBlack(dataDiferenca).minutos} minutos, 
            ${quantoFaltaParaBlack(dataDiferenca).segundos} segundos`
    } else {
        document.getElementById('black').innerHTML = `HOJE É BLACK`
    }
    
    setTimeout(contagemRegressivaBlackFriday, 500)
}
