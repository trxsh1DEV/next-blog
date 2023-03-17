import { SITE_NAME } from '@/config/app-config';
import { Container } from './styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <Container>
      <Link href='/' id='header'>
        {SITE_NAME}
      </Link>
    </Container>
  );
};
