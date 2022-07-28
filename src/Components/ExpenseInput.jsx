import StyledForm from "../StyledComponents/StyledForm";
import StyledLabel from "../StyledComponents/StyledLabel";
import StyledInput from "../StyledComponents/StyledInput";
import StyledButton from "../StyledComponents/StyledButtons";

export default function ExpenseInput() {
  return (
    <StyledForm>
      <StyledLabel htmlFor="expenses">Expense</StyledLabel>
      <StyledInput type="number" name="expenses" id="expenses" />
      <StyledButton>add expense</StyledButton>
    </StyledForm>
  );
}
