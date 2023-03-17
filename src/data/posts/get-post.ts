import { POST_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}&filters[slug][$eq]=${slugString}`;
  // console.log(url);
  const jsonPosts = await fetchJson<PostData[]>(url);
  const newContent = await markdownToHtml(jsonPosts[0].attributes.content);
  // const { attributes } = jsonPosts[0];
  // attributes.content = newContent;
  jsonPosts[0].attributes.content = newContent;
  const finalContent = jsonPosts[0];
  return [finalContent];
  // return jsonPosts;
};
