<template>
    <div id="topBar">
        <div class="wrap">
            <span class="logo">Resume</span>
        </div>
    </div>
</template>
<style>
    #topBar{
        background:#fff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    }
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
        font-size:24px;
        font-family:Arial;
        font-weight:bold;
        color:#333;
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
