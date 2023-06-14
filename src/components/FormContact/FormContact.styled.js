import styled from '@emotion/styled';

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
`;

export const BtnAddContact = styled.button`
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 8px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;

  border-radius: 10px;
  border: 1px solid rgba(161, 165, 161, 0.397);
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
    color: aliceblue;
    background-color: #4468df;
  }
`;
