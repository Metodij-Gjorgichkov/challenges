export interface BannerContentType {
  title: string;
  content: string;
  button_title: string;
}

export interface ServicesBlockType {
  preTitle: string;
  title: string;
}

export interface ServicesType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutBlockType {
  preTitle: string;
  title: string;
  first_paragraph: string;
  second_paragraph: string;
  years: string;
  slogan: string;
  number_of_chefs: string;
  slogan_two: string;
  image_one: string;
  image_two: string;
  image_three: string;
  image_four: string;
}

export type MenuBlockType = ServicesBlockType;

export interface MenuType {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export type TeamBlockType = ServicesBlockType;

export interface TeamType {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
}
