import { Container } from './styled';

export type HeadingProps = {
  children: React.ReactNode; // qnd typamos um elemento assim é pq será um html q recebera algum conteúdo, nesse caso o texto do blog
};

export const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};
