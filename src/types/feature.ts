export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  lists: Listable[];
};

type Listable = {
  title: string;
  paragraph: string;
};
