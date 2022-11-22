
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>Você irá precisar de:</p>`
    resultado.innerHTML += `<p>
                                <img class="icons" src="data:image/png;base64,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">
                                ${qtdTotalCarne/1000}kg de Carne
                            </p>`;
    resultado.innerHTML += `<p>
                                <img class="icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD50lEQVR4nO2bSWgVQRCGv7hEQaIYiaAgKiIoiBsYI4JexB0ECd69ictJBRFERRF3Q5KbXnMVQURQ8eSKUcEV9GbU4C5JNC5JnoeqYV7imy3TPf0S5odieNM1VX/X1Ouu6emBHDmSYDZwFngCdAJdwHOgEZiX0vY8oBl4CfxQ20/V39yUtlNjNHAC6AEKAdILNAFjAmzUAPuAVuAr0sEnwBG9rjfEdg/QoDwyxyjgohLpRgIxR9uqgWXAeeC36lzn/yBsAD4R3EHPdhOwFBinUqfnPNvXgErzXQzHYXXeDswP0VsGfFTdhqLzq/Ez5yqwCgncJGAdcBm4E2F7EfBObTQPphODxXTgj0ptDP0VQB9C9AeS4t/099GUXBYjmdADLEhpKzaOIeQvJLjmLP+n9z2gwgCfZrXXaMBWLLSqw5UJr5sCzALqkSDONMSnTvm8MGQvEl76TsjKYQSq8AfMTDh5KVxO+IJweo0/G1lDOQagFhlcC8B9287KMQAA4/EzYXIaQyOM0MkeM5Bi6y/w06Yj0xmwEGhBihqvXkgjpwxyK4k4AagBJsawtQe5YwWk818HKR6nA2TwbBAVgJPa3gXsCNCpwC+oeoD9SClsi5NRRDnrxr+jBeAKUutXIfP0GuCmtv1GCiPbnIwiypnXvhm/aColn4GNGXEyijBnFQPaJwEHkfK5Q+UxcAgZJ7LgZBzf1dm0Em3Tte17VmQURgMQVQc80OPWEm3b9HjLFJmECPq7dQF3gZ0YWDzZgD9670aqrmnIqN6nsiStk4RIUic8AqamdXguwHgvsCut8UEg6i9QhQzKr1TvIQYyYRP9U+wGMt25QNwxoBp4q7pBNYoVx7YRlvLvkRWpsaq7Rc/fNel4INYDbUXtbchipw2dYh5hckZ1J+jvjnhdDEdQAIpJe/LGkk4YD5AldS8T4ugnQpChgedL6ZnSCTuf1A4wdNcDjCEPgGsCrpEHwDUB18gD4JqAa+QBcE3ANfIAuCbgGnkAXBNwjeEWgDo9tse9YJQlIlkg7JG4RY/eLpJOUw7LaT0gaEnsNP4+xXo9f6dUh5Ki3AIQhWpkG00B2B5DPxJDJQDjkTvvdb4VQ6/Ryy0AcaQV2bJnBEMlAJ3AbSTtI+/8UJ4FTOw8HXZ1QGLkAXBNwDXyABiw8VaPxaN2myUdpwialtYh7/C89jfAWks6YTysoBJ501r8vY9reDy+IDtFrU7l5+lfZBh5z54Sl5Ado953SHttORoJ/FInJjY4msZyhNuzNEbCBsE+ZG8vwIc0TizBq/GrbDppINnDhwuxumO8EgmC93FCOUk7cBxHX5PmGC74B8jQS6s2JTS7AAAAAElFTkSuQmCC">
                                ${qtdTotalCerveja/1000}l de Cerveja
                            </p>`;
    resultado.innerHTML += `<p>
                                <img class="icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB60lEQVRoge2au04CQRSGP7EQG+0UEC2Mt8hD+Dg+mjHESgvtvL2DJHaENYohUTo1QYudEUMAmTlnZoHsl2x2i93/zM85Z2ZYgJzpYiGDmMtAGdgGKkOu14CtDMblxDXwPcGx4iocMyP7QAP4Ah6BFpAAzSHX7xHH5cwx6ad9EkK8EEJ0BEfmfBMxZhAS0owcZD0QCXukJl4I1JexSsuWlZ211IltZOb7o0maiVrWA5GwQ2qiTcB1K0Zp2bK6JVB/+FIF6kCXybYbLkcXOAN2Y5joBDAweHSAjZBG6ibQeaBAG8CFiXEaQP8XW04hP61NE+PN5SHXWSR2s048PtdZ697xfgl3MYI0SLNzqKhZM5oPPg/7riMtc656Pj8Mq9Uae9cIfI0k5qzZ9FYrGXvXCPKMmPPMZ2TujIQoLS8jvpTob821eDWa64qa/1IAPoAeUFTQKxqtTzyrxLe0esAz6Rai7Knxl4rRejLazki+WGn2ibg/JEbsfK8xc1kNrzUEpicjoqkXdIxoZmTmS0u0PYE8I4DuxlGcEQlL9BexRYFOwWj0jGYmtEm3FSWBRpn+m3pvpG8aNfpE3B8gN6LRJyr9kWdkIPjcGNEoranoEY2MTEWPZJ4RKavo/ZTg/LcNba6Qm7iMPuqcwPwA6xXFqLrwODgAAAAASUVORK5CYII=">
                                ${qtdTotalBebidas/1000}l de Bebidas
                            </p>`;

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } 
    else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } 
    else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } 
    else{
        return 1000;
    }
}