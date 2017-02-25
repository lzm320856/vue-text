import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        selected:"profile",
        resume:{
            config:[
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' }
            ],
            profile:{
                name:{ id:"name", title:"姓名", context:"张三",preContext:"张三"},
                birthday:{ id:"birthday" , title:"出生日期", context:"1993-01-01",preContext:"1993-01-01"},
                sex:{id:"sex", context:"男", title:"性别", preContext:"男"},
                location:{id:"location",context:"北京", title:"位置" ,preContext:"上海"},
                position:{id:"position",context:"挖掘机培训公司CEO", title:"目标职位" ,preContext:"画家"},
            },
            workHistory:[
              {
                  workTime:{id:"workTime",context:"2013-2015",title:"工作时间" ,preContext:"2008-2013"},
                  company:{id:"company",context:"火星挖掘公司",title:"公司" ,preContext:"火星创业"},
                  duty:{id:"duty",context:"负责火星矿石挖掘（挖掘机1.0），存储以及后续的样本分析工作。",title:"工作内容" ,preContext:"保密"}
              }
            ],
            education:[
              {
                  studyTime:{id:"studyTime",context:"2008-2012",  title:"学习时间", preContext:"2008.9-2012.6"},
                  major:{id:"major",context:"挖掘机",title:"专业" ,preContext:"挖掘机"},
                  school:{id:"school",context:"蓝翔职业技术学院",title:"学校" ,preContext:"蓝翔"},
                  level:{id:"level",context:"专科",title:"学历",preContext:""}
              }
            ],
            projects:[
              {
                  projectName:{id:"project-name",context:"挖掘机1.0",title:"项目名称", preContext:"哈哈哈"},
                  projectInfo:{id:"project-info",context:"创建挖掘机1.0，作为生活的调味品，可用于炒菜，打麻将当然挖掘功能也获得了巨大的提升",title:"项目介绍", preContext:"啦啦啦"}
              }
            ],
            awards:[
              {
                awardsTime:{id:"awards-time",context:"2012.6",title:"获奖时间",preContext:"2012.6"},
                awardsName:{id:"awards-name",context:"康师傅冰红茶再来一瓶",title:"获奖名称",preContext:"康师傅冰红茶再来一瓶"}
              }
            ],
            contacts:{
                tel:{id:"tel",context:"1xxxxxxxxx",title:"电话",preContext:""},
                email:{id:"email",context:"xxx@gmail.com",title:"邮箱",preContext:""}
            }
        }
    },
    mutations: {
        increment(state){
            state.count++
        },
        switchTab(state,payload){
            state.selected = payload;
        }
    }
})

