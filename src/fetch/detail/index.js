import {get} from "../get.js";

export function getHouseInfo(houseId){
  var result = get(`/api/houseInfo?id=${houseId}`);
  return result;
}
export function getComment(houseId){
  var result = get(`/api/comment?id=${houseId}`);
  return result;
}