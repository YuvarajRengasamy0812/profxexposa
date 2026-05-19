


import API from "./api";
import { Influencer } from "./endpoints";

const getInfluencerPath = (sectionId) =>
  sectionId ? `${Influencer}/${sectionId}` : Influencer;

export const getAllInfluencers = ({
  sectionId,
  category,
  categoryId,
  lang,
} = {}) => {
  const params = {};

  if (category && category !== "all") {
    params.category = category;
  }

  if (categoryId) {
    params.category_id = categoryId;
  }

  if (lang) {
    params.lang = lang;
  }

  return API.get(getInfluencerPath(sectionId), { params });
};
