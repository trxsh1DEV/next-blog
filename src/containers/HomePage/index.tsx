import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { PostData } from '@/domain/posts/post';
import { AllPostsLinks, Category, Container } from './styles';
import Head from 'next/head';
import { SITE_NAME } from '@/config/app-config';
import { PaginationData } from '@/domain/posts/pagination';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  const categoryCheck = category ? `${category} - ${SITE_NAME}` : SITE_NAME;
  const pageNumberCheck = pagination?.nextPage
    ? ` - Página ${pagination.nextPage - 1}`
    : '';
  // console.log(categoryCheck, pageNumberCheck);
  return (
    <>
      <Head>
        <title>{`${categoryCheck} ${pageNumberCheck}`}</title>
        <meta
          name='description'
          content='Blog de tecnologia, falamos sobre desenvolvimento e tudo que está acontecendo no mundo tech #vemsertech'
        />
      </Head>
      <Header />
      {category && <Category>Categoria: {category}</Category>}
      <MainContainer>
        <Container>
          {posts.map((post) => (
            // <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
            <PostCard
              cover={post.attributes.cover.data.attributes.formats.small.url}
              key={post.id}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
        <Pagination {...pagination} />
        {!pagination?.nextPage && (
          <Link href='/post/page/[...param]' as='/post/page/1'>
            <AllPostsLinks>Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
