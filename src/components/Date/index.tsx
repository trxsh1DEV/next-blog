import { formatDate } from '@/utils/format-date';
import { Container } from './styled';

export type DateProps = {
  // children: React.ReactNode;
  date: string;
};

export const Date = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
