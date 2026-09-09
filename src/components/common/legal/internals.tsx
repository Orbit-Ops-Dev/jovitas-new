import React from 'react';
import Section from '../section/Section';
import Container from '../container/internals';
import HeroSection from '../hero/internals';
import { LegalPageProps } from './types';
import {
  LegalWrapper,
  LastUpdated,
  Intro,
  LegalSectionBlock,
  SectionHeading,
  Paragraph,
  List,
  ListItem,
} from './styled';

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, intro, sections }) => {
  return (
    <>
      <HeroSection title={title} subtitle={`Last updated: ${lastUpdated}`} />

      <Section variant="light">
        <Container>
          <LegalWrapper>
            <LastUpdated>Last updated: {lastUpdated}</LastUpdated>
            <Intro>{intro}</Intro>

            {sections.map(section => (
              <LegalSectionBlock key={section.heading}>
                <SectionHeading>{section.heading}</SectionHeading>
                {section.blocks.map((block, index) =>
                  block.type === 'list' ? (
                    <List key={index}>
                      {block.items?.map(item => (
                        <ListItem key={item}>{item}</ListItem>
                      ))}
                    </List>
                  ) : (
                    <Paragraph key={index}>{block.text}</Paragraph>
                  )
                )}
              </LegalSectionBlock>
            ))}
          </LegalWrapper>
        </Container>
      </Section>
    </>
  );
};

export default LegalPage;
