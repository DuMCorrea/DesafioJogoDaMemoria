import { useEffect } from "react";
import { LogicaJogoDaMemoriaProvider } from "../contexts/LogicaJogoDaMemoria";
import { useJogoDaMemoria } from "../hooks/useJogoDaMemoria";
import { Carta } from "./Carta";
import { Placar } from "./Placar";
import { Resultado } from "./Resultado";

export const JogoDaMemoria = () => {
  return (
    <LogicaJogoDaMemoriaProvider>
      <JogoDaMemoriaConteudo />
    </LogicaJogoDaMemoriaProvider>
  );
};

const JogoDaMemoriaConteudo = () => {
  const {
    cartas,
    iniciarJogo,
    nivelDeDificuldade,
    definirNivelDeDificuldade,
  } = useJogoDaMemoria();

  useEffect(() => {
    iniciarJogo();
  }, [nivelDeDificuldade]);

  const handleChangeNivel = (nivel) => {
    definirNivelDeDificuldade(nivel);
  };

  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memória</h1>
        <div className="niveis-dificuldade">
          <button
            className={nivelDeDificuldade === "facil" ? "selecionado" : ""}
            onClick={() => handleChangeNivel("facil")}
          >
            Fácil
          </button>
          <button
            className={nivelDeDificuldade === "normal" ? "selecionado" : ""}
            onClick={() => handleChangeNivel("normal")}
          >
            Normal
          </button>
          <button
            className={nivelDeDificuldade === "dificil" ? "selecionado" : ""}
            onClick={() => handleChangeNivel("dificil")}
          >
            Difícil
          </button>
        </div>
        <Placar />
        {cartas?.length === 0 ? (
          <p>Carregando cartas...</p>
        ) : (
          <div className="cartas">
            {cartas.map((props) => (
              <Carta key={props.id} {...props} />
            ))}
          </div>
        )}
      </div>
      <Resultado />
    </div>
  );
};