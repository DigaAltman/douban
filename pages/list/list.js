// pages/list/list.js
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
    var that = this;
    //获取传入类型
    var type=options.type;
    that.setData({
      type:type
    });
    var title="";
    
    //请求数据时的提示
    wx.showLoading({
      title: '数据获取中...',
    })

    if(type==="movie"){
      title="电影";
      //请求电影数据
      network.getMovieList({
        count:1000,
        success:function(items){
          that.setData({
            items:items
          });
          wx.hideLoading();
        }  
      });
    }else if(type==="tv"){
      title = "电视剧";
      //请求电视剧数据
      network.getTvList({
        count: 1000,
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        }
      });
    }else{
      title = "综艺";
      //请求综艺数据
      network.getShowList({
        count: 1000,
        success: function (items) {
          that.setData({
            items: items
          });
          wx.hideLoading();
        }
      });
    }
    //设置标题
    wx.setNavigationBarTitle({
      title: title,
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

  }
})