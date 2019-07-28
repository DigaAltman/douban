// pages/detail/detail.js
import {network} from "../../utils/network.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var type=options.type;
    var id=options.id;
    
    that.setData({
      id:id,
      type:type
    });

    network.getItemDetail({
      type:type,
      id:id,
      success:function(item){
        //类型
        var genres = item.genres;
        //[1,2,3]==>"1/2/3"
        if(genres instanceof Array){
          genres = genres.join("/");
        }
        item.genres = genres;

        //作者
        var actors=item.actors;
        var actorNames=[];
        for (var index = 0; index < 3;index++){
            actorNames.push(actors[index].name);
        }
        actorNames = actorNames.join("/");
        if(director && director.length>0){
          var director=item.directors[0].name;
          var authors = director + "(导演) /" + actorNames;
          item.authors = authors;
        }
        item.authors = actorNames;

        that.setData({
          item:item
        });
      }
    });

    //获取标签
    network.getItemTags({
      type:type,
      id:id,
      success:function(tags){
        that.setData({
          tags:tags
        });
      }
    });

    //获取评论
    network.getItemComments({
      type:type,
      id:id,
      success:function(data){
        var totalComment=data.total;
        var comments=data.interests;
        that.setData({
          totalComment:totalComment,
          comments:comments
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.pageScrollTo({
      scrollTop:0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})