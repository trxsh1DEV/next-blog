import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;
  &:hover {
    /* opacity: 1; */
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  img {
    width: 100%;
    display: block;
    border-radius: 8px;
    /* cursor: pointer; */
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
