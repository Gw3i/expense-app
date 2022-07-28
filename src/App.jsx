import GlobalStyle from "./GlobalStyle";
import StyledTitel from "./StyledComponents/StyledTitel";
import StyledMain from "./StyledComponents/StyledMain";
import StyledForm from "./Components/ExpenseInput";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <StyledTitel>Expense App</StyledTitel>
        <StyledForm />
      </StyledMain>
    </>
  );
}

export default App;
