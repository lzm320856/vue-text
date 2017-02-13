<template>
  <div class="page">
    <nav>
      <topbar/>
    </nav>
    <main>
      <resumeEditor/>
      <resumePreview/>
    </main>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'


import Topbar from './components/Topbar';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';


export default {
  name: 'app',
  components: {
    Topbar,ResumeEditor,ResumePreview
  }
}
</script>

<style>
    body{
      background:#ccc;
    }
    .page{
     height: 100vh;
     display: flex;
     flex-direction: column;
   }
   .page #topBar{
        background:#fff;
        box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    }
   .page>main{
     flex-grow: 1;
   }

   .page>main{
     min-width: 1024px;
     max-width: 1440px;
     margin: 16px 0;
     padding:0 16px;
     display: flex;
     justify-content: space-between;
     width:100%;
     align-self:center;
   }

   #resumeEditor{
     background:#fff;
     width: 35%;
   }
   #resumePreview{
     background:#fff;
     flex-grow:1;
     margin-left:16px;
   }
</style>
