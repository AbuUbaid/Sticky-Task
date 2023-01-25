<template>
  <div class="home-container top-rated-container">
    <h2>Top-Rated Solutions Stack </h2>
    <p>Using the most up-to-date and current technology, we create effective solutions for businesses ranging from startups to Fortune 1000.</p>
    
    <v-tabs v-model="tab" align-with-title grow class="top-tabs">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab>Mobile</v-tab>
        <v-tab>Front End</v-tab>
        <v-tab>DataBase</v-tab>
        <v-tab>Backend</v-tab>
        <v-tab>CMS</v-tab>
        <v-tab>Infra and DevOps</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <!-- Mobile -->
        <v-tab-item>
          <div class="tab-pane fade" id="nav-tab-0" role="tabpanel" aria-labelledby="nav-tab-0">
          <div class="icons">
              <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/06/apple.png" class="img-fluid">
                  <p>IOS</p>
              </div>
            <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/06/android-logo.png" class="img-fluid">
                  <p>Android</p>
              </div>
              <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/03/react.svg" class="img-fluid">
                  <p>React Native</p>
              </div>
                <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/03/bird.svg" class="img-fluid">
                  <p>Swift</p>
              </div>
              <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/03/kotlin.svg" class="img-fluid">
                  <p>Kotlin</p>
              </div>
                <div class="icon">
                  <img src="https://folium.ai/wp-content/uploads/2021/03/obj.png" class="img-fluid">
                  <p>ObjectiveC</p>
              </div>
          </div> 
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="tab-pane fade active show" id="nav-tab-1" role="tabpanel" aria-labelledby="nav-tab-1">
              <div class="icons">
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/03/html.svg" class="img-fluid">
                      <p>HTML</p>
                  </div>
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/03/bootstrap.svg" class="img-fluid">
                      <p>Bootstrap</p>
                  </div>
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/03/css.svg" class="img-fluid">
                      <p>Css</p>
                  </div>
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/03/react.svg" class="img-fluid">
                      <p>ReactJS</p>
                  </div>
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/angular.svg" class="img-fluid">
                      <p>Angular</p>
                  </div>
                  <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/vue.svg" class="img-fluid">
                      <p>Vue</p>
                  </div>
              </div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="tab-pane fade active show" id="nav-tab-2" role="tabpanel" aria-labelledby="nav-tab-2">
            <div class="icons">
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/mongo.svg" class="img-fluid">
                    <p>MongoDB</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/dynamo.svg" class="img-fluid">
                    <p>DynamoDB</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/PostgreSQL.svg" class="img-fluid">
                    <p>PostgreSQL</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/MySQL-1.svg" class="img-fluid">
                    <p>MySQL</p>
                </div>
              </div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="tab-pane fade active show" id="nav-tab-3" role="tabpanel" aria-labelledby="nav-tab-3">
              <div class="icons">
                 <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/python.svg" class="img-fluid">
                      <p>Python</p>
                  </div>
                 <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/dj.svg" class="img-fluid">
                      <p>Django</p>
                  </div>
                 <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/js.svg" class="img-fluid">
                      <p>Node</p>
                  </div>
                 <div class="icon">
                      <img src="https://folium.ai/wp-content/uploads/2021/05/php.svg" class="img-fluid">
                      <p>PHP</p>
                  </div>
              </div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="tab-pane fade active show" id="nav-tab-4" role="tabpanel" aria-labelledby="nav-tab-4">
            <div class="icons">
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/Magento.svg" class="img-fluid">
                    <p>Magento</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/Drupal.svg" class="img-fluid">
                    <p> Drupal</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/shopify.svg" class="img-fluid">
                    <p>Shopify</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/wordpress.svg" class="img-fluid">
                    <p>Wordpress</p>
                </div>
            </div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="tab-pane fade active show" id="nav-tab-5" role="tabpanel" aria-labelledby="nav-tab-5">
            <div class="icons">
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/aws.svg" class="img-fluid">
                    <p>AWS</p>
                </div>
                <div class="icon">
                    <img src="https://folium.ai/wp-content/uploads/2021/05/cloud.svg" class="img-fluid">
                    <p>GCP</p>
                </div>
            </div>
        </div>
        </v-tab-item>
      </v-tabs-items>
   
</div> 
</template>

<script>
export default {
  name: "TopRatedSolutions",
  data: () => {
    return {
      tab: null,
    }
  },
};
</script>

<style lang="scss" scoped>
.top-rated-container {
  text-align: center;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  h2 {
    margin-bottom: 10px;
  }
  p {
  }
  .top-tabs{
    margin-top: 50px;
  }
  .icons{
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 30px;
    gap: 145px;
    justify-content: center;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .top-rated-container {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
    .top-tabs{
      margin-top: 50px;
      margin-left: -40px;
    }
    .icons{
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 30px;
    gap: 78px;
  }
  }
}
</style>