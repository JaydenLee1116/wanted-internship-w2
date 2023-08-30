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
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    gap: 1rem;
  }
`;

export const Left = styled.section`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Right = styled.section`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const MainInfo = styled.div`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

export const SubInfo = styled.div`
  font-size: 0.875rem;
  color: #586069;
  text-align: center;
`;

export const Comment = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
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
  padding: 1rem;
  border: 1px solid black;
  border-radius: 10px;
`;
