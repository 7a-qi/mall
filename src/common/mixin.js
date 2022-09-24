import { debounce } from './debounce';
import BackTop from "components/content/backTop/BackTop";

export const itemListMixin = {
  data() {
    return {
      itemimglist: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.itemimglist = () => {
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemimglist);
  },
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      // 点击回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentTop(position) {
      // isShowBackTop大于等于1000等于true进行显示小于进行隐藏
      this.isShowBackTop = -position.y > 1000;
    }
  },
}