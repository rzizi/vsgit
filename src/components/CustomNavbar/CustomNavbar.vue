<template>
  <!-- 自定义头部适配 -->
  <view class="contain_bg">
    <view class="contain" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <view class="title">我的商店</view>
      <view class="smalltitle">新鲜 · 亲民 · 快捷</view>
    </view>
    <view class="inputcatain">
      <view class="uni-inputbox">
        <view class="imginput"></view>
        <input class="uni-input" placeholder="搜索"  />
        <view class="imginput imginput1"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();
// 获取胶囊按钮位置信息
const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
</script>

<style lang="scss" scoped>
.contain_bg {
  // height: 200rpx;
  width: 100%;
  background-color: #0ea587;
  .contain {
    //胶囊高度
    line-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: #fff;
    .title {
      font-weight: 500;
      font-size: 36rpx;
    }
    .smalltitle {
      margin-left: 20rpx;
      font-size: 24rpx;
      width: 200rpx;
      padding: 0 20rpx;
      height: 30rpx;
      line-height: 30rpx;
      margin-top: 10rpx;
      border-left: 1px solid #fff;
    }
  }
  .inputcatain{
    box-sizing: border-box;
    padding: 8rpx 16rpx;
    padding-top: 0rpx;
    .uni-inputbox{
      height: 60rpx;
      color: #fff;
      background-color: #77d4c4;
      border-radius: 30rpx;
      line-height: 60rpx;
      padding: 0 20rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .uni-input{
        width: 89%;
      height: 60rpx;
      font-size: 25rpx;
      padding-left: 20rpx;
      line-height: 60px;
    
    }

    .imginput{
        width: 36rpx;
        height: 36rpx;
        background-image: url("../../static/image/search.png");
        background-size: 100% 100%;
      }
      .imginput1{
        background-image: url("../../static/image/erweima.png");
        background-size: 100% 100%;
      }
     
    }

  }
}

</style>
