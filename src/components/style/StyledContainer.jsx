import styled from "styled-components";

export const StyledContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTitle = styled.p`
  margin: 0;
  color: #ed84a8;
`;

export const StyledButton = styled.button`
  background-color: #abddd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
