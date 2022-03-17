import React from "react";
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiDiscordFill } from 'react-icons/ri'

export default () => {
  return (
    <Header>
      <MyName>Juan Resch</MyName>
      <Links>
        <Link href='https://github.com/juan-resch'>
          <AiFillGithub size={40} color='#fff' />
        </Link>
        <Link href='https://www.linkedin.com/in/juan-resch-a6050221a/'>
          <AiFillLinkedin size={40} color='#fff' />
        </Link>
        <Link href='https://discord.gg/hVzr5JzhSs'>
          <RiDiscordFill size={40} color='#fff' />
        </Link>
      </Links>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 70px;
  position: fixed;
  background-color: #000;

  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

`;

export const MyName = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
`

export const Links = styled.div`
  display: flex;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 0px 5px;
  padding: 0px;

  border-radius: 12px;
  background-color: rgba(0, 0, 0, 1);

  cursor: pointer;

  :hover {
    box-shadow: #161619 0px 0px 5px 5px ;
    background-color: #161619;
  }

  transition: box-shadow 0.2s, background-color 0.2s;
`