
{
  // 视图层过厚
  class View1 {
    render() {
      return (
        <div className="goods-item">
          <div className="main-info">
            <img className="goods-img" src={mainPic} alt="" />
            <div className="goods-name">{goodsName}</div>
            {/* 当 status 为2时，表示无货 */}
            {status === 2
              ? <span className="out-stock">已无货</span>
              : null
            }
          </div>
          <div className="detail-info">
            {/* 当 activityType 为 3 表示该商品正在参与活动，为特价商品 */}
            {activityType === 3
              ? <span className="price discount">特价：{price / 100} 元</span>
              : <span className="price">价格：{price / 100} 元</span>
            }
            <div className="tag-wrap">
              {
                filterTag.map(v => {
                  return (
                    <span className="tag">{v.title}</span>
                  )
                })}
            </div>
          </div>
        </div>
      )
    }
  }
}

{
  class View2 {
    /* 判断逻辑重复 */
    render() {
      return (
        <>
          <div className="user">
            <img className={`${userInfo.vip ? 'vip' : ''}`} src={userInfo.avatar} alt="" />
            <span>{userInfo.userType === 2 ? '尊敬的签约客户：' : null} {userInfo.userName}</span>
          </div>
          <div>{userType === 2 ? '尊敬的签约客户：' : null}{userName}</div>
        </>
      )
    }
  }
}
{/*
  ├── common│
  ├── components // 公用组件│
  ├── constants // 全局变量│   │
  ├── goods│   │   │
  └── index.js│   │
  ├── ...│
  ├── data - source // 数据接口层│   │
  ├── goods│   │   │
  ├── requestApis.js│   │   │
  └── translators.js│   │   ├── ...│
  ├── domains // 领域层│   │   ├── goods-domain│   │   │
  ├── entities // 实体│   │   │   │   └── goods.js│   │   │
  └── goodsService.js // 领域Service服务│   │   ├── ...│   └── util // 公用函数│
  └── http.js└── page // 页面视图层 ├── index │   ├── App.js │   ├── components │   │
  ├── GoodsItem.js │   │   ├── GoodsItem.scss │   │   ├── Nav.js │   │
  └── Nav.scss │   ├── index.js │   └── services // 该页面需要用到的Service │
  └── index.js ├── ...
   */
}

/*  */

getUserInfo()
  .then(data => {
    this.setState({
      userInfo: data
    })
  })
const getUserPonitCount = () => {
  getUserPointCount()
    .then(count => {
      this.setState({
        pointCount: count
      })
    })
}
const render = ()=>{
  const { userInfo, pointCount } = this.state;
  // vip 单从字面上难以辨别出是一个bool类型，更规范的命名应该是 isVip
  // avatar 是一个 url 类型的字段，更规范的写法应该是 avatarUrl 会更直观
  const { avatar, userName, userType, tel, vip, email, vipValidityDate } = userInfo;
}

/* #### 件结构
我们根据上述结构图的分层思想，在实际项目中定义了以下的文件目录： */
{


}

/* #### 数据接口层 data-source

- requestApi：数据请求层，负责 http 请求，是项目中唯一与后端服务进行交流的一层。 */
{
  import axios from '@common/util/http';
  // src / common / data - source / interest / request / Apis.js
  import { pointRecordTranslator, pointGiftTranslator } from './translators'
  export function getUserPointRecordList() {
    return axios('/interest/pointRecord')
      .then(data => {
        return data.map(item => pointRecordTranslator(item));
      })
  }
  export function getInterestGiftList() {
    return axios('/interest/gift')
      .then(data => {
        return data.map(item => pointGiftTranslator(item))
      })
  }
}
/* translator：数据清洗层，这层负责将后端返回的数据“清洗”，改造成更直观地字段(key)、更方便使用的数据(value)。 */
export function goodsTranslator({
  id, goodsName, price, status, activityType, desc,
  brand, relatedModelId, mainPic, tag, relatedModelImg
}) {
  return {
    id, name: goodsName, price: (price / 100).toFixed(2), status, activityType,
    description: desc, brandName: brand, mainPicUrl: mainPic, tags: tag
  }
}
/* #### 领域层 -> domain

领域层是整个项目的核心层，它掌管了所有领域下的行为与定义，它是整个项目中最能体现业务知识的一层。
- entity：实体，是领域服务的载体，它定义了业务中某个个体的属性与方法，比如抽奖活动中的奖品、活动，这些都可以抽象为实体，
它在全局领域中是唯一的，不可能在别的领域中存在相同的实体。 */
/** * 抽奖活动实体 */
import dayjs from 'dayjs'
import { lotteryTypeMap } from '@constants/lottery'
class Lottery {
  constructor(lottery = {}) {
    this.id = lottery.id
    this.name = lottery.name
    this.type = lottery.type
    this.startDate = lottery.startDate
    this.endDate = lottery.endDate
  } // 获取活动时间范围
  getLotteryTimeScope() {
    return `${dayjs(this.startDate).format("M月D日")} - ${dayjs(this.endDate).format("M月D日")}`
  }
  // 获取活动类型描述
  getLotteryType() {
    return this.type && lotteryTypeMap[this.type].title
  }
}
export default Lottery

/* service：领域服务层，这一层中定义了领域的行为，供视图层直接调用。 */
import { getLotteryDetail, getPrizeList, playLottery, savePrizeAddress } from '@data-source/lottery/requestApis';
import Prize from './entities/prize';
import Lottery from './entities/lottery';

class LotteryService {
  /**
   * 获取本次抽奖活动详情
   * @param {string} id 活动id
   */
  static getLotteryDetail(id) {
    return getLotteryDetail(id)
      .then(lottery => new Lottery(lottery))
  }
  /**
   * 获取本次抽奖活动的奖品列表
   * @param {string} id 抽奖活动id
   */
  static getPrizeList(id) {
    return getPrizeList(id).then(list => {
      return list.map(item => new Prize(item));
    })
  }
  /**
   * 进行抽奖
   * @param {string} id 抽奖活动id
   */
  static playLottery(id) {
    return playLottery(id)
      .then(result => {
        const { recordId, prize } = result;
        return { recordId, prize: new Prize(prize) }
      })
  }
  /**
   * 填写中奖的收货地址信息
   * @param {Object} param0 中奖记录id以及地址信息
   */
  static savePrizeAddress({ recordId, name, phoneNumber, address }) {
    const data = { recordId, name, phoneNumber, address }
    return savePrizeAddress(data)
  }
}
export default LotteryService

/* #### View 视图层 -> view
视图层也就是我们书写交互逻辑、样式的一层，可以使用纯 HTML 或者框架(React、Vue)，这一层只需要调用了领域的服务，将返回值直接体现
在视图层中，无需编写条件判断、数据筛选、数据转换等与视图展示无关的逻辑代码，这些“糙活”都在其他层中以已经完成，所以视图层是非常“薄”
的一层，只需关注视图的展示与交互，整个 HTML 结构非常直观清晰。 */
import React from 'react';
import { UserService, InterestService } from './services';
import User from '@domain/user-domain/entities/user';
import { SIGN_USER_TYPE } from '@constants/user';
import "./App.scss"

class App extends React.Component {
  state = { pointCount: null, user: new User() }
  componentDidMount() {
    this.getUserInfo(); this.getUserPonitCount();
  }
  // 获取用户信息
  getUserInfo = () => {
    UserService.getUserDetail()
      .then(user => {
        this.setState({ user })
      });
  }
  // 获取用户积分
  getUserPonitCount = () => {
    InterestService.getUserPointCount()
      .then(count => {
        this.setState({ pointCount: count })
      })
  }
  render1() {
    const { pointCount, user } = this.state;
    return (
      <div className="user-page">
        <h3>个人中心</h3>
        <div className="user">
          <div className="info">
            <div> {user.type === SIGN_USER_TYPE ? `尊敬的${user.getUserTypeTitle()}：` : null}{user.name}</div>
            <div>绑定手机号： {user.phoneNumber}</div>
            <div>绑定email： {user.email}</div>
          </div>
          <div className="avatar">
            <img className={`${user.isVip ? 'vip' : ''}`} src={user.avatarUrl} alt="" />
            {user.isNeedRemindUserVipLack() && user.isVip ? <div>会员还有{user.getVipRemainDays()}天</div> : ''}
          </div>
        </div>
        <div className="lottery-tips">
          <div>剩余积分：{pointCount} 分</div>
          <a href="/interest.html">前往积分权益中心</a>
        </div>
      </div>
    );
  }
  /* 我们可以对比之前写的“问题代码”： */
  render2() {
    const { userInfo, pointCount } = this.state;
    const { avatar, userName, userType, tel, vip, email, vipValidityDate } = userInfo;
    // console.log()
    const remainDay = dayjs(vipValidityDate).diff(new Date(), 'day');
    return (
      <div className="user-page">
        <h3>个人中心</h3>
        <div className="user">
          <div className="info">
            <div>{userType === 2 ? '尊敬的签约客户：' : null}{userName}</div>
            <div>绑定手机号： {tel}</div>
            <div>绑定email： {email}</div>
          </div>
          <div className="avatar">
            <img className={`${vip ? 'vip' : ''}`} src={avatar} alt="" />
            {remainDay < 6 && vip ? <div>会员还有{remainDay}天</div> : ''}
          </div>
        </div>
        <div className="lottery-tips">
          <div>剩余积分：{pointCount} 分</div>
          <a href="/interest.html">前往积分权益中心</a>
        </div>
      </div>
    );
  }
}
export default App;



