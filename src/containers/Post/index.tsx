import { Comments } from '@/components/Comments';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { SITE_NAME } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { removeHtml } from '@/utils/remove-html';
import Head from 'next/head';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const title = post.attributes.title + ' - ' + SITE_NAME;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={removeHtml(post.attributes.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          alt={post.attributes.title}
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.categorie.data.attributes.name}
          date={post.attributes.author.data.attributes.createdAt}
        />
        <PostContainer content={post.attributes.content} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>
    </>
  );
};
