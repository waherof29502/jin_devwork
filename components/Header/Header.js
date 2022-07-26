import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import jinLogo from '../../assets/logo_07.png';
import Image from 'next/image';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <Image src={jinLogo} alt='jinLogo' height={60} width={200} />
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#about'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href='#about'>
          <NavLink>Info</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/waherof29502' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/chingping-wang-a4751b167/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.instagram.com/jinwangartist/?r=nametag'
        target='_blank'
      >
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
