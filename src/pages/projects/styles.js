import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  align-items: center;
  justify-content: center;

  margin-top: 70px;
  padding-top: 15px;
  padding-bottom: 20px;

  ::-webkit-scrollbar {
    display: none;
    width: 0px;
  }

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 910px;
    flex-wrap: wrap;
    align-content: center;
  
    @media (max-width: 1000px) {
      width: 610px;
    }
    @media (max-width: 690px) {
      width: 320px;
    }
  }

`;

export const Project = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
`