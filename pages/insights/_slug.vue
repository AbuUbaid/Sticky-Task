<template>
  <div>
    <div class="post-banner">
      <img :src="post.fimg_url" :alt="post.title.rendered + ' image'" />
    </div>
    <div class="home-container post-content">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {},
    };
  },

  async asyncData({ params, payload }) {
    if (payload) {
      return {
        post: res.data,
      };
    } else {
      return axios
        .get("https://sn.softception.digital/wp-json/wp/v2/posts/" + params.id)
        .then((res) => {
          console.log(res);
          return {
            post: res.data,
          };
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.post-banner {
  img {
    width: 100%;
  }
}
.post-content {
  margin-top: 50px;
  > div {
    margin-top: 30px;
    ::v-deep {
      h2 {
      }
      p {
        margin: 15px 0px;
        line-height: 1.4rem;
        span {
          line-height: 1.4rem;
        }
      }
      ul {
        list-style-position: inside;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .post-banner {
    margin-top: 60px;
  }

  .post-content {
    margin-top: 30px;
  }
}
</style>