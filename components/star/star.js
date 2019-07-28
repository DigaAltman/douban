// components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //评分
    rate:{
      type:Number,
      value:0,
      //当值被改变时,更新评分 
      observer(newVal,oldVal,changedPath){
        this.updateRate();
      }
    },
    //星星大小
    starsize:{
      type:Number,
      value:20 //rpx
    },
    //文字大小
    fontsize:{
      type:Number,
      value:20 
    },
    //文字颜色
    fontcolor:{
      type:String,
      value:"#494949"
    },
    isText:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate:function(){
      var that = this;
      var rate = parseFloat(that.properties.rate);
      //数字化的rate
      var rateNumber = parseInt(rate);
      //满星
      var lightRate = rateNumber / 2;
      //半满星
      var halfRate = rateNumber % 2;
      //灰色星星(5颗星星-高亮星星-半高亮星星))
      var grayRate = 5 - lightRate - halfRate;

      var lights = [];
      var halfs = [];
      var grays = [];
      for (var index = 0; index < lightRate; index++) {
        lights.push(index);
      }
      for (var index = 0; index < halfRate; index++) {
        halfs.push(index);
      }
      for (var index = 0; index < grayRate; index++) {
        grays.push(index);
      }

      //如果评分不存在或者为0,表示未评分
      var rateText = rate && rate > 0 ? rate.toFixed(1) : "未评分";
      this.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        rateText: rateText
      });
    }
  }
  ,
  //组件的生命周期方法
  lifetimes:{
    //组件被加载时执行
    attached:function(){
     this.updateRate();
    }
  }
})
