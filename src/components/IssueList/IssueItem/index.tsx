import React from 'react';

import { getKoreanDate } from '../../../utils/getKoreanDate';

import * as S from './IssueItem.styled';

interface IssueItemProps {
  number: number;
  title: string;
  login: string;
  created_at: string;
  comments: number;
}

export const IssueItem = ({ number, title, login, created_at, comments }: IssueItemProps) => {
  return (
    <S.Container>
      <S._Link to={`/detail/${number}`}>
        <S.Left>
          <S.MainInfo>{`#${number} ${title}`}</S.MainInfo>
          <S.SubInfo>{`작성자: ${login}, 작성일: ${getKoreanDate(created_at)}`}</S.SubInfo>
        </S.Left>
        <S.Right>
          <S.Comment>{`코멘트: ${comments}`}</S.Comment>
        </S.Right>
      </S._Link>
    </S.Container>
  );
};
