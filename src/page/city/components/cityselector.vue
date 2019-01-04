<template>
  <div>
    <div class="city city-wap">
      <div class="city-list">
        <div class="block-60"></div>
        <div class="clearfix cityItem-div">
          <p>当前城市</p>
          <ul>
            <li class="ellipsis" @click="chooseCity(currentLocation)">
              <i class="iconfont" style="font-size:20px;color:#ffba33;padding-right:5px;">&#xe758;</i>
              {{currentLocation.cityName}}
            </li>
          </ul>
        </div>
        <div v-for="(item, index) in cityListData" :key="index" class="clearfix cityItem-div">
          <p :id="item.ckey">{{item.ckey}}</p>
          <ul>
            <li
              class="ellipsis"
              v-for="(ritem,key) in item.cityList"
              :key="key"
              @click="chooseCity(ritem)"
            >{{ritem.cityName}}</li>
          </ul>
        </div>
      </div>
      <div class="filter">
        <!-- <div class="hot_city">热门城市</div> -->
        <div v-for="(item,index) in cityListKey" :key="index" @click="switchKey(item)">{{item}}</div>
      </div>
      <div class="active-key" v-if="activeKey">{{activeKey}}</div>
    </div>
  </div>
</template>

<script>
import cityList from "./cityList.js";
import { setStore, getStore } from "../../../config/util";

export default {
  name: "CitySelector",
  data() {
    return {
      currentLocation: "",
      // 热门城市
      hotCity: [
        {
          cityName: "北京",
          pinyin: "Beijing"
        },
        {
          cityName: "重庆",
          pinyin: "Chongqing"
        },
        {
          cityName: "上海",
          pinyin: "Shanghai"
        },
        {
          cityName: "天津",
          pinyin: "Tianjin"
        }
      ],
      dataList: cityList,
      activeKey: ""
    };
  },
  mounted() {
    this.currentLocation = JSON.parse(getStore("location")) || {
      cityName: "北京",
      pinyin: "beijing"
    };
  },
  computed: {
    // 城市列表
    cityListData() {
      let map = {}; // 处理过后的数据对象
      let temps = []; // 临时变量
      this.dataList.map(item => {
        if (item.pinyin) {
          let ekey = item.pinyin.charAt(0).toUpperCase(); // 根据key值的第一个字母分组，并且转换成大写
          temps = map[ekey] || []; // 如果map里面有这个key了，就取，没有就是空数组
          temps.push({
            pinyin: item.pinyin,
            cityName: item.name
          });
          map[ekey] = temps;
        }
      });
      let list = [];
      for (let gkey in map) {
        list.push({
          ckey: gkey,
          cityList: map[gkey]
        });
      }
      list = list.sort(
        (li1, li2) => li1.ckey.charCodeAt(0) - li2.ckey.charCodeAt(0)
      );
      // 添加热门城市
      list.unshift({ ckey: "热门城市", cityList: this.hotCity });
      return list;
    },
    // 城市首字母
    cityListKey() {
      let cityListKey = [];
      this.cityListData.map(item => {
        cityListKey.push(item.ckey);
      });
      return cityListKey;
    }
  },
  methods: {
    //选择城市 跳转
    chooseCity(city) {
      // console.log(city);
      setStore("location", city);
      if (window.location.search) {
        // 如果有backurl,点击后返回backurl页面
        var args = this.getUrl(window.location.href);
        this.$router.replace(args.backurl);
        this.$router.go(-1);
        // this.$router.replace({path: "/"+args.backurl})
      } else {
        this.$router.replace({ path: "/index" });
        this.$router.go(-1);
      }
    },
    // 右侧城市首字母
    switchKey(key) {
      // 当前选中的字母
      this.activeKey = key;
      // 1秒后清空，让`active-key`隐藏
      setTimeout(() => {
        this.activeKey = "";
      }, 1000);
      // 获取当前字母来cityList中距离顶部的位置
      let targetTop = document.querySelector("#" + key + "").offsetTop;
      window.scrollTo({
        top: targetTop - 50, // 50是search的高度
        behavior: "smooth"
      });
    },
    // 获取链接中的参数
    getUrl(url) {
      // 先获取href问号以及问号后的内容
      if (url) {
        url = url.substr(url.indexOf("?"));
      } else {
        url = window.location.search;
      }
      //判断是否含有问号，有则说明含有参数
      if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        var obj = new Object();
        for (var i = 0; i < strs.length; i++) {
          obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
        return obj;
      }
      return null;
    }
  }
};
</script>

<style lang="scss">
@import "../../../style/mixin.scss";

.city-wap {
  color: #3b4f62;
  .clearfix {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  p {
    color: #999;
    line-height: 50px;
    padding: 0 20px;
    font-size: 28px;
  }
  .city-list {
    .block-60 {
      height: 100px;
    }
    ul {
      padding: 0 20px;
      margin-bottom: 8px;
      padding-right: 65px;
      background: #fff;
      li {
        @include wh(100%, 80px);
        line-height: 80px;
        border-bottom: 1px solid #eee; /*no*/
        color: #333;
        font-size: 32px;
        padding: 0 8px;
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
  .cityItem-div {
    &:nth-child(2),
    &:nth-child(3) {
      ul {
        background: none;
        border-bottom: 1px solid #eee; /*no*/
        padding-bottom: 20px;
      }
      li {
        display: inline-block;
        width: 200px;
        background: #fff;
        margin: 10px 15px 0 0;
        border-radius: 5px;
        text-align: center;
      }
    }
  }
  .filter {
    position: fixed;
    width: 55px;
    right: 6px;
    font-size: 22px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    div {
      font-weight: 700;
      color: $fc;
      margin-top: 1px;
    }
  }
  .active-key {
    position: fixed;
    // @include center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    line-height: 100px;
    z-index: 100;
    background: #dedede;
    color: #fff;
    border-radius: 100%;
    text-align: center;
    font-size: 40px;
  }
}
</style>
