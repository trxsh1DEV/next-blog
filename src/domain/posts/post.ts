export type PostID = number;

export type AuthorAttributesData = {
  name: string;
  createdBy: number;
  updatedBy: number;
  createdAt: string;
  updatedAt: string;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: AuthorAttributesData;
  };
};

export type CategoryAttributesData = {
  name: string;
  createdBy: number;
  updatedBy: number;
  publishedAt: string;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: CategoryAttributesData;
  };
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  data: {
    attributes: {
      id: PostID;
      alternativeText: string;
      caption: string;
      previewUrl: null;
      provider: string;
      createdBy: number;
      updatedBy: number;
      createdAt: string;
      updatedAt: string;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostAttributesData = {
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  categorie: PostCategory;
  createdBy: PostCreatedBy;
  updatedBy: PostCreatedBy;
  createdAt: string;
  updatedAt: string;
  cover: PostCover;
};

export type PostData = {
  id: PostID;
  attributes: PostAttributesData;
};
