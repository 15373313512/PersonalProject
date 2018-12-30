var express = require('express');
var router = express.Router();
var hotSingle = require('./home/hotSingle.js');
var hotGoods = require('./home/hotGoods.js')
var searchData = require('./search/index.js')
var houseInfo = require('./detail/houseInfo')
var comment = require('./detail/comment')
var shopData = require('./shop/index.js')
var shopCar = require('./shopCar/index.js')
var url = require('url');

//热卖单品的数据
router.get('/hotSingle',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("cityName:"+query.cityName )
    res.send(hotSingle)
})

//热卖商品的数据
router.get('/hotGoods',function(req,res){
    res.send(hotGoods)
})


//搜索列表数据
router.get('/searchData',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log('cityName:'+query.cityName)
    console.log('keyWord:'+query.keywords)
    res.send(searchData)
})

//详情页房源信息的数据
router.get('/houseInfo',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log('houseId:'+query.id)
    res.send(houseInfo)
})

//详情页评论的数据
router.get('/comment',function(req,res){
    var query = url.parse(req.url,true).query;
    console.log('houseId:'+query.id)
    res.send(comment)
})

//商城页面的数据
router.get('/shopData',function(req,res){
    res.send(shopData)
})

//请求购物车数据
router.get('/shopCar',function(req,res){
    res.send(shopCar)
})


module.exports = router;