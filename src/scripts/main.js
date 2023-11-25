AOS.init();

const dataEvento = new Date("May 29, 2024 08:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTime = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;

    const diasToEvento = Math.floor(distanciaEvento / diasMs);
    const horasToEvento = Math.floor((distanciaEvento % diasMs) / horasMs);
    const minutosToEvento = Math.floor((distanciaEvento % horasMs) / minutosMs);
    const segundosToEvento = Math.floor((distanciaEvento % minutosMs) / 1000);

    document.getElementById('contador').innerHTML = `começa em <br> ${diasToEvento}d ${horasToEvento}h ${minutosToEvento}m ${segundosToEvento}s`;

    if(distanciaEvento < 0) {
        clearInterval(contaTime);
        document.getElementById('contador').innerHTML = 'Evento espirado'
    }
}, 1000);