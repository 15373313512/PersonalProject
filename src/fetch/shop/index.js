import { get } from '../get.js'
export function getShopData(){
  var result = get ('/api/shopData')
  return result;
}