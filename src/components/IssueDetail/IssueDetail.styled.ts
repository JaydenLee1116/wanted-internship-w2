// <S.Container>
//     <S.Top>
//       <S.Left>
//         <S.Avatar />
//       </S.Left>
//       <S.Center>
//       <S.MainInfo>{`#${number} ${title}`}</S.MainInfo>
//         <S.SubInfo>{`작성자: ${login}, 작성일: ${getKoreanDate(created_at)}`}</S.SubInfo>
//       </S.Center>
//       <S.Right>
//         <S.Comment>{`코멘트: ${comments}`}</S.Comment>
//       </S.Right>
//     </S.Top>
//     <S.Bottom>
//       <S.IssueBody>

//       </S.IssueBody>
//     </S.Bottom>
//   </S.Container>;

import { styled } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Left = styled.section`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Right = styled.section`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const MainInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubInfo = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Comment = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const Bottom = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const IssueBody = styled.p`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
`;
