<template>
  <div class="idnex">
    <mt-header title="主页">
      <div slot="right">
        <router-link to="login">登陆</router-link>
        <router-link to="register">注册</router-link>
      </div>
    </mt-header>
    <!-- nav 导航 -->
    <mt-navbar style="margin-top: 40px" fixed v-model="navactive">
      <mt-tab-item :id="`${i + 1}`" v-for="(val, i) of category" :key="i">{{
        val.category_name
      }}</mt-tab-item>
      <!-- <mt-tab-item id="1">电商</mt-tab-item>
      <mt-tab-item id="2">电商</mt-tab-item>
      <mt-tab-item id="3">网页</mt-tab-item>
      <mt-tab-item id="4">交互</mt-tab-item> -->
    </mt-navbar>
    <!-- 导航面板 -->
    <mt-tab-container style="margin-top: 87px; margin-bottom: 60px">
      <mt-tab-container-item
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="120"
        :infinite-scroll-immediate-check="true"
      >
        <mt-swipe :style="{ height: h }">
          <mt-swipe-item>
            <img
              src="/resource/lbt/0b9734d25fcc99a64ef8e6f0e84b1e7.jpg"
              alt=""
            />
          </mt-swipe-item>
          <mt-swipe-item>
            <img
              src="/resource/lbt/06f9e4083ff621b9e708c54c513e158.jpg"
              alt=""
            />
          </mt-swipe-item>
          <mt-swipe-item>
            <img
              src="/resource/lbt/d66ff695c6523a5f210e5faa9180c05.jpg"
              alt=""
            />
          </mt-swipe-item>
        </mt-swipe>
        <div >
          <div class="wenzhang" v-for="(val, i) of articlesText" :key="i">
            <router-link :to="`/About?id=${val.id}`" class="nav_mian">
              <div class="wenzhang">
                <h3>{{ val.subject }}</h3>
                <div>
                  <img
                    v-if="val.image"
                    :src="'/resource/articles/' + val.image"
                    alt=""
                  />
                  <span>{{ val.description }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" class="bottomCss">
      <mt-tab-item id="index">
        <svg
          slot="icon"
          t="1633658432941"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2556"
          width="200"
          height="200"
        >
          <path
            d="M791.272727 333.265455l83.572364 61.300363a23.272727 23.272727 0 1 1-27.508364 37.515637L814.545455 
            408.040727V808.96a69.818182 69.818182 0 0 1-69.818182 69.818182H279.272727a69.818182 69.818182 0 0 1-69.818182-69.818182V408.040727l-32.791272
             24.040728a23.272727 23.272727 0 1 1-27.508364-37.515637L484.468364 148.642909a46.545455 46.545455 0 0 1 55.063272 0L744.727273 299.124364V227.141818a23.272727 
             23.272727 0 0 1 46.545454 0v106.123637z m-535.272727 40.657454V808.96a23.272727 23.272727 0 0 0 23.272727 23.272727h116.363637v-162.909091a116.363636 116.363636 
             0 0 1 232.727272 0v162.909091h116.363637a23.272727 23.272727 0 0 0 23.272727-23.272727V373.922909L512 186.181818l-256 187.741091z m186.181818 
             458.309818h139.636364v-162.909091a69.818182 69.818182 0 1 0-139.636364 0v162.909091z"
            fill="#21A3DD"
            p-id="2557"
          ></path>
        </svg>

        首页
      </mt-tab-item>
      <mt-tab-item id="vip福利">
        <svg
          slot="icon"
          t="1633658691637"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9437"
          width="200"
          height="200"
        >
          <path
            d="M858.7 373.6H161.9c-34.7 0-59.6 28.3-59.6 63v148.3l42-1.3v313.6c0 34.7 28.3 63 63 
          63h609.4c34.7 0 63-28.3 63-63V583.4h-30.9l-11.1 0.1v313.7c0 11.6-9.4 21-21 21H606.3V583.4h242.4l30.9-0.2v-0.4l42 0.6V436.6c0.1-34.7-28.2-63-62.9-63z 
          m-441 544.6H207.3c-11.6 0-21-9.4-21-21V583.8l-42-0.4h273.4v334.8z m0-378.6H144.3v-103c0-11.6 6-21 17.6-21h255.8v124z m147.1 378.6H459.3V415.6h105.4v502.6z 
          m314.9-378.6H606.3v-124h252.4c11.6 0 21 9.4 21 21v103z m-566-208.7h396.5c33 0 62.2-13.5 84.3-39.2 25.5-29.5 38.4-72.6 32.9-109.9-11-74.5-61.9-117.9-136.9-115.4-73.4 
          2.4-150.8 109.5-178.3 151.3-23.4-35.2-104.4-148.8-178.8-151.3-75.3-2.5-125.9 41-136.9 115.5-5.5 37.3 7.4 80.4 32.9 109.9 22.1 25.6 51.2 39.1 84.3 39.1z 
          m375.9-217.4l4.7-0.1c64.2 0 76 38 81.3 74.4 3.7 25.3-5.5 56-23.1 76.3-9.9 11.5-27.2 25.1-53.6 25.1H541.7l-6.3-20.3c3.9-8.5 94.7-150.6 154.2-155.4z m-441.4 
          74.3c5.4-36.4 21.2-71.7 85.4-71.7l4.7 0.1c61.6 2.7 140.9 145.6 150.2 152.8l-6.3 20.3H324.9c-26.4 0-43.8-13.7-53.7-25.1-17.5-20.4-26.8-51.1-23-76.4z"
            p-id="9438"
            fill="#1296db"
          ></path>
        </svg>
        vip福利
      </mt-tab-item>
      <mt-tab-item id="我的">
        <svg
          slot="icon"
          t="1633658559497"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6968"
          width="200"
          height="200"
        >
          <path
            d="M899.640668 897.714805c-7.238868-108.132766-60.680011-208.738092-146.610102-276.03173l-5.16565-3.568269-0.047072 
          0.069585c-4.88731-2.988054-10.458189-4.586458-16.192797-4.586458-19.701714 0-31.458479 9.498328-31.458479 25.411763 0 9.266038 4.285606 17.975397 
          11.477402 23.882943l-0.080841 0.13917 4.562922 3.266393c72.065316 51.518351 112.638383 129.652895 120.584356 232.273111l0.084934 1.119497c-0.071631 
          0.862647-0.116657 1.731434-0.116657 2.612501 0 17.340947 14.058181 31.400151 31.400151 31.400151 16.759709 0 30.449499-13.131065 31.350009-29.665647l0.624217 
          0L899.640668 897.714805zM798.515502 371.795794c0-156.107407-128.529305-283.119149-286.524712-283.119149s-286.525736 127.011742-286.525736 283.119149c0 84.110653 
          37.19104 162.570609 102.377692 216.660528-117.01711 62.452377-194.688097 181.588755-203.479321 313.118394l-0.36225 5.482875c-0.007163 0.113587-0.016373 
          0.226151-0.022513 0.340761l-0.032746 0.499373 0.019443 0c-0.008186 0.267083-0.019443 0.533143-0.019443 0.802272 0 14.702863 11.918447 26.622334 26.622334 
          26.622334 14.702863 0 26.622334-11.918447 26.622334-26.622334 0-0.26913-0.01228-0.535189-0.019443-0.802272l0.553609 0 0.417509-5.467525c9.647731-124.997875 
          88.871073-234.450706 202.112184-279.552927 33.809013 15.705704 85.420485 32.060183 131.714857 32.060183 42.889833 0 84.540442-9.451256 
          124.198673-28.307719l29.048593-16.863063 23.720238-15.566534C758.567675 539.996634 798.515502 458.919061 798.515502 371.795794zM511.989767 
          597.931115c-126.247332 0-228.949412-101.461833-228.949412-226.157833 0-124.673487 102.701057-226.111784 228.949412-226.111784 126.259612 0 228.972948 
          101.438297 228.972948 226.111784C740.961692 496.469282 638.249379 597.931115 511.989767 597.931115z"
            p-id="6969"
            fill="#1296db"
          ></path>
        </svg>

        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      active: "",
      selected: "index",
      navactive: "1",
      h: "210px",
      //标题数据
      category: "",
      //文章数据
      articlesText: "",
      //分页
      page: 1,
      loading: false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {
    selected(newval, oldval) {
      console.log(`newval:${newval}`);
      console.log(`oldval:${oldval}`);
      if (newval == "me") {
        // 通过js 方式切换路由地址
        this.$router.push("/me");
      }
    },
    navactive(newval, oldval) {
      window.scrollTo(0, 0);
      this.page = 1;
      this.loadArticles(this.navactive, this.page, (result) => {
        this.articlesText = result;
      });
      // console.log(this.papes);
    },
  },
  // 组件方法
  methods: {
    initSwipeHeight() {
      let picw = 1242; // 图片的宽
      let pich = 698;
      let screenw = window.screen.width; // 屏幕宽
      let swipeh = (pich * screenw) / picw + "px";
      // console.log(swipeh);
      this.h = swipeh;
    },
    loadMore() {
      this.loading = true;
      // setTimeout(() => {
      //   this.loading = false;
      //   this.page++;
      //   this.axios
      //   .get(`/articles?cid=${this.navactive}&page=${this.page}`)
      //   .then((result) => {
      //     this.articlesText.push(...result.data.results)
      //     if (result.data.results.length<20) {
      //       this.loading = true;
      //     }
      //     console.log("页面类别"+this.navactive,"页数"+this.page,result.data.results);
      //   });
      // }, );
      setTimeout(() => {
        this.loading = false;
        this.page++;
        this.axios;
        this.loadArticles(this.navactive, this.page, (result) => {
          this.articlesText.push(...result);
          if (result.length < 20) {
            this.loading = true;
          }
        });
      }, 1000);
    },
    loadArticles(cid, page, callback) {
      this.$indicator.open({ text: "加载中...", spinnerType: "snake" });
      this.axios
        .get("/articles", { params: { cid: cid, page: page } })
        .then((result) => {
          let results = result.data.results;
          this.$indicator.close();
          callback(results);
        });
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {
    //
    window.scrollTo(0, 0);
    // 动态计算当前屏幕宽度下 ，轮播图的高度  ，设置data里的 h 属性
    this.initSwipeHeight();
    //类别请求
    this.axios.get("/category").then((result) => {
      // console.log(result);
      this.category = result.data.results;
    });
    //文章请求
    this.loadArticles(this.navactive, this.page, (result) => {
      this.articlesText = result;
    });
    // this.axios
    //   .get("/articles", { params: { cid: this.navactive, page: 1 } })
    //   .then((result) => {
    //     // console.log(result.data);
    //     this.articlesText = result.data.results;
    //     // console.log(this.articlesText);
    //   });
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.mint-swipe img {
  width: 100%;
}
.idnex header {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
}
.bottomCss {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.idnex header a {
  color: #ffff;
}
.nav_mian {
  height: 120px;
  color: #000;
  /* border: 1px solid #000; */
}
.nav_mian .wenzhang {
  /* border: 1px solid rgb(181, 77, 77); */
  margin: 8px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgb(186, 186, 186);
}
.nav_mian .wenzhang h3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: bold;
}
.nav_mian .wenzhang > div {
  margin-top: 10px;
}
.nav_mian .wenzhang > div > img {
  float: left;
  width: 80px;
  height: 50px;
  margin-right: 15px;
}
.nav_mian .wenzhang > div > span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
