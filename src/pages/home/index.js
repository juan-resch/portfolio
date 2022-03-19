import React from 'react';
import { Container, Content, Links, Link, ProfilePic, Skills, Skill, MyName, Button } from './styles.js'
import Header from '../../components/header'
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { BsArrowRightShort } from 'react-icons/bs'

import pp from '../../assets/pp.jpg'

export const Home = props => {
  return (
    <Container>
      <Header />
      <Content>
        <ProfilePic src={pp} />
        <span className='info'>NodeJs Fullstack Developer</span>
        <span className='info2'>Since 2018 in the technology area with a lot of love and willingness to innovate</span>
        <span className='skills'>skills</span>
        <Skills>
          <Skill>
            <FaReact size={40} color='#61dafb' className='icon' />
            <span>React.js</span>
          </Skill>
          <Skill>
            <FaReact size={40} color='#05a5d1' className='icon' />
            <span>React Native</span>
          </Skill>
          <Skill>
            <FaHtml5 size={40} color='#f16529' className='icon' />
            <span>HTML</span>
          </Skill>
          <Skill>
            <FaCss3 size={40} color='#0285a1' className='icon' />
            <span>CSS</span>
          </Skill>
          <Skill>
            <FaNodeJs size={40} color='#90c53f' className='icon' />
            <span>NodeJs</span>
          </Skill>
          <Skill>
            <SiPostgresql size={40} color='#336791' className='icon' />
            <span>Postgresql</span>
          </Skill>
          <Skill>
            <ImGit size={40} color='#f05033' className='icon' />
            <span>Git</span>
          </Skill>
        </Skills>
        <Button href='/projects'>
          View projects
          <BsArrowRightShort color='#444' size={30} />
        </Button>
      </Content>
    </Container>
  );
}

//em meados de 2018 foi quando comecei a criar meus primeiros codigos em java html css. Depois de terminar o tecnico iniciei em nodejs e me apaixonei completamente