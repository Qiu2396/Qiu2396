<template>
    <div class="search">
        <van-sticky ref="searchtop">
            <form action="/"  sticky>
                <van-search
                    v-model="value"
                    show-action
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                    @cancel="onCancel"
                />
            </form>
        </van-sticky>
       
        <div class="box" :style="{
                height:height
            }">
            <cineaslist v-if="value" :cineaslist='computedlist'></cineaslist>
        </div>
    </div>
</template>
<script>
import cineaslist from '@/components/cinmeaslist'
import obj from '@/util/mixin'
// console.log(a)
export default {
    mixins:[obj],
    // beforeCreate() {
       
        
    // },
    mounted() {
         this.height = document.documentElement.clientHeight - this.$refs.searchtop.$el.offsetHeight +'px'
        // if(this.$store.state.cinemaslist.length===0){
        //     this.$store.dispatch('getcinemasdata').then(res=>{
        //         console.log(this.computedlist,'111')
        //         console.log('111')


        //     })
        // }else{
            
        // }
        // console.log("111")

    },
    
    //计算属性
    computed:{
        computedlist(){
            return this.$store.state.cinemaslist.filter(item=>{
                return item.name.includes(this.value) ||  item.address.includes(this.value)
            })
        }
    },
    components:{
        cineaslist
    },
    data() {
        return {
            value: '',
            datasearch:[],
            height:''
        };
    },
    methods: {
        onSearch() {
       
        },
        onCancel() {
            this.$router.push('/Cinemas')
        },
    },
}
</script>
<style lang="scss" scoped>
.box{
    overflow: hidden;
    position: relative; //解决滚动条超出这个box
}
</style>