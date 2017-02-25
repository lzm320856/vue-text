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
                    <div  v-if="Array.isArray(resume[item.field])">
                        <div class="subItem" v-for="(subitem,index) in resume[item.field]">
                            <div class="form-group" v-for="value in subitem">
                                <label :for="value.id+index">{{value.title}}</label>
                                <input :id="value.id+index" type="text" v-model="value.context" :placeholder="value.preContext"/>
                            </div>
                            <hr />
                        </div>
                        <div class="option-btn">
                            <div class="btn" @click="addContent($event)" >更多</div>
                            <div class="btn" @click="removeContent($event)">删除</div>
                        </div>
                    </div>
                    <div class="form-group" v-else v-for="value in resume[item.field]" >
                        <label :for="value.id">{{value.title}}</label>
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
        min-width: 35%;
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
            .option-btn{
                display: flex;
                .btn{
                    display: inline-block;
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
    }
</style>
<script>
    export default{
        name:"resumeEditor",
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
                var id = e.target.parentNode.parentNode.parentNode.id;
                var obj = this.resume[id][0];
                var newObj = this.cloneObj(obj);
                this.resume[id].push(newObj);
            },
            removeContent:function(e){
                var id = e.target.parentNode.parentNode.parentNode.id;
                this.resume[id].pop();
            },
            add(){
              this.$store.commit("increment")
            }
        },
        computed:{
            selected:{
                get(){
                   return this.$store.state.selected;
                },
                set(value){
                  return this.$store.commit("switchTab",value);
                },
            },
            resume(){
                return this.$store.state.resume;
            }
        }
    }
</script>
