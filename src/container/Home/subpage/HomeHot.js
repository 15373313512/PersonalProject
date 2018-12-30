import React from 'react';
import {getHotSingle,getHotGoods} from '../../../fetch/home';
import HotProduct from '../../../components/HotProduct'
import {CITYNAME} from '../../../utils/config'
export default class HomeHot extends React.Component{
    constructor(){
        super();
        this.state = {
            hotSingle: [],
            hotGoods:[],
            
        }
    }
    
    componentDidMount(){
        //获取城市名称
        const cityName = localStorage.getItem(CITYNAME)
        //获取热卖单品的数据
        var HotSingle = getHotSingle(cityName);
        HotSingle.then(res => { 
            return res.json();
          })
        .then((data) => {
            this.setState({
                hotSingle: data
            })
        })

        
        //获取热卖商品的数据
        var HotGoods = getHotGoods(cityName);
        HotGoods.then(res => {
            return res.json();
          })
        .then((data) => {
            this.setState({
                hotGoods: data
            })
        })
        
    }

  
    render(){
        let {hotSingle,hotGoods} = this.state;
       return(
        <div className="hotproduct">
        {
            hotSingle.length > 0
            ?
            <HotProduct title="热卖单品" hotProduct={hotSingle}/> 
            :
            <div>正在加载...</div>

        }
         {
            hotSingle.length > 0
            ?
            <HotProduct title="热卖商品" hotProduct={hotGoods}/>
            :
            <div>正在加载...</div>
        }
        
        </div>
       )
    }
}