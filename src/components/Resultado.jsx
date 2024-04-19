import classNames from 'classnames';
import { useMemo } from "react";
import { resultados } from "../constants/resultados";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";

export const Resultado = () => {
  const {
    cartas,
    idsDosParesEncontrados,
    quantidadeDeCartasViradas,
    iniciarJogo,
  } = useJogoDaMemoria();

  const aberto = useMemo(
    () => cartas.length > 0 && cartas.length === idsDosParesEncontrados.length * 2,
    [idsDosParesEncontrados.length]
  );

  const taxaDeAcertos = (cartas.length / quantidadeDeCartasViradas ?? 1) * 100;

  const resultado = useMemo(
    () => resultados.find(({ min }) => min < taxaDeAcertos),
    [aberto]
  );

  const cn = classNames("resultado", {
    "resultado--aberto": aberto,
  });

  return (
    <div className={cn}>
      <div className="resultado__box">
        <p>Seu desempenho no jogo foi:</p>
        <h1>{resultado?.titulo}</h1>
        <img
          src={resultado?.imagem}
          height={150}
          alt="Imagem de nível de memória"
        />
        <p>
          <strong>Taxa de acertos:</strong> {taxaDeAcertos.toFixed(0)}%
        </p>
        <button className="button" onClick={iniciarJogo}>
          Nova partida
        </button>
        <p>
          <small>
            Obrigado por jogar! Se quiser, tente de novo e melhore sua taxa de acertos!!
          </small>
        </p>
      </div>
    </div>
  );
};
