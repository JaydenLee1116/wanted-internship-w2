import { useLocation } from 'react-router-dom';

export const useIssueNumberLocation = () => {
  const { pathname } = useLocation();
  const issueNumber = Number(pathname.split('/').pop());
  if (isNaN(issueNumber)) throw new Error('Issue number is not a number');

  return { issueNumber };
};
