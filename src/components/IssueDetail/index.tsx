import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

import { useIssueNumberLocation } from '../../hooks/useIssueNumberLocation';
import { useGetIssue } from '../../hooks/useGetIssue';
import { useRepoNameStore, useRepoOwnerNameStore } from '../../hooks/useStore';
import { getKoreanDate } from '../../utils/getKoreanDate';

import * as S from './IssueDetail.styled';

export const IssueDetail = () => {
  const { issueNumber } = useIssueNumberLocation();
  const { data: issue, error, isError, isLoading } = useGetIssue({ issueNumber });
  const { repoName } = useRepoNameStore();
  const { repoOwnerName } = useRepoOwnerNameStore();
  const hasRepoInfo = repoName && repoOwnerName;

  if (!hasRepoInfo) {
    return <div>Owner 혹은 Repository 정보가 없는 잘못된 접근입니다.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    issue && (
      <S.Container>
        <S.Top>
          <S.Left>
            <S.Avatar src={issue.user.avatar_url} />
          </S.Left>
          <S.Center>
            <S.MainInfo>{`#${issue.number} ${issue.title}`}</S.MainInfo>
            <S.SubInfo>{`작성자: ${issue.user.login}, 작성일: ${getKoreanDate(
              issue.created_at,
            )}`}</S.SubInfo>
          </S.Center>
          <S.Right>
            <S.Comment>{`코멘트: ${issue.comments}`}</S.Comment>
          </S.Right>
        </S.Top>
        <S.Bottom>
          <S.IssueBody>
            <MarkdownPreview source={issue.body} />
          </S.IssueBody>
        </S.Bottom>
      </S.Container>
    )
  );
};
