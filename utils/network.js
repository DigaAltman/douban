import { globalURL } from "url.js";
const network = {
  //获取电影
  getMovieList: function (params) {
    params.type = "movie";
    this.getItemList(params);
  },
  //获取电视剧
  getTvList: function (params) {
    params.type="tv";
    this.getItemList(params);
  },

  //获取综艺
  getShowList: function (params) {
    params.type="show";
    this.getItemList(params);
    
  },
  getItemList:function(params){
    //获取数据的类型
    var url="";
    if(params.type==="movie"){
      url=globalURL.movieList;
    }else if(params.type==='tv'){
      url=globalURL.tvList;
    }else{
      url=globalURL.showList;
    }
    //获取数据的数量
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function (res) {
        var items = res.data.subject_collection_items;
        /***
         * 判断当前获取的数据量,
         * 如果数据量%3==2,此时数据会边缘排布
         * 我们手动添加1条空数据
         */
        var itemsCount=items.length;
        if (itemsCount%3==2){
          items.push(null);
        }

        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },

  //获取模板详情信息
  getItemDetail:function(params){
    var type=params.type;
    var id=params.id;
    var url="";
    if(type==='movie'){
      url=globalURL.movieDetail+id;
    }else if(type==='tv'){
      url=globalURL.tvDetail+id;
    }else{
      url=globalURL.showDetail+id;
    }
    wx.request({
      url: url,
      success:function(res){
        var item=res.data;
        if(params && params.success){
          params.success(item);
        }
      }
    })
  },

  //获取标签组件
  getItemTags:function(params){
    var type=params.type;
    var id=params.id;
    var url="";
    if(type==="movie"){
      url=globalURL.movieTags(id);
    }else if(type==="tv"){
      url = globalURL.tvTags(id);
    }else{
      url = globalURL.showTags(id);
    }

    wx.request({
      url:url,
      success:function(res){
        var tags=res.data.tags;
        if(params && params.success){
          params.success(tags);
        }
      }
    });

  },

  //获取评论组件
  getItemComments:function(params){
    var type=params.type;
    var id=params.id;
    var start=params.start?params.start:0;
    var count=params.count?params.count:3;
    var url="";
    if (type === "movie") {
      url = globalURL.movieComments(id,start,count);
    } else if (type === "tv") {
      url = globalURL.tvComments(id,start,count);
    } else {
      url = globalURL.showComments(id,start,count);
    }

    wx.request({
      url: url,
      success:function(res){
       if(params && params.success){
        params.success(res.data);  
       }
      }
    })
  },

  //搜索关键字的方法
  getSearch:function(params){
    var q=params.q;
    var url=globalURL.searchUrl(q);
    wx.request({
      url: url,
      success:function(res){
        var subjects=res.data.subjects;
        if(params && params.success){
          params.success(subjects);
        }
      }
    })
  }

}

export { network }