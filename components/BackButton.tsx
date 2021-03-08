import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledIcon = styled.img`
  position: relative;
  top: 7px;
  transition: transform 50ms ease-in-out;
`;

const StyledContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  &:hover ${StyledIcon} {
    transform: translateX(-8px);
  }
`;

export const BackButton: React.FC = () => {
  return (
    <StyledContainer>
      <Link href="/">
        <a style={{ letterSpacing: "0.03em" }}>
          <StyledIcon src="/icons/chevron-left.svg" />
          HOME
        </a>
      </Link>
    </StyledContainer>
  );
};

export default BackButton;
