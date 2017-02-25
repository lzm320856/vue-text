<template>
    <div id="resumePreview">
        <section class="personal-info">
            <div class="main-wraps">
                <h1>{{resume.profile.name.context}}</h1>
                <h3>{{resume.profile.position.title}}:{{resume.profile.position.context}}</h3>
            </div>
            <div class="side-wraps">
                <p>{{resume.profile.sex.context}}/{{resume.profile.location.context}}/{{resume.profile.birthday.context}}
                <p>{{resume.contacts.tel.title}}:{{resume.contacts.tel.context}}</p>
                <p>{{resume.contacts.email.title}}:{{resume.contacts.email.context}}</p>
            </div>
        </section>
        <section id="work" class="item" v-if="resume.workHistory[0]">
            <h3>工作经历</h3>
            <main>
                <ol>
                    <li v-for="item in resume.workHistory">
                        <div class="title">
                            <h4>{{item.workTime.context}}</h4>
                            <p>{{item.company.context}}</p>
                        </div>
                        <div class="content"><p>{{item.duty.context}}</p></div>
                    </li>
                </ol>
            </main>
        </section>
        <section id="education" class="item" v-if="resume.education[0]">
            <h3>教育经历</h3>
            <main>
                <ol>
                    <li v-for="item in resume.education">
                        <div class="title"><h4>{{item.studyTime.context}}</h4></div>
                        <div class="content">{{item.major.context}}({{item.level.context}})<span>{{item.school.context}}</span></div>
                    </li>
                </ol>
            </main>
        </section>
      <section id="projects" class="item" v-if="resume.projects[0]">
          <h3>项目经历</h3>
          <main>
              <ol>
                  <li v-for="item in resume.projects">
                      <div class="title"><h4>{{item.projectName.context}}</h4></div>
                      <div class="content">{{item.projectInfo.context}}</div>
                  </li>
              </ol>
          </main>
      </section>
      <section id="awards" class="item" v-if="resume.awards[0]">
          <h3>获奖经历</h3>
          <main>
              <ol>
                  <li v-for="item in resume.awards">
                      <div class="title"><h4>{{item.awardsTime.context}}</h4></div>
                      <div class="content">{{item.awardsName.context}}</div>
                  </li>
              </ol>
          </main>
      </section>
    </div>
</template>
<style lang="less">
  #resumePreview {
      overflow-y:scroll;
      overflow-x:hidden;
      .personal-info{
          width: 100%;
          display: flex;
          background:#333;
          color: #fff;
          .main-wraps{
              margin-left: 10%;
              min-height: 150px;
          }
          .side-wraps{
              margin-top: 2.5%;
              margin-left: 10%;
              letter-spacing: .3em;
              line-height: 1.5em;
          }
      }
      .item{
          position: relative;
          border-top: 2px solid #ccc;
          border-bottom: 2px solid #ccc;
          margin: 30px 0;
          width: 100%;
          h3{
              color: #333;
              position: absolute;
              margin-top: -10px;
              left: 10%;
              background: #fff;
          }
          ol{
              width: 100%;
              li{
                  width: 100%;
                  margin: 10px 0;
                .title{
                    display: inline-block;
                    margin-left: 8%;
                    width: 15%;
                }
                .content{
                    display: inline-block;
                    margin-left: 5%;
                    width: 50%;
                    white-space: pre-line;
                    span{
                      margin-left: 15%;
                    }
                }

              }
          }

      }
  }

</style>
<script>
    export default{
        name:"resumePreview",
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed:{
            resume(){
              return this.$store.state.resume;
            }
        }
    }
</script>
