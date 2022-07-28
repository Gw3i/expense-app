import GlobalStyle from "./GlobalStyle";
import StyledTitel from "./StyledComponents/StyledTitel";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <StyledTitel>Expense App</StyledTitel>
      </div>
    </>
  );
}

export default App;
