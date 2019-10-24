<template>
  <div class="box">
    <!-- topbar部分 -->
    <div class="topbar">
      <div class="topbarleft">
        <span class="log">电影搜索</span>
        <icon type="search" size="22" color="#42bd56" />
      </div>
      <div class="topbarright">打开Pure App</div>
    </div>
    <!-- 影院热映部分 -->
    <div class="contenttop">
      <div class="contenttop_l">正在上映</div>
      <div class="contenttop_r">更多</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <view class="scroll-view-item_H" v-for="(item, index) in movielist" :key="index">
          <img :src="item.images.large" alt />
          <div class="title">{{item.title}}</div>
          <div class="directors">{{item.directors[0].name}}</div>
          <div class="stars" v-if="item.num !== 0">
            <img v-if="item.num >= 1" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="item.num >= 2" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="item.num >= 3" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="item.num >= 4" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="item.num >= 5" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <span>{{item.rating.average}}</span>
          </div>
          <view v-else class="stars">暂无评分</view>
          <div class="combination">
            <span class="genres">{{item.genres[0]}}</span>
            <span class="durations">{{item.durations[0]}}</span>
          </div>
          <div class="pubdates">{{item.pubdates[0]}}</div>
        </view>
      </scroll-view>
    </div>
    <!-- 即将上映部分 -->
    <div class="contenttop">
      <div class="contenttop_l">即将上映</div>
      <div class="contenttop_r">更多</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <view class="scroll-view-item_H" v-for="(item, index) in comingSoonlist" :key="index">
          <img :src="item.images.small" alt />
          <div class="title">{{item.title}}</div>
          <div class="releaseDate">上映日期：</div>
          <div class="releaseDate">{{item.pubdate}}</div>
        </view>
      </scroll-view>
    </div>
    <!-- 本周口碑榜 -->
    <div class="contenttop">
      <div class="contenttop_l">本周口碑榜 - Top10</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <div
          class="scroll-view-item_H"
          v-for="(items, indexs) in reputationListOfTheWeekList"
          :key="indexs"
        >
          <img :src="items.subject.images.large" alt />
          <div class="title">{{items.subject.title}}</div>
          <div class="directors">{{items.subject.directors[0].name}}</div>
          <div class="stars" v-if="items.num !== 0">
            <img v-if="items.num >= 1" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 2" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 3" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 4" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 5" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <span>{{items.subject.rating.average}}</span>
          </div>
          <view v-else class="stars">暂无评分</view>
          <div class="combination">
            <span class="genres">{{items.subject.genres[0]}}</span>
            <span class="durations">{{items.subject.durations[0]}}</span>
          </div>
          <div class="pubdates">{{items.subject.pubdates[0]}}</div>
        </div>
      </scroll-view>
    </div>
    <!-- 新片榜 -->
    <div class="contenttop">
      <div class="contenttop_l">影片上新</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <div class="scroll-view-item_H" v-for="(items, indexs) in listOfNewList" :key="indexs">
          <img :src="items.images.large" alt />
          <div class="title">{{items.title}}</div>
          <div class="directors">{{items.directors[0].name}}</div>
          <div class="stars" v-if="items.num !== 0">
            <img v-if="items.num >= 1" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 2" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 3" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 4" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 5" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <span>{{items.rating.average}}</span>
          </div>
          <view v-else class="stars">暂无评分</view>
          <div class="combination">
            <span class="genres">{{items.genres[0]}}</span>
            <span class="durations">{{items.durations[0]}}</span>
          </div>
          <div class="pubdates">{{items.pubdates[0]}}</div>
        </div>
      </scroll-view>
    </div>
    <!-- 北美票房榜 -->
    <div class="contenttop">
      <div class="contenttop_l">北美票房榜（{{northAmericanDate}}）</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <div
          class="scroll-view-item_H"
          v-for="(items, indexs) in northAmericanBoxOfficeList"
          :key="indexs"
        >
          <img :src="items.subject.images.large" alt />
          <div class="title">{{items.subject.title}}</div>
          <div class="directors">{{items.subject.directors[0].name}}</div>
          <div class="stars" v-if="items.num !== 0">
            <img v-if="items.num >= 1" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 2" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 3" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 4" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <img v-if="items.num >= 5" src="/static/images/f.png" alt />
            <img v-else src="/static/images/e.png" alt />
            <span>{{items.subject.rating.average}}</span>
          </div>
          <view v-else class="stars">暂无评分</view>
          <div class="combination">
            <span class="genres">{{items.subject.genres[0]}}</span>
            <span class="durations">{{items.subject.durations[0]}}</span>
          </div>
          <div class="pubdates">{{items.subject.pubdates[0]}}</div>
        </div>
      </scroll-view>
    </div>
    <!-- Top250 榜单 -->
    <div class="contenttop">
      <div class="contenttop_l">全球榜单</div>
      <div class="contenttop_r">更多</div>
    </div>
    <!-- 横向滚动栏 -->
    <div class="list">
      <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
        <div class="scroll-view-item_H" v-for="(items, indexs) in top250Lists" :key="indexs">
          <img :src="items.images.large" alt />
          <div class="title">{{items.title}}</div>
          <div class="directors">{{items.directors[0].name}}</div>
          <div class="combination">
            <span class="genres">{{items.genres[0]}}</span>
            <span class="durations">{{items.durations[0]}}</span>
          </div>
          <div class="pubdates">{{items.pubdates[0]}}</div>
        </div>
      </scroll-view>
    </div>
    <div class="foot">
      <h3>© Pure 视觉界 —— 2019.09</h3>
    </div>
  </div>
</template>

<script>
// 导入方法
import universalInterface from "../../utils/packaging";

export default {
  data() {
    return {
      movielist: [],
      comingSoonlist: [],
      reputationListOfTheWeekList: [],
      listOfNewList: [],
      northAmericanBoxOfficeList: [],
      northAmericanDate: "",
      top250Lists: []
    };
  },

  methods: {
    async gotohotmovies() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&city=深圳&start=0&count=20",
        header: {
          "content-type": "json"
        }
      });
      this.movielist = res.data.subjects;
      // 在每条数据中动态添加一个属性：星星的个数
      this.movielist.forEach(temp => {
        // 得到分数
        let score = temp.rating.average;
        // 计算星星个数：Math.ceil(分数 / 2)
        let num = Math.ceil(score / 2);
        // 将星星个数赋值给对象
        temp.num = num;
      });
    },

    async comingSoon() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/coming?apikey=0df993c66c0c636e29ecbb5344252a4a&city=深圳&start=0&count=20",
        header: {
          "content-type": "json"
        }
      });
      this.comingSoonlist = res.data.entries;
    },

    async reputationListOfTheWeek() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a",
        header: {
          "content-type": "json"
        }
      });
      this.reputationListOfTheWeekList = res.data.subjects;
      // 在每条数据中动态添加一个属性：星星的个数
      this.reputationListOfTheWeekList.forEach(temp => {
        // 得到分数
        let score = temp.subject.rating.average;
        // 计算星星个数：Math.ceil(分数 / 2)
        let num = Math.ceil(score / 2);
        // 将星星个数赋值给对象
        temp.num = num;
      });
    },

    async listOfNew() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a",
        header: {
          "content-type": "json"
        }
      });
      this.listOfNewList = res.data.subjects;
      // 在每条数据中动态添加一个属性：星星的个数
      this.listOfNewList.forEach(temp => {
        // 得到分数
        let score = temp.rating.average;
        // 计算星星个数：Math.ceil(分数 / 2)
        let num = Math.ceil(score / 2);
        // 将星星个数赋值给对象
        temp.num = num;
      });
    },

    async northAmericanBoxOffice() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/us_box?apikey=0df993c66c0c636e29ecbb5344252a4a",
        header: {
          "content-type": "json"
        }
      });
      this.northAmericanBoxOfficeList = res.data.subjects;
      this.northAmericanDate = res.data.date;
      // 在每条数据中动态添加一个属性：星星的个数
      this.northAmericanBoxOfficeList.forEach(temp => {
        // 得到分数
        let score = temp.subject.rating.average;
        // 计算星星个数：Math.ceil(分数 / 2)
        let num = Math.ceil(score / 2);
        // 将星星个数赋值给对象
        temp.num = num;
      });
    },

    async top250List() {
      var res = await universalInterface({
        url:
          "https://api.douban.com/v2/movie/top250?start=0&count=20&apikey=0df993c66c0c636e29ecbb5344252a4a",
        header: {
          "content-type": "json"
        }
      });
      this.top250Lists = res.data.subjects;
    }
  },

  created() {
    this.gotohotmovies();
    this.comingSoon();
    this.reputationListOfTheWeek();
    this.listOfNew();
    this.northAmericanBoxOffice();
    this.top250List();
  }
};
</script>

<style lang="less" scoped>
.box {
  box-sizing: border-box;
  .topbar {
    box-sizing: border-box;
    width: 100%;
    height: 94rpx;
    box-shadow: 0px 1px 5px 2px #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36rpx;
    .topbarleft {
      display: flex;
      align-items: center;
      color: #42bd56;
      .log {
        font-size: 22px;
        margin-right: 32rpx;
      }
    }
    .topbarright {
      width: 200rpx;
      height: 58rpx;
      font-size: 12px;
      text-align: center;
      line-height: 58rpx;
      background-color: #42bd56;
      border-radius: 10px;
      color: #fff;
    }
  }
  .contenttop {
    box-sizing: border-box;
    width: 100%;
    height: 98rpx;
    padding: 0 37rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contenttop_l {
      font-size: 16px;
      color: #111111;
    }
    .contenttop_r {
      font-size: 13px;
      color: #52c365;
    }
  }
  .list {
    padding: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    .scroll-view-item_H {
      width: 200rpx;
      margin-right: 16rpx;
      display: inline-block;
      text-align: center;
      color: #111111;
      img {
        width: 200rpx;
        height: 286rpx;
      }
      .title {
        font-weight: bold;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .directors {
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .pubdates {
        font-size: 10px;
        color: #ababab;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
      }
      .combination {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        .genres {
          padding: 1px 2px;
          font-size: 10px;
          color: #fff;
          background-color: rgb(190, 190, 190);
          margin-right: 5px;
        }
        .durations {
          padding: 1px 2px;
          font-size: 10px;
          color: #fff;
          background-color: rgb(190, 190, 190);
        }
      }

      .stars {
        color: #ababab;
        font-size: 12px;

        img {
          width: 25rpx;
          height: 25rpx;
          vertical-align: text-bottom;
        }

        span {
          margin-left: 5px;
        }
      }

      .releaseDate {
        text-align: left;
        font-size: 12px;
        color: #ababab;
      }
    }
    .scroll-view-item_H:first-child {
      margin-left: 37rpx;
    }
    .scroll-view-item_H:last-child {
      margin-right: 37rpx;
    }
  }

  .foot {
    height: 200rpx;
    background-color: rgb(50, 50, 50);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50rpx;
    h3 {
      color: #fff;
    }
  }
}
</style>

