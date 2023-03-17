export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const dateConvert = dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
  return dateConvert;
};
