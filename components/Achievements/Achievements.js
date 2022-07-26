import React from 'react';
import Link from 'next/link';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';
import { AchievementsData } from '../../constants/constants';

const Achievements = () => (
  <Section>
    <SectionTitle>Additional Skills</SectionTitle>
    <Boxes>
      {AchievementsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}+`}</BoxNum>
          <Link href={card.link}>
            <BoxText>{card.text}</BoxText>
          </Link>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Achievements;
