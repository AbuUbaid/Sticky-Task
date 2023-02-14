<template>
<div class="tech-container">
  <div class="section-title-block ">
    <h2 class="section-title-text h1 text-center">Technical Stack</h2>
    <p class="text-center mb-lg text-18 section-desc">We use best-in-class tools, state-of-the-art technologies and modern approaches to scale up your business</p>
  </div>
  <div class="technical-Stack">
  <tr class="row-card">
  <td>FrontEnd</td>
  <td>
  <span>Angular</span>
  <span>Vue.JS</span>
  <span>React.JS</span>
  </td>
  </tr>
  <tr>
  <td>BackEnd</td>
  <td>
  <span>Ruby On Rails</span>
  <span>Laravel</span>
  <span>Node</span>
  <span>PHP</span>
  <span>.Net</span>
  <span>Golang</span>
  <span>Python</span>
  <span>Django</span>
  </td>
  </tr>
  <tr>
  <td>Mobile</td>
  <td>
  <span>Flutter</span>
  <span>React Native</span>
  <span>iOS</span>
  <span>Android</span>
  <span>Ionic</span>
  </td>
  </tr>
  <tr>
  <td>Server</td>
  <td>
  <span>AWS</span>
  <span>Digital Ocean</span>
  <span>Heroku</span>
  </td>
  </tr>
  <tr>
  <td>Database</td>
  <td>
  <span>MongoDB</span>
  <span>PostgreSQL</span>
  <span>MySQL</span>
  </td>
  </tr>
  <tr>
  <td>Version Control</td>
  <td>
  <span>GitHub</span>
  <span>BitBucket</span>
  <span>GitLab</span>
  </td>
  </tr>
  <tr>
  <td>Communication Tools</td>
  <td>
  <span>Slack</span>
  <span>Microsoft Team</span>
  <span>Hangout</span>
  </td>
  </tr>
  <tr>
  <td>Meeting</td>
  <td>
  <span>Google Meet</span>
  <span>Zoom</span>
  <span>GoToMeeting</span>
  </td>
  </tr>
  <tr>
  <td>Project Management Tools</td>
  <td>
  <span>Jira</span>
  <span>Trello</span>
  <span>BaseCamp</span>
  </td>
  </tr>
  <tr>
  <td>Other</td>
  <td>
  <span>Agile</span>
  <span>TDD</span>
  </td>
  </tr>
  <tr>
  <td>Devops</td>
  <td>
  <span>Apacheant</span>
  <span>Xcode</span>
  <span>Fastlane</span>
  <span>Gant</span>
  <span>Gradle</span>
  <span>Maven</span>
  <span>Ansible</span>
  <span>Chef</span>
  <span>Puppet</span>
  <span>TeamCity</span>
  <span>Bamboo</span>
  <span>Circleci</span>
  <span>Hudson</span>
  <span>Jenkins</span>
  <span>Buildt</span>
  <span>Apps</span>
  <span>Git</span>
  <span>Hawlett</span>
  <span>Sonarqube</span>
  <span>Subversion</span>
  <span>Apptest</span>
  <span>TravisCi</span>
  </td>
  </tr>
  <tr>
  <td>CRM</td>
  <td>
  <span>Salesforce</span>
  <span>Microsoft Dynamics 365</span>
  </td>
  </tr>
  <tr>
  <td>CMS</td>
  <td>
  <span>WordPress</span>
  <span>Strapi</span>
  </td>
  </tr>
  <tr>
  <td>Deployment Process</td>
  <td>
  <span>CI/CD</span>
  </td>
  </tr>
  </div>
  <div class="col-sm-12 text-center mt-4 free-consult">
    <a href="#free-consult" class="talk-experts"
          >Schedule A Developer Interview</a
        >
  </div>
</div>
</template>
<script>

export default ({
  name:'TechnicalStack',
  data() {
    
  },
})
</script>

<style lang="scss" scoped>
.tech-container{
  margin-top: 50px;
}

.section-title-text{
  margin-bottom: 12px;
}
.section-desc{
  margin-bottom: 2.8125rem;
}
.technical-Stack {
  display: flex;
  flex-direction: column;
  align-items: start;
}
   
.technical-Stack tr{
  display: block;
  margin-bottom: 1.25rem;
  box-shadow: 0 0 0.9375rem rgb(34 34 34 / 10%);
  margin-left: 70px;
  width: 90%;
  }

  .technical-Stack tr td:nth-child(odd){
    background-color: #3d048f;
    font-size: 1.125rem;
    font-weight: 700;
    width: 18.75rem;
    min-width: 18.75rem;
    color: #fff;
    padding-left: 40px;
    padding-top: 22px;
  }
  .technical-Stack tr td:nth-child(even) {
    background-color: #fff;
    width: 100%;
    padding: 1.1875rem 1.875rem;
  }

  .technical-Stack tr td span{
    padding: 0 0.9375rem;
    border-right: 0.0625rem solid #dadada;
    display: inline-block;
  }
  .talk-experts {
    background-color: #3d048f;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    margin-top: 25px;
    text-align: center;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }
  .free-consult{
    margin-bottom:50px
  }

@media (max-width: 480px) {

  .technical-Stack tr{
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    margin-left: 17px;
  }
  .technical-Stack tr td:nth-child(odd){
    width: 100%;
    padding: 30px;
  }
  .technical-Stack tr td:nth-child(even){
    padding: 17px;
  }
  .talk-experts {
    background-color: #3d048f;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    margin-top: 25px;
    text-align: center;
  }
  .free-consult{
    margin-top: 25px;
  }
}
</style>
