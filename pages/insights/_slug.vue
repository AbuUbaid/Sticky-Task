<template>
  <div>
    <div class="post-banner"  v-if="post">
      <img :src="post?.fimg_url" :alt="post.title?.rendered + ' image'" />
    </div>
    <div class="home-container post-content" v-if="post">
      <h1>{{ post?.title?.rendered }}</h1>
      <div v-html="post?.content?.rendered"></div>
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
created(){
  console.log("pages herer", this.$store.state.posts);
  this.post = this.$store.state.posts.find(p => {
  return p.slug == this.$route.params.slug;
  });

  console.log("post is post", this.post);

},
fetch({ store }) {
    return axios
      .get("https://sn.softception.digital/wp-json/wp/v2/posts")
      .then((res) => {
        console.log("res of blogs", res.data);
        store.commit("frontPagePosts", res.data);
        this.post = this.$store.state.posts.find(p => {
        return p.slug == this.$route.params.slug;
        });
        console.log("post is post", this.post);
      })
      .catch((error) => {
        console.log(error);
      });
},
computed: {
  posts() {
     return this.$store.state.posts;
  }

},
  // async asyncData({ params, payload }) {
  //   if (payload) {
  //     return {
  //       post: payload,
  //     };
  //   } else {
  //     // console.log("params in blos", params.slug)
  //     // return axios
  //     //   .get("https://sn.softception.digital/wp-json/wp/v2/posts?slug=" + params.slug)
  //     //   .then((res) => {
  //     //     console.log("imag eurl", res.data);
  //     //     return {
  //     //       post: res.data[0],
  //     //     };
  //     //   });
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.post-banner {
  margin-top: 100px;
  text-align: center;
  img {
    width: 100%;
    max-width: 700px;
  }
}
.post-content {
  margin-top: 50px;
  > div {
    margin-top: 30px;
    ::v-deep {
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