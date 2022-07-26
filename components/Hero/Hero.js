import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Bg } from './HeroStyles';
const Hero = () => (
  <>
    <Section>
      <LeftSection>
        <SectionTitle main center>
          Jin Wang Dev's <br />
          Portfolio
        </SectionTitle>
        <SectionText>
          I've worked in wide range of web development. From Design To Back-end
        </SectionText>
        {/* <Button onClick={() => (window.location = 'http://google.com')}>
          Learn More
        </Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
