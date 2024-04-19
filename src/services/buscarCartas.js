import { paresDeCartas } from "../constants/cartas";

const buscarCartas = async (quantidade) => {
  const cartasSelecionadas = [];
  const indicesUtilizados = new Set();

  while (cartasSelecionadas.length < quantidade / 2) {
    const indiceAleatorio = Math.floor(Math.random() * paresDeCartas.length);

    if (!indicesUtilizados.has(indiceAleatorio)) {
      cartasSelecionadas.push(paresDeCartas[indiceAleatorio]);
      indicesUtilizados.add(indiceAleatorio);
    }
  }

  const cartasComPares = [...cartasSelecionadas, ...cartasSelecionadas].map(
    (carta, index) => ({ ...carta, id: index })
  );

  return embaralharLista(cartasComPares);
};

const embaralharLista = (lista = []) => {
  for (let indice = lista.length - 1; indice > 0; indice--) {
    const item = lista[indice];
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
    lista[indice] = lista[indiceAleatorio];
    lista[indiceAleatorio] = item;
  }
  return lista;
};

export { buscarCartas };