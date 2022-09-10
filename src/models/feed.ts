export interface Entry {
  title: string;
  link: {
    href: string;
  }[];
  id: string;
  published: string;
  updated: string;
  summary: string;
  content: string;
  category: {
    term: string;
    label: string;
  };
  author: {
    name: string;
  };
}

export interface Feed {
  title: string;
  subTitle: string;
  link: {
    href: string;
  };
  updated: string;
  author: {
    name: string;
  };
  id: string;
  entry: Entry[];
}
