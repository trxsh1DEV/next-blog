import { Container } from './styled';

export type PostContainerProps = {
  // children: React.ReactNode;
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />;
};
