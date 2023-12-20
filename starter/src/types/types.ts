export interface HomePageType {
  banner_content: {
    title: string;
    content: string;
  };
  services_block: {
    preTitle: string;
    title: string;
  };
  team_block: {
    preTitle: string;
    title: string;
  };
}

export interface ServicesType {
  id: string;
  image: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamType {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
}

export interface AboutType {
  preTitle: string;
  title: string;
  first_paragraph: string;
  second_paragraph: string;
  years: string;
  slogan: string;
  image_one: string;
  image_two: string;
}

export interface FeatureType {
  preTitle: string;
  title: string;
  first_paragraph: string;
  image_one: string;
  image_two: string;
  usp_items: {
    id: string;
    title: string;
    content: string;
    icon: string;
  }[];
}
