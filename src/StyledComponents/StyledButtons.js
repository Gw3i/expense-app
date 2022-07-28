import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 3px 15px;
  background-color: transparent;
  color: var(--primary-color);
  cursor: pointer;

  ${({ variant = "default" }) =>
    variant === "default" &&
    css`
      &:hover {
        background-color: var(--primary-color);
        color: black;
      }
    `}

  ${({ variant }) =>
    variant === "delete" &&
    css`
      color: red;

      &:hover {
        color: white;
        background-color: lightcoral;
        border: 2px solid lightcoral;
      }
    `}
`;

export default StyledButton;
