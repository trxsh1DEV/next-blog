import { Post } from '@/containers/Post';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';

import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  if (!post?.attributes?.title) {
    return <Error statusCode={404} />;
  }
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[limit]=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // if (!ctx.params) return;
  const posts = await getPost(ctx.params?.slug);
  const post = posts.length > 0 ? posts[0] : {};

  return {
    props: { post: post },
  };
};
