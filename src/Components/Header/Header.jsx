import React from "react";
import { Container } from "../../App.style";
import { StyledHeader, StyledListItem, StyledList, StyledListLink, StyledNav, StyledImg } from "./Header.style";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
            <StyledList>
                <StyledListItem>
                    <StyledListLink to={"/"}>
                      <StyledImg />
                    </StyledListLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledListLink to={"/top-rated"}>Top Rated</StyledListLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledListLink to={"/upcoming"}>Upcoming</StyledListLink>
                </StyledListItem>
            </StyledList>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};
