export type TType = {
  _id: number;
  nameType: string;
  levelId: number;
};

export type TDsa = {
  _id: number;
  name: string;
  topicId: number;
  tier: "basic" | "advanced";
  types: TType[];
};
