
const imagens = [
  "ampharos.png",
  "arcanine.png",
  "baxcalibur.png",
  "bulbasaur.png",
  "charmander.png",
  "cyclizar.png",
  "dondozo.png",
  "eevee.png",
    "entei.png",
    "espathra.png",
    "flaaffy.png",
    "fuecoco.png",
    "growlithe.png",
    "hawlucha.png",
    "koraidon.png",
    "mimikyu.png",
    "miraidon.png",
    "murkrow.png",
    "ninetales.png",
    "pawmot.png",
    "pikachu.png",
    "ravavroom.png",
    "smoliv.png",
    "spidops.png",
    "sprigatito.png",
    "squirtle.png",
    "tinkaton.png",
    "quaquaval.png",
    "arcanine.png",
    "baxcalibur.png",
    "bulbasaur.png",
    "charmander.png",
    
  ];
  
  const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));
  
  export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
    (props, id) => ({ ...props, id })
  );
  
