import { Container, PreviousLink, NextLink } from './styled';
import { PaginationData } from '../../domain/posts/pagination';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
}: PaginationProps) => {
  // console.log(nextPage, numberOfPosts, category, previousPage, postsPerPage);
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage =
    Number(nextPage) * Number(postsPerPage) <
    Number(postsPerPage) + Number(numberOfPosts);
  const hasPreviousPage = Number(previousPage) >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href='/post/page/[...param]'>
            Previous
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href='/post/page/[...param]'>
            Next
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
