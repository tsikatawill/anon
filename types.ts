export type User = {
  _id: string;
  email: string;
  fullname: string;
  username: string;
  role: "basic" | "dev";
  created_at: Date;
  updated_at: Date;
};

export type HowIWStep = {
  description: string;
  image: string;
  link: null | { text: string; href: string };
  title: string;
};

export type Reply = {
  _id: string;
  type: "poll" | "general";
  content: string;
  by: string;
  created_at: Date;
  updated_at: Date;
};

export type Campaign = {
  _id: string;
  title: string;
  created_by: string;
  description: string;
  type: "poll" | "general";
  replies: [];
  public: boolean;
  createdAt: Date;
  updatedAt: Date;
};
