import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Box } from 'grommet';

const StyledLink = styled(Link) `
  color: white;
  margin-right: 1ch;

  &:hover {
    color: lightgrey;
  }
  
  &.active {
    font-weight: bold;
  }
`;

export default function Nav(props) {
  const { router } = props;

  return (
    <Box tag="nav" align="center" direction="row">
      <StyledLink href="/"><a>Home</a></StyledLink>
      <StyledLink href="/about"><a>About</a></StyledLink>
    </Box>
  );
}
