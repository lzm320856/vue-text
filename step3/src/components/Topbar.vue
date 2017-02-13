<template>
    <div id="topBar">
        <div class="wrap">
            <span class="logo">Resumer</span>
            <span class="btn">保存</span>
        </div>
    </div>
</template>
<style>
    #topBar>.wrap{
        display:flex;
        justify-content:space-between;
        align-items:center;
        min-width:1024px;
        max-width:1440px;
        margin:0 auto;
        padding:0 16px;
        height:60px;
    }
    #topBar .logo{
        font-family:Arial;
        font-size:24px;
        color:#000000;
        letter-spacing:0;
    }
    #topBar .btn{
        font-size:20px;
        color:#fff;
        text-align:center;
        line-height:32px;
        background:#02af5f;
        width:72px;
        height:32px;
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
