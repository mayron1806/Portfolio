import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${props => props.theme.primary};
`;
export const Content = styled.div`
  margin-left: 15%;
  height: 70px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${props => props.theme.secondary};
  font-size: 2rem;
  div.line{
    width: 1px;
    height: 100%;
    background-color: ${props => props.theme.secondary};
  }
  @media (max-width: 600px) {
    width: fit-content;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;