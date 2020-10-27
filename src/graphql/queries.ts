/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdOn
        updatedOn
        owner
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      createdOn
      updatedOn
      owner
      posts {
        items {
          id
          title
          content
          tags
          blogID
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        tags
        blogID
        createdOn
        updatedOn
        blog {
          id
          name
          createdOn
          updatedOn
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      tags
      blogID
      createdOn
      updatedOn
      blog {
        id
        name
        createdOn
        updatedOn
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          createdOn
          updatedOn
          owner
        }
        nextToken
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdOn
      updatedOn
      post {
        id
        title
        content
        tags
        blogID
        createdOn
        updatedOn
        blog {
          id
          name
          createdOn
          updatedOn
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdOn
        updatedOn
        post {
          id
          title
          content
          tags
          blogID
          createdOn
          updatedOn
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
