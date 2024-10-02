function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Bem vindo ao React Quiz</h2>
      <h3>{numQuestions} questões para testar sua maestria em react</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Começar
      </button>
    </div>
  );
}

export default StartScreen;
