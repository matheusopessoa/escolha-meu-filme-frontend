import React from 'react';
import Layout from '../../components/Layout';
import SeoHead from '../components/SeoHead';
import styled from 'styled-components';

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
`;

const PostHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 8px;
  }
  
  blockquote {
    border-left: 4px solid #e50914;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
  }
`;

const PostLayout = ({
  children,
  title,
  description,
  publishedTime,
  modifiedTime = new Date().toISOString(),
  author = 'Escolha Meu Filme',
  image,
  keywords,
}) => {
  return (
    <Layout>
      <SeoHead
        type="article"
        title={title}
        description={description}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        authors={[author]}
        section="Blog"
        ogImage={image}
        keywords={keywords}
      />
      <PostContainer>
        <PostHeader>
          <PostTitle>{title}</PostTitle>
          {image && (
            <img src={image} alt={title} style={{ maxWidth: '100%', borderRadius: '10px', margin: '1.5rem 0' }} />
          )}
          <PostMeta>
            <time dateTime={publishedTime}>
              {new Date(publishedTime).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            {' '}• Por {author}
          </PostMeta>
        </PostHeader>
        <PostContent>
          {children}
        </PostContent>
      </PostContainer>
    </Layout>
  );
};

export default PostLayout; 