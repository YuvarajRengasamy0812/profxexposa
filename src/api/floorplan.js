import API from "./api";
import { Floorplan, FloorplanList } from "./endpoints";

export const getFloorplanList = () => {
  return API.get(FloorplanList);
};

export const postFloorplan = (payload) => {
  return API.post(Floorplan, payload);
};