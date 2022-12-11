<template>
  <div>
    <div class="yellow-bg">
      <h1>Insights</h1>
    </div>
    <div class="blog-container">
      <NuxtLink
        :to="{
          name: 'insights-slug',
          params: { slug: posts[0].slug, id: posts[0].id },
        }"
        class="featured-blog"
      >
        <img :src="posts[0].fimg_url" alt="blog image" />
        <p class="date">{{ new Date(posts[0].date).toDateString() }}</p>
        <h3 class="blog-title">
          {{ posts[0].title.rendered }}
        </h3>
      </NuxtLink>
      <div class="two-blogs">
        <card-horizontal :BlogDetail="posts[1]" />
        <card-horizontal :BlogDetail="posts[2]" />
      </div>
    </div>

    <div class="home-container resources-tab">
      <h2 class="text-center">Resources</h2>
      <p class="entry text-center">
        Go through the power hub of knowledge and every latest news regarding
        tech.
      </p>
      <v-tabs v-model="tab" align-with-title grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <!-- <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab> -->
        <v-tab>All</v-tab>
        <!-- <v-tab>All</v-tab>
        <v-tab>All</v-tab>
        <v-tab>All</v-tab> -->
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div class="blog-cards">
            <blog-card
              v-for="post in posts"
              :key="post.id"
              :BlogDetail="post"
            />
            <!-- <blog-card :BlogDetail="posts[0]" /> -->
            <!-- <blog-card />
            <blog-card />
            <blog-card />
            <blog-card />
            <blog-card />
            <blog-card />
            <blog-card />
            <blog-card /> -->
          </div>
        </v-tab-item>
        <!-- <v-tab-item>
          <card-horizontal />
          <card-horizontal />
        </v-tab-item>
        <v-tab-item>
          <card-horizontal />
          <card-horizontal />
        </v-tab-item>
        <v-tab-item>
          <card-horizontal />
          <card-horizontal />
        </v-tab-item> -->
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardHorizontal from "../../components/blog/CardHorizontal.vue";
import BlogCard from "../../components/blog/BlogCard.vue";
export default {
  components: { CardHorizontal, BlogCard },
  name: "InsightsPage",
  data: () => {
    return {
      tab: null,
    };
  },

  fetch({ store }) {
    return axios
      .get("https://sn.softception.digital/wp-json/wp/v2/posts")
      .then((res) => {
        console.log(res);
        store.commit("frontPagePosts", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.yellow-bg {
  background: #fff3c0;
  height: 50vh;
  display: flex;
  justify-content: end;
  h1 {
    margin-right: 100px;
    margin-top: 120px;
  }
}
.blog-container {
  margin-top: -15vh;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  gap: 20px;
  display: none;
  .featured-blog {
    color: black;
    flex-basis: 55%;
    width: 55%;
    img {
      width: 100%;
      height: 404px;
      object-position: center;
      object-fit: cover;
    }
    p.date {
      margin: 10px 0;
    }
  }
  .two-blogs {
    flex-basis: 45%;
    width: 45%;
  }
}

.resources-tab {
  margin-top: -25vh;
  // margin-top: 50px;
  > h2 {
  }
  > p.entry {
    margin-top: 15px;
    margin-bottom: 30px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .blog-cards {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    > * {
      flex-basis: 31%;
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .yellow-bg {
    height: 40vh;
    justify-content: center;
    h1 {
      margin-right: 0;
      margin-top: 80px;
    }
  }

  .blog-container {
    margin-top: -15vh;
    padding-left: 20px;
    padding-right: 20px;
    flex-wrap: wrap;
    gap: 20px;
    .featured-blog {
      flex-basis: 100%;
      width: 100%;
      img {
        height: auto;
      }
      p.date {
        margin: 10px 0;
      }
    }
    .two-blogs {
      flex-basis: 100%;
      width: 100%;
    }
  }

  .resources-tab {
    margin-top: -20vh;
    // margin-top: 30px;
    > p.entry {
      width: 100%;
    }
    .blog-cards {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      > * {
        flex-basis: 100%;
      }
    }
  }
}
</style>