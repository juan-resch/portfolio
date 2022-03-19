import React from 'react';
import Header from '../../components/header';
import { Container, Content, Project } from './styles';

export const Projects = props => {
  console.log(props)
  return (
    <Container>
      <Header />
      <Content>
        <ul>
          <Project>
            <h1>U-Pick</h1>
          </Project>
          <Project>
            <h1>Allsmart</h1>
          </Project>
          <Project>

          </Project>
          <Project>

          </Project>
        </ul>
      </Content>
    </Container>
  );
}

//em meados de 2018 foi quando comecei a criar meus primeiros codigos em java html css. Depois de terminar o tecnico iniciei em nodejs e me apaixonei completamente