import { createContext, useState } from "react";
import { PONTOS, TEMPO_EM_MS } from "../constants/configuracoes";
import { buscarCartas } from "../services/buscarCartas";

export const LogicaJogoDaMemoriaContext = createContext();

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
  const [cartas, definirCartas] = useState([]);
  const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([]);
  const [idsDasCartasViradas, definirIdsDasCartasViradas] = useState([]);
  const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] = useState(0);
  const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0);
  const [nivelDeDificuldade, definirNivelDeDificuldade] = useState("facil");

  const iniciarJogo = async () => {
    let quantidadeDeCartas = 8; 
    if (nivelDeDificuldade === "normal") {
      quantidadeDeCartas = 10;
    } else if (nivelDeDificuldade === "dificil") {
      quantidadeDeCartas = 12;
    }
    
  
    
    if (quantidadeDeCartas % 2 !== 0) {
      quantidadeDeCartas--;
    }
  
    const cartas = await buscarCartas(quantidadeDeCartas);
    definirCartas(cartas);
    definirIdsDosParesEncontrados([]);
    definirIdsDasCartasViradas([]);
    definirQuantidadeDeCartasViradas(0);
    definirQuantidadeDePontos(0);
  };
  const novaRodada = () => {
    definirIdsDasCartasViradas([]);
  };

  const contarCartaVirada = () =>
    definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1);

  const marcarPonto = () =>
    definirQuantidadeDePontos((pontos) => pontos + PONTOS.PAR_ENCONTRADO);

  const registrarParEncontrado = (idDoPar) =>
    definirIdsDosParesEncontrados((ids) => [...ids, idDoPar]);

    const compararCartasPorIds = ([primeiroId, segundoId]) => {
      const idPar1 = cartas.find(({ id }) => id === primeiroId)?.idDoPar;
      const idPar2 = cartas.find(({ id }) => id === segundoId)?.idDoPar;
      return idPar1 === idPar2;
    };

    const virarCarta = ({ id, idDoPar }) => {
      const novasIdsDasCartasViradas = [...idsDasCartasViradas, id];
      definirIdsDasCartasViradas(novasIdsDasCartasViradas);
    
      contarCartaVirada();
    
      if (novasIdsDasCartasViradas.length === 2) {
        const [primeiroId, segundoId] = novasIdsDasCartasViradas;
    
        const cartasIguais = compararCartasPorIds([primeiroId, segundoId]);
        if (cartasIguais) {
          marcarPonto();
          registrarParEncontrado(idDoPar);
        }
    
        setTimeout(() => {
          novaRodada();
        }, cartasIguais ? 0 : TEMPO_EM_MS.VIRAR_CARTA);
      }
    };

  const valor = {
    cartas,
    idsDosParesEncontrados,
    idsDasCartasViradas,
    quantidadeDeCartasViradas,
    quantidadeDePontos,
    nivelDeDificuldade,
    definirNivelDeDificuldade,
    iniciarJogo,
    virarCarta,
  };

  return (
    <LogicaJogoDaMemoriaContext.Provider value={valor}>
      {children}
    </LogicaJogoDaMemoriaContext.Provider>
  );
};