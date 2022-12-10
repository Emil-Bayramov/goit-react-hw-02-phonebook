import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  width: 300px;
  height: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    cursor 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    outline: none;
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  min-width: 70px;
  align-self: flex-start;
  padding: 5px 15px;
  letter-spacing: 1px;
  cursor: pointer;
  border-color: transparent;
  border: 1px solid gray;
  border-radius: 7px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  }
`;
