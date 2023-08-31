import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Banner = styled.li`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e1e4e8;
  &:hover {
    background-color: #f6f8fa;
  }
`;

export const _Link = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 110px;
  height: 40px;
`;

export const InfiniteScrollTarget = styled.div`
  width: 100%;
  height: 20px;
  text-align: center;
  color: black;
  background-color: ${({ theme }) => theme.colors.default};
`;
