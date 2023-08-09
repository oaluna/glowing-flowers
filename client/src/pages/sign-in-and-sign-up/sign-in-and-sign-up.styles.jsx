import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media and (max-width: 900px) {
    flex-direction: column;
    align-items:center;
  }
`;
