import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { PaginationData } from '@/domain/posts/pagination';
import { countAllPosts } from '@/data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando Página...</div>;
  if (!posts.length) return <Error statusCode={404} />;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params?.param?.[0]);
  const category = ctx.params?.param?.[1] || '';

  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[categorie][name][$eqi]=${category}`
    : '';

  const asd = await getAllPosts(`filters[categorie][name][$eqi]=${category}`);
  const numberOfPosts =
    asd.length <= 0 ? Number(await countAllPosts()) : asd.length;
  // console.log(numberOfPosts);
  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);

  const pagination: PaginationData = {
    nextPage,
    postsPerPage,
    numberOfPosts,
    previousPage,
    category,
  };
  // ex de pegando um id: https://floating-tor-18461.herokuapp.com/api/posts?populate=deep&sort=id:desc&filters[id][$in][0]=5
  return {
    props: { posts, pagination, category },
    // revalidate: 5, // n precisamos att o blog de x em x tempo
  };
};
