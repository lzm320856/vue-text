<template>
    <div id="resumeEditor">
      <div class="UIColumn"></div>
      <div class="inputColumn"></div>
    </div>
</template>
<style>
    #resumeEditor{
      display:flex;
    }
    #resumeEditor .UIColumn{
      width:20%;
      background:#1f2126;
    }
    #resumeEditor .inputColumn{
      flex-grow:1;
    }
</style>
<script>
    export default{
        name:"resumeEditor",
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>
