/**
 * Created by zm on 2017/1/10.
 */
import Vue from "vue";
import Store from "./storage";
export default function bar() {
  var todoList = new Vue({
    el:"#todo-list",
    data:{
      item:{
        name:"",
        createTime:"",
        isFinished:""
      },
      list:Store.fectch("todos") || [],
      inputItem: Store.fectch("input") || ""
    },
    watch:{
      list:{
        handler:function (items) {
          Store.save("todos",items);
        },
        deep:true
      },
      inputItem:{
        handler:function (items) {
          Store.save("input",items);
        },
        deep:true
      }
    },
    methods:{
      addItem:function(){
        var that = this;
        if(!this.inputItem) return;
        var date = new Date();
        var time = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日" + date.getHours() + "时";
        var obj = {
          name:this.inputItem,
          isFinished:false,
          createTime:time
        };
        this.list.push(obj);
        obj = {};
        this.inputItem = "";
      },
      removeItem:function(item){
        var index = this.list.indexOf(item);
        this.list.splice(index,1);
      },
      removeList:function(){
        this.list = [];
      },
      finished:function(item){
        item.isFinished = !item.isFinished;
      }
    }
  });
};