import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { axiosFetch } from '../api/axiosInstance';

import { GITHUB_API_PATH } from '../api/apiConfig';
import { Issue } from '../types';
import { useRepoNameStore, useRepoOwnerNameStore } from './useStore';

interface useGetIssueProps {
  issueNumber: number;
}

export const useGetIssue = ({ issueNumber }: useGetIssueProps) => {
  const [data, setData] = useState<Issue | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { repoName } = useRepoNameStore();
  const { repoOwnerName } = useRepoOwnerNameStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setIsError(false);
      try {
        const response = await axiosFetch.get(
          GITHUB_API_PATH.getIssue(repoOwnerName, repoName, issueNumber),
        );
        const { data } = response;
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
