import styled from 'styled-components';

export const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--Very-dark-cyan);
  border-radius: 0px 8px 8px 0px;

  @media(max-width: 850px) {
    height: 76vh;
    margin-bottom: 30px;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const Car = styled.div`
  width: 77%;
  height: 70%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;

  p {
    font-size: 12px;
  }

  button {
    background: none;

    &:hover{
      background: var(--Very-light-gray);
      color: var(--Very-dark-cyan);
    }
  }
`;