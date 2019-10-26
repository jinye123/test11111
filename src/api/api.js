import http from './http';

//获取普通商品列表
export function getShopList(data) {
    return http.post('/goods/getShoppingGoodsList.aj', data)
}

//获取权益卡
export function getCardFamily(data) {
    return http.post('/goods/getMembershipCardList.aj', data)
}

//获取物流状态
export function getLogistic(data) {
    return http.post('/express/getTrackInfo.aj', data)
}

//获取商品详情
export function getShopDetail(data) {
    return http.post('/goods/getShoppingGoodsInfo.aj', data)
}

//商品详情轮播图列表
export function getShopDetailSlide(data) {
    return http.post('/goods/getShoppingGoodsCarouselList.aj', data)
}

//商品详情轮播图列表
export function getDetailImgList(data) {
    return http.post('/goods/getShoppingGoodsImgList.aj', data)
}


//商品详SKU
export function getSkuData(data) {
    return http.post('/goodsproduct/getShoppingGoodsDetail.aj', data)
}

//获取活动列表
export function getActiveList(data) {
    return http.post('/promotion/getPromotionList.aj', data)
}

//获取用户所有权益卡
export function getAllCardList(data) {
    return http.post('/promotion/privilegeCardList.aj', data)
}


export function getLotteryList(data) {
    return http.post('/coupon/getUserNewCouponList.aj', data)
}

//获取彩票详情
export function getLotteryDetail(data) {
    return http.post('/lotteryorder/querylotteryOrderById.aj', data)
}

//获用户获奖信息
export function getUserBaknInfo(data) {
    return http.post('/uc/bankaccount/queryBankAccountById.aj', data)
}


//用户完善身份信息
export function perfectUserInfo(data) {
    return http.post('/userInfo/modifyUserInfo.aj', data)
}

//获取验证码
export function getCode(data) {
    return http.post('/common/sendForH5Activity.aj', data)
}

//获取新用户注册
export function newUserRegester(data) {
    return http.post('/login/registerForH5Activity.aj', data)
}

//获取微信配置
export function weiChatConfig(data) {
    return http.post('/catering/getSignUseToken.aj', data)
}