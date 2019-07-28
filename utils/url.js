//定义全局url
const globalURL={
  //电影链接
  movieList:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  //电视剧链接
  tvList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  //综艺链接
  showList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  //获取电影详情
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  //获取电视剧详情
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  //获取综艺详情
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  //标签相关链接
  movieTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+id+"/tags?count=8";
  },
  tvTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/"+id+"/tags?count=8";
  },
  showTags:function(id){
    return this.tvTags(id);
  },
  //电影短评
  movieComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
  },
  //电视剧短评
  tvComments: function (id, start = 0, count = 3) {
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  //综艺短评
  showComments: function (id, start = 0, count = 3) {
    return this.tvComments(id, start, count);
  },
  //搜索链接
  searchUrl:function(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q;
  }
}
export {globalURL}