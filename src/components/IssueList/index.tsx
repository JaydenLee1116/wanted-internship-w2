import React from 'react';

import { useGetIssues } from '../../hooks/useGetIssues';
import { usePageNumberStore } from '../../hooks/useStore';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import { isMultipleOf } from '../../utils/isMultipleOf';
import { throttle } from '../../utils/throttle';
import { IssueItem } from './IssueItem';
import {
  BANNER_STANDARD_NUMBER,
  DATA_NUMBER_PER_SCROLL,
  WANTED_BANNER_IMAGE_URL,
  WANTED_URL,
} from '../../constants';
import spinner from '../../assets/spinner.gif';

import * as S from './IssueList.styled';

export const IssueList = () => {
  const { data = [], error, isError, isLoading, isScrollLoading } = useGetIssues();

  if (isError) {
    return <div>{error?.message}</div>;
  }

  const { increasePageNumber } = usePageNumberStore();
  const target = useIntersectionObserver({
    callback: throttle({ callback: increasePageNumber, delay: 1000 }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      {data?.map((issue, index) => (
        <>
          <IssueItem
            key={`${issue.id}`}
            number={issue.number}
            title={issue.title}
            login={issue.user.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
          {isMultipleOf(BANNER_STANDARD_NUMBER, index + 1) && (
            <S.Banner key={`${issue.id}_banner`}>
              <S._Link to={WANTED_URL} target="_blank" rel="noopener noreferrer">
                <S.Image src={WANTED_BANNER_IMAGE_URL} alt="wanted-logo" />
              </S._Link>
            </S.Banner>
          )}
          {isMultipleOf(DATA_NUMBER_PER_SCROLL, index + 1) && (
            <S.InfiniteScrollTarget ref={target}></S.InfiniteScrollTarget>
          )}
        </>
      ))}
      {isScrollLoading && <img src={spinner} />}
    </S.Container>
  );
};
