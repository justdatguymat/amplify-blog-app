/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
