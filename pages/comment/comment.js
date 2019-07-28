// pages/comment/comment.js
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    start:1,
    count:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.setData(options);
    that.getComments(1);
    
  },
  //获取评论的方法
  getComments:function(start){
    var that=this;
    var start=start;
    var options=that.options;
    var type=that.data.type;
    var id=that.data.id;

    //如果是上一页
    if(start<that.data.start){
      that.setData({
        preLoading:true
      });
    }else{
      that.setData({
        nextLoding:true
      });
    }

    network.getItemComments({
      type: options.type,
      id: options.id,
      //因为不确定从第几条评论开始获取
      start: start,
      count: 20,
      success: function (data) {
        var total = data.total;
        var comments = data.interests;
        console.log(start);
        that.setData({
          total: total,
          comments: comments,
          start:start,
          preLoading:false,
          nextLoding:false
        });
        wx.pageScrollTo({
          scrollTop: 0,
          duration:0
        })
      }
    });
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

  },
  //返回上一页
  onItemTapEvent:function(){
    wx.navigateBack({});
  }, 
  //点击上一页
  onPrePageTap:function(event){
    var that = this;
    var oldStart = that.data.start;
    var start=oldStart-that.data.count;
    that.getComments(start);

  },
  //点击下一页
  onNextPageTap:function(event){
    var that=this;
    var oldStart=that.data.start;
    var start=oldStart+that.data.count;
    that.getComments(start);

  }
})