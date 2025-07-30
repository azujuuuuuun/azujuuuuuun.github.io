export interface Entry {
  title: string;
  link: { href: string };
  id: string;
  published: string;
}

export interface Feed {
  title: string;
  subTitle: string;
  link: { href: string };
  updated: string;
  entry: Entry[];
}
