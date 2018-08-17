import intercepter from './intercepter'
// import Paging from '../components/paging.vue'
// import * as m_utils from '@/utils'
export default {
    install(Vue, opts) {
        intercepter(Vue, opts)
        // Vue.component('Paging', Paging)
        Vue.mixin({
            data() {
                return {
                    fromData: {},
                    _fromData: '', //记录初始数据
                    m_list: [],
                    m_page: {
                        page: 1,
                        limit: 20,
                        total: 10
                    },
                    m_isadd: true, //是否处于添加状态
                    m_editId: '', //编辑id
                    m_delId: [], //删除id (勾选id)
                    m_checkData: [], //勾选的数据
                    m_editData: {}, //编辑数据(选中的数据)
                    m_show: false, //编辑 新增谈框(弹出框)
                    m_loading:false

                }
            },
            computed: {
            },
            mounted() {
               
            },
            methods: {
                
            },
            filters: {
                
            },
           
        })
    }

}
