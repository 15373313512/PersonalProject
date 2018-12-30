import { get } from '../get.js'
export function getShopCarData(){
  var result = get ('/api/shopCar')
  return result;
}