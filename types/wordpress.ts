export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface PostsQuery {
  posts: {
    nodes: Post[];
  };
}
