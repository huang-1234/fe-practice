/**
 * 机构全量路由表
 */
import loadable from '@loadable/component';

const routes = [
  // 机构-首页
  {
    path: '/',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/jigouHome')),
    title: '机构首页',
  },
  // 机构-经营管理-达人管理
  {
    path: '/daren/account-manager', // 机构-二级菜单-达人帐号管理
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/daren/account-manager')),
    title: '达人账号管理',
  },
  {
    path: '/daren/account-bind', // 机构-子页面-达人帐号绑定管理
    component: loadable(() => import('pages/daren/account-bind')),
    title: '达人帐号绑定管理',
  },
  {
    path: '/daren/settle-manager', // 机构-二级菜单-达人结算管理
    component: loadable(() => import('pages/daren/settle-manager')),
    title: '达人结算管理',
  },
  {
    path: '/daren/invite-apply', // 机构-二级菜单-邀约权限申请
    component: loadable(() => import('pages/daren/invite-apply')),
    title: '邀约权限申请',
  },
  {
    path: '/daren/invite-manage', // 机构-二级菜单-合作邀约管理
    component: loadable(() => import('pages/daren/invite-manage')),
    title: '合作邀约管理',
  },
  // 机构-经营管理-内容分发 TODO
  {
    path: '/content/distribution', // 机构-二级菜单-内容分发管理
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/content/distribution')),
    title: '内容分发管理',
  },
  {
    path: '/content/distribution/major-manage', // 机构-二级菜单-内容分发管理
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/content/distribution/subPage/majorManage')),
    title: '内容分发管理-达人主号管理',
  },
  {
    path: '/content/distribution/major-authorize',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/content/distribution/subPage/majorAutorize')),
    title: '内容分发管理-主号授权处理',
  },
  // 机构-经营管理-店铺管理
  {
    path: '/shopmanager/shop-bind', // 机构-二级菜单-店铺绑定
    component: loadable(() => import('pages/shopmanager/shop-bind')),
    title: '店铺管理',
  },
  {
    path: '/shopmanager/shop-data', // 机构-二级菜单-店铺直播数据
    component: loadable(() => import('pages/shopmanager/shop-data')),
    title: '店铺直播数据',
  },
  // 机构-精选联盟-撮合活动-doulink大会
  {
    path: '/douLink/list',
    component: loadable(() => import('@pages/douLink/list')),
    title: '抖Link大会',
  },
  {
    path: '/douLink/detail',
    component: loadable(() => import('@pages/douLink/detail')),
    title: '抖Link会场',
  },
  {
    path: '/douLink/info',
    component: loadable(() => import('@pages/douLink/info')),
    title: '抖Link报名信息',
  },
  // 各个角色的主页（注意 不是首页(顶导的那个是首页)，这里是主页）
  {
    path: '/darenActivity/shop-detail',
    component: loadable(() => import('@pages/darenActivity/shop-detail')),
    title: '商家主页',
  },
  {
    path: '/servicehall/daren-profile', // 商家-子页面-达人主页
    component: loadable(() => import('@pages/servicehall/daren-profile')),
    title: '达人主页',
  },
  {
    path: '/institution/homepage', // 商家-子页面-达人主页
    component: loadable(() => import('@pages/institution/homepage')),
    title: '机构主页',
  },
  // 机构-精选联盟-招商团长
  {
    path: '/institution/through-power', // 机构-子页面-授权打通
    component: loadable(() => import('@pages/institution/through-power')),
    title: '授权打通',
  },

  {
    path: '/institution/entrust-list', // 机构-招商团长-我的托管
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/institution/entrust-list')),
    title: '我的托管',
  },
  {
    path: '/institution/activity', // 机构-二级菜单-我的招商
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/institution/activity')),
    title: '我的招商',
  },
  {
    path: '/institution/goods', // 机构-子页面-招商审核
    component: loadable(() => import('@pages/institution/goods')),
    title: '招商审核',
  },
  {
    path: '/institution/access-guide', // 机构-我的招商-团长准入引导
    component: loadable(() => import('@pages/institution/access-guide')),
    title: '团长准入引导',
  },
  {
    path: '/message-center/unread', // 达人-消息中心-待处理/未读消息
    component: loadable(() => import('@pages/message-center/unread')),
    title: '未读消息',
  },
  {
    path: '/message-center/history', // 达人-消息中心-历史消息
    component: loadable(() => import('@pages/message-center/history')),
    title: '消息历史',
  },
  {
    path: '/institution/access-examine', // 机构-我的招商- 团长准入审核页
    component: loadable(() => import('@pages/institution/access-examine')),
    title: '团长准入审核页',
  },
  {
    path: '/servicehall/institution-business', // 机构-团长招商
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/servicehall/institution-business')),
    title: '团长招商',
  },
  {
    path: '/servicehall/business-activity-detail', // 机构-团长招商-招商活动详情
    component: loadable(() => import('@pages/servicehall/business-activity-detail')),
    title: '招商活动详情',
  },
  {
    path: '/institution/activity-apply', // 机构-团长招商-活动报名详情
    component: loadable(() => import('@pages/institution/activity-apply')),
    title: '活动报名详情',
  },
  {
    path: '/institution/serviceCharge', // 机构-二级菜单-招商服务费明细
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/institution/serviceCharge')),
    title: '招商服务费明细',
  },
  {
    path: '/dataCenter/refundOrder', // 机构-子页面-结算退款订单记录
    component: loadable(() => import('@pages/dataCenter/refundOrder')),
    title: '结算退款订单记录',
  },
  // 机构-精选联盟-商品合作
  {
    path: '/goodsCooperation/product-placing', // 机构-商品合作-商品投放
    component: loadable(() => import('pages/cooperation/product-placing')),
    title: '机构-商品合作-投放计划',
  },
  {
    path: '/goodsCooperation/new-placing', // 商品投放-子页面-新建商品投放
    component: loadable(() => import('pages/cooperation/new-placing')),
    title: '新建投放计划',
  },
  {
    path: '/goodsCooperation/product-manage', // 机构-商品合作-商品管理
    component: loadable(() => import('pages/cooperation/product-manage')),
    title: '机构-商品合作-商品管理',
  },
  {
    path: '/goodsCooperation/product-saving', // 机构-商品合作-团长选品库
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/cooperation/product-pool')),
    title: '机构-商品合作-团长选品库',
  },
  {
    path: '/goodsCooperation/product-saving/favorite-list', // 机构-商品合作-团长选品库
    component: loadable(() => import('pages/cooperation/product-pool/mods/favorite-list')),
    title: '机构-商品合作-团长选品库-我的收藏',
  },
  {
    path: '/goodsCooperation/product-details', // 机构-商品合作-商品采集池-商品详情
    component: loadable(() => import('pages/cooperation/product-details')),
    title: '机构-商品合作-商品详情',
  },
  // 机构-精选联盟-达人合作
  {
    path: '/servicehall/daren-square', // 机构-二级菜单-达人广场
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/servicehall/daren-square')),
    title: '机构-达人广场',
  },
  {
    path: '/servicehall/daren-task', // 机构-二级菜单-达人任务
    component: loadable(() => import('pages/daren/daren-task')),
    title: '机构-达人任务',
  },
  {
    path: '/servicehall/daren-task-list', // 机构-二级菜单-达人任务
    component: loadable(() => import('pages/daren/daren-task-list')),
    title: '机构-达人任务列表',
  },
  {
    path: '/servicehall/daren-task/creation', // 机构-二级菜单-达人任务创建
    component: loadable(() => import('pages/daren/daren-task/subPages/TaskCreation')),
  },
  {
    path: '/servicehall/daren-task/preview',
    component: loadable(() => import('pages/daren/daren-task/subPages/TaskPreview')),
  },
  {
    path: '/servicehall/daren-task-list/detail',
    component: loadable(() => import('pages/daren/daren-task-list/subPages/darenTaskDetail')),
  },
  {
    path: '/servicehall/intelligent-service', // 机构-二级菜单-达人任务
    component: loadable(() => import('pages/daren/intelligent-service')),
    title: '机构-智能推品',
  },
  {
    path: '/servicehall/daren-business', // 机构-达人合作-达人招商
    component: loadable(() => import('@pages/servicehall/daren-business')),
    title: '机构-达人招商',
  },
  {
    path: '/servicehall/business-activity-detail', // 机构-达人招商-招商活动详情
    component: loadable(() => import('@pages/servicehall/business-activity-detail')),
    title: '机构-达人招商-招商活动详情',
  },
  {
    path: '/institution/activity-apply',
    component: loadable(() => import('@pages/institution/activity-apply')),
    title: '机构-达人招商-活动报名详情',
  },

  {
    path: '/servicehall/daren-manage',
    component: loadable(() => import('pages/daren/daren-manage')),
    title: '机构-达人合作-达人管理',
  },

  {
    path: '/servicehall/daren-diagnose',
    component: loadable(() => import('pages/daren/daren-diagnose')),
    title: '机构-达人合作-达人诊断',
  },
  // 机构-精选联盟-直播间分销
  {
    path: '/distribution/institution', // 机构-二级菜单-直播间分销
    component: loadable(() => import('@pages/distribution/institution')),
    title: '直播间分销',
  },
  {
    path: '/distribution/service-square', // 机构-二级菜单-分销广场
    component: loadable(() => import('@pages/distribution/service-square')),
    title: '分销广场',
  },
  {
    path: '/distribution/service-nopermission', // 机构-二级菜单-抖客分销
    component: loadable(() => import('@pages/distribution/service-nopermission')),
    title: '抖客分销',
  },
  {
    path: '/promotion/management', // 机构-推广位管理
    component: loadable(() => import('@pages/promotion/management')),
    title: '推广位管理',
  },
  {
    path: '/promotion/data', // 机构-推广位数据
    component: loadable(() => import('@pages/promotion/data')),
    title: '推广位数据',
  },
  {
    path: '/dataCenter/distri-order-inst',
    component: loadable(() => import('@pages/dataCenter/distri-order-inst')),
    title: '直播间分销订单',
  },
  {
    path: '/dataCenter/distri-order-service',
    component: loadable(() => import('@pages/dataCenter/distri-order-service')),
    title: '抖客分销订单',
  },
  // 机构-精选联盟-基地直播
  {
    path: '/baselive/live-calendar', // 机构-基地直播-直播日历
    component: loadable(() => import('pages/baselive/live-calendar')),
    title: '机构-基地直播-直播日历',
  },
  {
    path: '/baselive/live-calendar/daren', // 机构-基地直播-直播日历
    component: loadable(() => import('pages/baselive/live-calendar/daren')),
    title: '机构-基地直播-直播日历',
  },
  {
    path: '/baselive/cooperation', // 机构-基地直播-达人合作
    component: loadable(() => import('pages/baselive/cooperation')),
    title: '机构-基地直播-达人合作',
  },
  {
    path: '/baselive/productManage', // 机构-基地直播-选品管理
    component: loadable(() => import('pages/baselive/productManage')),
    title: '机构-基地直播-选品管理',
  },
  {
    path: '/baselive/dataCenter', // 机构-基地直播-基地数据
    component: loadable(() => import('pages/baselive/dataCenter')),
    title: '机构-基地直播-基地数据',
  },
  // 机构-精选联盟-排行榜
  {
    path: '/ranklist/inst-merchant',
    component: loadable(() => import('@pages/ranklist/inst-merchant')),
    title: '机构-商家服务机构榜',
  },
  {
    path: '/ranklist/daren',
    component: loadable(() => import('@pages/ranklist/daren')),
    title: '机构-达人排行榜',
  },
  {
    path: '/ranklist/inst-daren',
    component: loadable(() => import('@pages/ranklist/inst-daren')),
    title: '机构-达人服务机构榜',
  },
  {
    path: '/ranklist/inst-captain',
    component: loadable(() => import('@pages/ranklist/inst-captain')),
    title: '机构-达人服务机构榜',
  },
  // 机构-机构任务-机构任务
  {
    path: '/jigou/task-center', // 机构-二级菜单-任务中心
    component: loadable(() => import('pages/jigou/task-center/list')),
    title: '机构-任务中心',
  },
  {
    path: '/jigou/task-detail', // 机构-子页面-任务详情
    component: loadable(() => import('pages/jigou/task-detail/details')),
    title: '机构-任务详情',
  },
  // 机构-数据参谋-数据参谋
  {
    path: '/dataCenter/commission-order-detail', // 机构-数据参谋-联盟订单明细
    component: loadable(() => import('@pages/dataCenter/commission-order-detail')),
    title: '机构-数据参谋-联盟订单明细',
  },
  {
    path: '/dataCenter/realtime-monitor', // 机构-二级菜单-实时监控
    component: loadable(() => import('@pages/dataCenter/realtime-monitor')),
    title: '机构-数据参谋-实时监控',
  },
  {
    path: '/dataCenter/live-data', // 机构-二级菜单-直播数据
    component: loadable(() => import('@pages/dataCenter/live-data')),
    title: '机构-数据参谋-直播数据',
  },
  {
    path: '/livedata/detail', // 机构-子页面-直播带货数据详情
    component: loadable(() => import('@pages/livedata/detail')),
    title: '机构-数据参谋-直播带货数据详情',
  },
  {
    path: '/dataCenter/live-data-single', // 机构-子页面-直播数据-单场直播数据
    component: loadable(() => import('@pages/dataCenter/live-data-single')),
    title: '机构-数据参谋-单场直播数据',
  },
  {
    path: '/dataCenter/institution-check-data', // 机构-二级菜单-成交数据
    component: loadable(() => import('@pages/dataCenter/institution-check-data')),
    title: '机构-数据参谋-成交数据',
  },
  {
    path: '/dataCenter/daren-data-detail', // 机构-成交数据-达人数据详情
    component: loadable(() => import('@pages/dataCenter/daren-data-detail')),
    title: '机构-数据参谋-成交数据-达人数据详情',
  },
  {
    path: '/dataCenter/export-list', // 机构 - 二级菜单 - 导出记录
    component: loadable(() => import('@pages/dataCenter/export-list')),
    title: '机构-数据参谋-导出记录',
  },
  // 机构-基础设置-基础设置
  {
    path: '/contractManage/contract-sign',
    component: loadable(() => import('@pages/contractManage/contract-sign')),
    title: '机构-基础设置-合同管理-资质认证',
  },
  {
    path: '/contractManage/contract-list', // 机构-二级菜单-合同管理
    component: loadable(() => import('@pages/contractManage/contract-list')),
    title: '机构-基础设置-合同管理',
  },
  {
    path: '/accountmanager/sub-account', // 机构-二级菜单-子帐号管理
    component: loadable(() => import('pages/accountmanager/sub-account')),
    title: '机构-基础设置-子账号管理',
  },
  {
    path: '/institution/power-manage', // 机构-基础设置-授权管理
    component: loadable(() => import('@pages/institution/power-manage')),
    title: '机构-基础设置-授权管理',
  },
  {
    path: '/institution/business-management', // 机构-基础设置-业务管理
    component: loadable(() => import('@pages/institution/business-management')),
    title: '机构-基础设置-业务管理',
  },
  {
    path: '/accountmanager/contact', // 机构-基础设置-联系方式
    component: loadable(() => import('@pages/accountmanager/contact')),
    title: '机构-基础设置-联系方式',
  },
  {
    path: '/accountmanager/institution-detail', // 机构-基础设置-机构信息管理
    component: loadable(() => import('pages/accountmanager/institution-detail')),
    title: '机构-基础设置-机构信息管理',
  },
  // 协议签署页面
  {
    path: '/agreement',
    component: loadable(() => import('@pages/agreement')),
    title: '协议签署',
  },
  // 机构-千川（机构的千川不是外跳 是iframe）
  {
    path: '/flowTool/qianchuan',
    component: loadable(() => import('pages/flowTool/qianchuan')),
    title: '巨量千川',
  },
  {
    path: '/task-center/captain-task',
    component: loadable(() => import('pages/task-center/captain-task')),
    title: '机构-任务中心-团长任务',
  },
  {
    path: '/task-center/task-detail',
    component: loadable(() => import('pages/task-center/task-detail')),
    title: '机构-任务中心-任务详情',
  },
  // 团长等级权益
  {
    path: '/task-center/captain-level',
    component: loadable(() => import('pages/task-center/captain-level')),
    title: '机构-任务中心-团长等级',
  },
  {
    path: '/task-center/captain-level/list',
    component: loadable(() => import('src/pages/task-center/equity-list')),
    title: '机构-任务中心-等级权益',
  },
  // 团长数据
  {
    path: '/data-table/manage-overview',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/data-table/manage-overview')),
    title: '经营概况',
  },
  {
    path: '/data-table/sell-condition',
    component: loadable(() => import('pages/data-table/sell-condition')),
    title: '出单情况',
  },
  {
    path: '/protocol-manager/list',
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/protocol-manager/list')),
    title: '合作管理-服务费订单管理',
  },
  {
    path: '/protocol-manager/agreement',
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/protocol-manager/agreement')),
    title: '合作管理-合作订单协议',
  },
  {
    path: '/dataCenter/service-data',
    component: loadable(() => import(/* webpackPrefetch: true */ '@pages/dataCenter/service-data')),
    title: '数据参谋-服务费账单',
  },
  {
    path: '/goodsCooperation/brand-market-service',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/cooperation/brand-market-service')),
    title: '品牌营销服务',
  },
  {
    path: '/goodsCooperation/new-service',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/cooperation/new-brand-service')),
    title: '新增品牌营销服务',
  },
  {
    path: '/goodsCooperation/preview-brand-service',
    component: loadable(() => import(/* webpackPrefetch: true */ 'pages/cooperation/preview-brand-market')),
    title: '预览营销服务',
  },
  {
    path: '/404',
    component: loadable(() => import('@pages/not-found-page')),
    title: '404',
  },
];

export { routes };
