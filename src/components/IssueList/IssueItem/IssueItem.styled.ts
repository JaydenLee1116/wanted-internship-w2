import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e1e4e8;
  &:hover {
    background-color: #f6f8fa;
  }
`;

export const Left = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const MainInfo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubInfo = styled.div`
  font-size: 0.875rem;
  color: #586069;
`;

export const Right = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 20%;
`;

export const Comment = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6a737d;
`;

export const _Link = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
