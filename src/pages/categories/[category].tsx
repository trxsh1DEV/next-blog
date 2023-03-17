import { countAllPosts } from '@/data/posts/count-all-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // &filters[categorie][name][$eqi]=${ctx.params?.category}
  const numberOfPosts = await countAllPosts();
  const urlQuery = `sort=id:desc&pagination[start]=0&pagination[limit]=${numberOfPosts}`;
  const postsCategory = await getAllPosts(urlQuery);

  return {
    paths: postsCategory.map((post) => {
      return {
        params: {
          category: post.attributes.categorie.data.attributes.name,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Example: pegando nome das categorias
  // filters[categorie][name][$contains]=Desenvolvimento
  const urlQuery = `sort=id:desc&pagination[limit]=20&filters[categorie][name][$eqi]=${ctx.params?.category}`;
  const posts = await getAllPosts(urlQuery.toLowerCase());
  // console.log(urlQuery);
  return {
    props: { posts, category: ctx.params?.category },
  };
};
