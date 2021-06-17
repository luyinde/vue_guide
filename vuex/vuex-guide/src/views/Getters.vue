<template>
  <div>
    <div>Getters</div>
    <div>直接写$store.state.count的Count===》{{ $store.state.count }}</div>
    <div>从计算属性中获取的Count===》{{ count }}</div>
    <hr />

    <div>通过属性访问</div>

    <div>直接写$store.getters.descCount：{{ $store.getters.descCount }}</div>
    <div>计算属性：{{ descCount }}</div>
    <hr />
    <div>通过属性访问(带参数)</div>

    <div>
      直接写$store.getters.descCount：{{ $store.getters.descCountParms(999) }}
    </div>
    <!-- <div>计算属性mapGetter辅助函数对应写法：{{ descCountParms(888) }}</div> -->
    <div>计算属性：{{ descCountParms }}</div>
    <div>直接写参数是Getters:{{ $store.getters.descCountParmsGetter }}</div>
    <div>计算属性参数是Getters:{{ descCountParmsGetter }}</div>

    <hr />
    <div>通过方法访问</div>
    <!-- <div>{{ isBigCountBYId }}</div> -->
    <div>{{ isBigCountId(8000000) }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Getters",
  //   computed: {
  //     count() {
  //       return this.$store.state.count;
  //     },
  //     descCount() {
  //       return this.$store.getters.descCount;
  //     },
  //     descCountParms() {
  //       return this.$store.getters.descCountParms("88888");
  //     },
  //     descCountParmsGetter() {
  //       return this.$store.getters.descCountParmsGetter;
  //     },
  //     isBigCountBYId() {
  //       return this.$store.getters.isBigCountId(300000);
  //     },
  //   },
  //mapGetter辅助函数,字符串数组
  //   computed: {
  //     ...mapState(["count"]),
  //     ...mapGetters([
  //       "descCount",
  //       "descCountParms",
  //       "descCountParmsGetter",
  //       "isBigCountId",
  //     ]),
  //   },
  
  //mapGetter辅助函数,对象展开运算数组
  computed: {
    ...mapState({ count: "count" }),
    ...mapGetters({
      descCount: "descCount",
      descCountParms: "descCountParms",
      descCountParmsGetter: "descCountParmsGetter",
      isBigCountId: "isBigCountId",
    }),
  },
};
</script>