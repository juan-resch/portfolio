import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 10%;
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

export const Content = styled.div`
  display: flex;
  flex: 8;
  flex-direction: column;

  width: auto;
  height: 100%;

  overflow-y: scroll;
  background-color: #111;

  align-items: center;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }

`;

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

export const ProfilePic = styled.img`
  width: 120px;
  height: 120px;

  border-radius: 50%;
`

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  max-width: 80vw;
`

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;

  span {
    color: #fff;
    font-weight: 100;
    font-size: 14px;

    margin: 5px 0px;
  }
`