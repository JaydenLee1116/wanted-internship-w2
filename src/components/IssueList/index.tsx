import React from 'react';

import { useGetIssues } from '../../hooks/useGetIssues';

import { isMultipleOf } from '../../utils/isMultipleOf';
import { BANNER_STANDARD_NUMBER, WANTED_BANNER_IMAGE_URL, WANTED_URL } from '../../constants';
import { IssueItem } from './IssueItem';

import * as S from './IssueList.styled';

export const IssueList = () => {
  const { data, error, isError, isLoading } = useGetIssues();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <S.Container>
      {data?.map((issue, index) => (
        <>
          <S._Link to={`/detail/${issue.number}`}>
            <IssueItem
              key={`${issue.id}`}
              number={issue.number}
              title={issue.title}
              login={issue.user.login}
              created_at={issue.created_at}
              comments={issue.comments}
            />
          </S._Link>
          {isMultipleOf(BANNER_STANDARD_NUMBER, index + 1) && (
            <S.Banner key={`${issue.id}_banner`}>
              <S._Link to={WANTED_URL} target="_blank" rel="noopener noreferrer">
                <S.Image src={WANTED_BANNER_IMAGE_URL} alt="wanted-logo" />
              </S._Link>
            </S.Banner>
          )}
        </>
      ))}
    </S.Container>
  );
};
