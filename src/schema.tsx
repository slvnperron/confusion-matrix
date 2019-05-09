type AvailableKnowledge = "cms.speakers.firstName" | "cms.cities.airport";

type Extracted = <T keyof AvailableKnowledge>;

export type user = {
  age: number;
  city: Extracted;
};
