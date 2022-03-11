// pages/index/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgList: [
			{
				url: '../../assets/ELEMENTS/camilia.png',
				isOut: false,
				liveClass: 'first-leave',
			},
			{
				url: '../../assets/ELEMENTS/laten.png',
				isOut: false,
				liveClass: 'second-leave',
			},
			{
				url: '../../assets/ELEMENTS/flower2.png',
				isOut: false,
				liveClass: 'third-leave',
			},
			{
				url: '../../assets/ELEMENTS/n5.png',
				isOut: false,
				liveClass: 'fourth-leave',
			},
			{
				url: '../../assets/ELEMENTS/camilia.png',
				isOut: false,
				liveClass: 'fifth-leave',
			},
			{
				url: '../../assets/ELEMENTS/flower1.png',
				isOut: false,
				liveClass: 'sixth-leave',
			},
			{
				url: '../../assets/ELEMENTS/lip.png',
				isOut: false,
				liveClass: 'seventh-leave',
			},
		],
		isOut: false,
		isBtnOut: false,
		isReady: false,
		isOut2: false,
	},

	onVideoLoaded(e) {
		console.log(e)
		this.setData({
			isReady: true,
		})
	},

	btnFunc() {
		console.log(123)
		this.setData({
			isOut2: true,
		})
	},

	btnClick(e) {
		console.log(e)
		let list = this.data.imgList
		list.forEach((v) => {
			v.isOut = true
		})
		this.setData({
			imgList: list,
			isBtnOut: true,
		})

		// setTimeout(() => {
		// 	wx.navigateTo({
		// 		url: '../../pages/luck/index',
		// 	})
		// }, 800)

		setTimeout(() => {
			this.setData({
				isOut: true,
			})
		}, 1000)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
})
