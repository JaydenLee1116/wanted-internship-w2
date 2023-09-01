import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { axiosFetch } from '../api/axiosInstance';
import {
  useIsSearchModeStore,
  usePageNumberStore,
  useRepoNameStore,
  useRepoOwnerNameStore,
} from './useStore';
import { GITHUB_API_PATH } from '../api/apiConfig';
import { Issue } from '../types';

export const useGetIssues = () => {
  const [data, setData] = useState<Issue[] | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isSearchMode } = useIsSearchModeStore();
  const { pageNumber } = usePageNumberStore();
  const { repoName } = useRepoNameStore();
  const { repoOwnerName } = useRepoOwnerNameStore();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setIsError(false);
    const fetchData = async () => {
      try {
        const response = await axiosFetch.get(
          GITHUB_API_PATH.getIssues(repoOwnerName, repoName, pageNumber),
        );
        const { data } = response;
        setData(prev => {
          if (prev === null) {
            return data;
          }
          return [...prev, ...data];
        });
        setIsLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setIsError(true);
      }
    };
    if (!isSearchMode) {
      fetchData();
    }
  }, [isSearchMode, pageNumber]);

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
