import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  align-items: center;
  justify-content: center;

  margin-top: 70px;
  padding-top: 15px;
  padding-bottom: 20px;

  > .info {
    color: #fff;
    font-weight: bold;
    margin: 10px 0 0 0;
    font-size: 2rem;

    @media (min-width: 1440px) {
      font-size: 2.8rem;
    }
  }

  > .info2 {
    color: #fff;
    margin: 5px 0px;
    text-align: center;
    max-width: 70vw;
    font-size: 1.8rem;

    @media (min-width: 1440px) {
      font-size: 2.8rem;
    }
  }

  > .skills {
    color: #fff;
    font-weight: 100;
    letter-spacing: 3px;
    font-style: italic;
    margin: 40px 0px;
    font-size: 2rem;

    @media (min-width: 1440px) {
      font-size: 2.8rem;
    }
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0px;
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

export const Button = styled.a`
  color: #333;
  font-weight: bold;
  width: 160px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  padding: 0 5px 0 20px;

  :hover {
    width: 150px;
    height: 45px;
    transform: translate(0, -3px);
  }

  transition: ease 500ms;
`