import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

// const getPosts = async (): Promise<PostData[]> => {
//   const url = '';
//   const posts = await fetch(url);
//   const jsonPosts = await posts.json();
//   return jsonPosts.data;
// };

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=6',
  );
  // ex de pegando um id: https://floating-tor-18461.herokuapp.com/api/posts?populate=deep&sort=id:desc&filters[id][$in][0]=5
  return {
    props: { posts },
    // revalidate: 5, // n precisamos att o blog de x em x tempo
  };
};
