import { MovieProp } from "db";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  title: string;
  movieList: MovieProp[];
}

const Container = styled.section`
  padding: 0px 0px 26px;
  h2 {
    font-size: 16px;
    margin: 22px 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 4px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

function Movies({ movieList, title }: IProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {movieList.map((movie) => (
          <Wrap
            to={`/details/${movie.slug}`}
            state={{ movieDetails: movie }}
            key={movie.slug}
          >
            <img src={movie.thumbnail} alt={movie.slug} />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;
