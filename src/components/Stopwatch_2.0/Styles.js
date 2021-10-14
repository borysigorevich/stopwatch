import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TimeBox = styled.div`
  margin-bottom: 8px;
  
  i {
    font-size: 18px;
    font-weight: 500;
  }
  
  .hh, .mm {
    margin-right: 5px;
  }
`

export const Button = styled.button`
  min-width: 125px;
  border: none;
  background-color: teal;
  border-radius: 5px;
  padding: 5px 0;
  cursor: pointer;
  color: #fff;
  margin-bottom: 8px;

  &:active {
    transform: scale(.97);
  }
`