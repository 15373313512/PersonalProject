
import {get} from '../get.js'
export function getSearchData(cityName,keywords){
  
  var result = get(`/api/searchData?cityName=${cityName}&keywords=${keywords}`)
  return result;
}