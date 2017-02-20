<template>
    <div id="resumeEditor">
        <section class="UIColumn">
            <nav>
                <ol>
                  <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
                      <svg class="icon">
                          <use :xlink:href="`#icon-${item.icon}`"></use>
                      </svg>
                  </li>
                </ol>
            </nav>
        </section>
        <section class="inputColumn">
            <ol class="panels">
                <li :id="item.field"  v-for="item in resume.config" v-show="item.field === selected" >
                    <div   v-if="Array.isArray(resume[item.field])">
                        <div class="subItem" v-for="(subitem,index) in resume[item.field]">
                            <div class="form-group" v-for="(value,key) in subitem">
                                <label :for="value.id+index">{{key}}</label>
                                <input :id="value.id+index" type="text" v-model="value.context" :placeholder="value.preContext"/>
                            </div>
                            <hr />
                        </div>
                        <div class="btn" @click="addContent($event)" >更多</div>
                        <div class="btn" @click="removeContet($event)">删除</div>
                    </div>
                    <div class="form-group" v-else v-for="(value,key) in resume[item.field]" >
                        <label :for="value.id">{{key}}</label>
                        <input type="text" :id="value.id" v-model="value.context" :placeholder ="value.preContext"/>
                    </div>
                </li>
            </ol>
        </section>
    </div>
</template>
<style lang="less">
    #resumeEditor{
        display:flex;
        .UIColumn{
            color: #fff;
            width:20%;
            background:#1f2126;
            .active{
                background: #fff;
                color: #1f2126;
            }
            nav{
                margin-top: 12px;
                li:hover{
                    background: #fff;
                    .icon{
                      color: #1f2126;
                    }
                }
                li{
                    padding: 16px 0;
                    .icon{
                      display:block;
                      width: 26px;
                      height: 26px;
                      margin: 0 auto;
                      font-size: 28px;
                    }
                }
            }
        }
        .inputColumn{
            overflow-y:scroll;
            width: 80%;
            padding: 8px 23px;
            font-size: 20px;
            color: #666;
            .form-group{
                margin-top: 16px;
                input{
                    display: block;
                    width: 100%;
                    margin-top: 16px;
                    padding: 5px 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: 0;
                }
                input:focus{
                    border: 1px solid #666;
                    box-shadow: 0 0 1px 1px #666;
                }
            }
            .subItem{
                hr{
                    margin: 20px auto;
                }
            }
            .btn{
                font-size:20px;
                text-align:center;
                line-height:32px;
                width:72px;
                height:32px;
                margin: 0 auto;
                border-radius: 5px;
                cursor:pointer;
                color: #fff;
                background: #1f2126;
            }
            .btn:hover{
                color: #1f2126;
                background: #fff;
                border: 2px solid #1f2126;
            }
        }
    }
</style>
<script>
    export default{
        name:"resumeEditor",
        data:function(){
            return{
                selected:"profile",
                resume:{
                    config:[
                      { field: 'profile', icon: 'id' },
                      { field: 'workHistory', icon: 'work' },
                      { field: 'education', icon: 'book' },
                      { field: 'projects', icon: 'heart' },
                      { field: 'awards', icon: 'cup' },
                      { field: 'contacts', icon: 'phone' },
                    ],
                    profile:{
                        姓名:{ id:"name", context:"",preContext:"张三"},
                        出生日期:{ id:"birthday" , context:"",preContext:"1993-01-01"},
                        性别:{id:"sex", context:"",preContext:"男"},
                        工作年限:{id:"workYears",context:"三年",preContext:"在职"},
                        所在城市:{id:"location",context:"北京",preContext:"上海"},
                        期望城市:{id:"city",context:"北京",preContext:"上海"},
                        期望职位:{id:"position",context:"前端工程师",preContext:"画家"},
                    },
                    workHistory:[
                        {
                            工作时间:{id:"workTime",context:"",preContext:"2008-2013"},
                            公司:{id:"company",context:"",preContext:"火星创业"},
                            工作职责:{id:"duty",context:"",preContext:"保密"}
                        },
                    ],
                    education:[
                        {
                            学习时间:{id:"studyTime",context:"",preContext:"2008.9-2012.6"},
                            专业:{id:"major",context:"",preContext:"挖掘机"},
                            学校:{id:"school",context:"",preContext:"蓝翔"},
                        }
                    ],
                    projects:[
                        {
                            项目名称:{id:"project-name",context:"",preContext:"哈哈哈"},
                            项目介绍:{id:"project-info",context:"",preContext:"啦啦啦"},
                        }
                    ],
                    awards:[
                        {
                            获奖时间:{id:"awards-time",context:"",preContext:"2012.6"},
                            奖项:{id:"awards-name",context:"",preContext:"康师傅冰红茶再来一瓶"},
                        }
                    ],
                    contacts:{
                        电话:{id:"tell",context:"1xxxxxxxxx",preContext:""},
                        邮箱:{id:"email",context:"xxx@gmail.com",preContext:""},

                    }
                }
            }
        },
        methods:{
            cloneObj:function(obj){                       //深拷贝
                var newObj = {};
                if(typeof obj !== 'object') return
                else{
                    for(var key in obj){
                      newObj[key] = typeof obj[key] === 'object' ? this.cloneObj(obj[key]) : obj[key];
                    }
                    return newObj
                }
            },
            addContent:function(e){                   //addMore
                var id = e.target.parentNode.parentNode.id;
                var obj = this.resume[id][0];
                var newObj = this.cloneObj(obj);
                this.resume[id].push(newObj);
            }
        },
    }
</script>
