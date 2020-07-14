<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="isShowFirst=true" @mouseleave="firstHide">
          <h2 class="all">全部商品分类</h2>
          <div class="sort"  @mouseleave="currentIndex=-2" @click="toSearch"  v-if="isShowFirst">
            <div class="all-sort-list2">
              <div class="item"
              v-for="(c1, index) in baseCategoryList" 
              :key="c1.categoryId"
              :class="{item_on:currentIndex===index}"
              @mouseenter="showSubCategory(index)"
              >
                <h3>
                  <a href="javascript:;"
                  :data-categoryName="c1.categoryName"
                  :data-categoryId="c1.categoryId"
                  >{{c1.categoryName}}</a>
                  <!-- <router-link :to="{path:'/search',query:{categoryName:c1.categoryName,categoryId:c1.categoryId}}">
                  {{c1.categoryName}}</router-link> -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2, index) in c1.categoryChild" 
                    :key="c2.categoryId">
                      <dt>
                        <a href="javascript:;"
                        :data-categoryName="c2.categoryName"
                        :data-categoryId="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      <!-- <router-link :to="{path:'/search',query:{categoryName:c2.categoryName,categoryId:c2.categoryId}}">
                      {{c2.categoryName}}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryChild">
                          <a href="javascript:;"
                          :data-categoryName="c3.categoryName"
                          :data-categoryId="c3.categoryId"
                          >{{c3.categoryName}}</a>
                          <!-- <router-link :to="{path:'/search',query:{categoryName:c3.categoryName,categoryId:c3.categoryId}}">
                          {{c3.categoryName}}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入lodash
  // import _ from 'lodash'  // 全部引入lodash会
  // 按需引入需要的函数即可
  import throttle from 'lodash/throttle'  
  // 引入vuex的辅助函数
  import { mapState } from 'vuex'
  export default {
    name: 'TypeNav',
    data() {
      return {
        currentIndex:-2 , // 用来存储鼠标进入的时候的索引值
        isShowFirst:true  // 默认当前分类列表是显示的
      }
    },
    computed: {
      // 通过vuex的辅助函数,获取homt模块中的状态数据:三级分类信息数据--数组
      ...mapState({
        baseCategoryList: state => state.home.baseCategoryList
      })
    },
    methods: {
     // 鼠标进入的事件:通过节流来实现
      showSubCategory: throttle(function(index) {
        this.currentIndex = index
      }, 200),
       // 通过事件委托的方式,来实现点击a标签进行跳转,并传参
      toSearch(event){
        // console.dir(event.target);
        const target = event.target
        if(target.nodeName==='A'){
          // 解构需要的参数数据
          const {
            categoryname,
            category1id,
            category2id,
            category3id
          } = target.dataset
          // 定义query对象用来存储路由需要传递的参数数据
          const query = {
          categoryName: categoryname,
          }
          if (category1id) {
            query.category1Id = category1id
          } else if (category2id) {
            query.category2Id = category2id
          } else if (category3id) {
            query.category3Id = category3id
          }

          // 跳转界面,并传递参数数据
          this.$router.push({ path:'/search',query})
          this.currentIndex = -2
          this.isShowFirst = false
        }
      },
      // 鼠标离开事件，隐藏分类列表
      firstHide(){
        if (this.$route.path !== '/') {
         this.isShowFirst = false
        }
      }
    },
    mounted() {
      // 提交对应的action
      // this.$store.dispatch('getBaseCategoryList')
      // 当前组件加载完成之后，获取当前路由跳转是不是根路径
      if (this.$route.path !== '/') {
        // 只要不是首页中用到了TypeNav组件就隐藏分类列表
        this.isShowFirst = false
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;

        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }
            }

            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              _height: 200px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            &.item_on {
              background-color: #ddd;
              .item-list {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>