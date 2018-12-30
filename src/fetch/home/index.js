import {get} from "../get.js";

export function getHotSingle(cityName){
  var result = get(`api/hotSingle?cityName=${cityName}`);
  return result;
}
export function getHotGoods(cityName){
  var result = get(`api/hotGoods?cityName=${cityName}`);
  return result;
}