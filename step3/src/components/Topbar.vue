<template>
    <div id="topBar">
        <div class="wrap">
            <span class="logo">Resumer</span>
            <div class="title-option">
              <span class="btn btn-green">保存</span>
              <span class="btn btn-gray">预览</span>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    #topBar{
        .wrap{
            display:flex;
            justify-content:space-between;
            align-items:center;
            min-width:1024px;
            max-width: 1440px;
            margin:0 auto;
            padding:0 16px;
            height:60px;
            .logo{
                font-size:24px;
                color:#000000;
                letter-spacing:0;
            }
            .title-option{
                .btn{
                    display: inline-block;
                    font-size:20px;
                    text-align:center;
                    line-height:32px;
                    width:72px;
                    height:32px;
                    cursor:pointer;
                }
                .btn-green{
                    color:#fff;
                    background: #02af5f;
                }
                .btn-gray{
                    color: #000;
                    background:#ddd;
                }
            }
       }
    }

</style>
<script>
    export default{
        name:"topbar",
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>
