import PropTypes from 'prop-types';

import { SectionStyles, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <Title>{title}</Title>
      {children}
    </SectionStyles>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
