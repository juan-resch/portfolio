import React from 'react';
import { Container, Header, Content, Links, Link, ProfilePic, Skills, Skill, MyName } from './styles.js'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiDiscordFill } from 'react-icons/ri'
import { FaReact, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr'

import './styles.css';
import pp from '../../assets/pp.jpg'

export const Home = props => {
  return (
    <Container>
      <Header>
        <MyName>Juan Resch</MyName>
        <Links>
          <Link href='https://github.com/juan-resch'>
            <AiFillGithub size={40} color='#fff'/>
          </Link>
          <Link href='https://www.linkedin.com/in/juan-resch-a6050221a/'>
            <AiFillLinkedin size={40} color='#fff'/>
          </Link>
          <Link href='https://discord.gg/hVzr5JzhSs'>
            <RiDiscordFill size={40} color='#fff'/>
          </Link>
        </Links>
      </Header>
      <Content>
        <ProfilePic src={pp}/>
        <span className='info'>JavaScript Web and Mobile Dev</span>
        <span className='info2'>Since 2018 in the technology area with a lot of love and willingness to innovate</span>
        
        <span className='skills'>skills</span>

        <Skills>
          <Skill>
            <FaReact size={40} color='#61dafb' className='icon'/>
            <span>React.js</span>
          </Skill>
          <Skill>
            <FaReact size={40} color='#05a5d1' className='icon'/>
            <span>React Native</span>
          </Skill>
          <Skill>
            <FaHtml5 size={40} color='#f16529' className='icon'/>
            <span>HTML</span>
          </Skill>
          <Skill>
            <FaCss3 size={40} color='#0285a1' className='icon'/>
            <span>CSS</span>
          </Skill>
          <Skill>
            <FaJava size={40} color='#ed2025' className='icon'/>
            <span>Java</span>
          </Skill>
          <Skill>
            <GrMysql size={40} color='#f29111' className='icon'/>
            <span>MySql</span>
          </Skill>
        </Skills>
      </Content>
    </Container>
  );
}
