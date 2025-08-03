import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 24px;
  padding-top: 20px;
  margin-bottom: 0px;
  height: 44px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  background: #fff;
  padding-left: 24px;
  padding-right: 24px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover{
    color: #fff;
    background-color: #0b74e5;
    span{
      color: #fff;
    }
  }
    width: 100%;
    text-align: center;
`;

export const WrapperProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:15px;
  flex-wrap: wrap;
  margin-top: 40px;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
`