import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 75px 10px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
  min-height: 100vh;
`

export const Subtitle = styled.h3`
  margin: 8px 5px;
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  &::before {
    content: '';
    margin-right: 10px;
    width: 3px;
    height: 15px;
    display: inline-block;
    background: #408bea;
  }
`
