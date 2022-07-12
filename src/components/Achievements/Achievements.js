import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';
import { AchievementsData } from '../../constants/constants';

const Achievements = () => (
  <Section>
    <SectionTitle>Other Projects</SectionTitle>
    <Boxes>
      {AchievementsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Achievements;
