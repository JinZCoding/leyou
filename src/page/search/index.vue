<template>
  <div>
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      background="#fedb09"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    ></van-search>
    <ul>
      <li class="note-li" v-for="(list,index) in searchData" :key="index">
        <router-link :to="'/article/'+list.id">
          <span class="left sort">
            <i class="num">{{index+1}}</i>
          </span>
          <div class="note_title">
            <h3>{{list.title}}</h3>
            <i class="iconfont in">&#xe88e;</i>
          </div>
          <div class="bottom_info">
            <span class="author">{{list.author}}</span>
            <span class="address">{{list.address}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import AllHeader from "../../components/header/header";
import { Search } from "vant";

export default {
  data() {
    return {
      search: "",
      searchData: {},
      products: [
        // "id", "index", "title", "author", "address"
        //假数据
        {
          title: "初见“黄花风铃木”——新春佛山踏青采花骑游之旅",
          id: "20190320200853143",
          author: "大宝~",
          address: "北京"
        },
        {
          title: "「天鹅湖」太阳斜斜的照着俄罗斯的浪漫主义",
          id: "20190320201935101",
          author: "大宝~",
          address: "俄罗斯"
        }
      ]
    };
  },
  components: {
    AllHeader
  },
  methods: {
    onSearch() {
      console.log(this.search);
      var search = this.search;
      if (search) {
        this.searchData = this.products.filter(function(product) {
          console.log(product);
          return Object.keys(product).some(function(key) {
            console.log(key);
            return (
              String(product[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.search_content {
  padding: 90px 0;
}
.note-li {
  padding: 15px 0;
  // border-bottom: 1px solid #eee; /*no*/
  &:last-child {
    border: none;
  }
  .sort {
    @include wh(40px, 25px);
    // background-color: $fc;
    border-radius: 10px;
    background-color: #ddd;
    .num {
      display: inline-block;
      text-align: center;
      color: #666;
      font-size: 34px;
      font-weight: 500;
      line-height: 16px;
      width: 35px;
      border-radius: 3px;
      text-align: center;
      padding: 0 0 0 10px;
      vertical-align: middle;
    }
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    .sort {
      background-color: #ffd000;
    }
  }
  .note_title {
    margin-left: 55px;
    position: relative;
    // display: flex;
    // align-items: center;
    h3 {
      font-size: 34px;
      line-height: 44px;
      padding: 0 40px 0 0;
      display: -webkit-box !important;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .in {
      position: absolute;
      right: 8px;
      top: 0;
    }
  }
  .bottom_info {
    margin: 6px 0 0 55px;
    height: 38px;
    line-height: 38px;
    span {
      color: #999;
      font-size: 24px;
      padding: 0 18px;
      &:first-child {
        padding-left: 0;
        border-right: 1px solid #999;
      }
    }
  }
  i {
    color: #333;
  }
}
</style>
