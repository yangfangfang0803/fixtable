new Vue({
	el:"#app",
	data:{
		titleList:[],
		infoList:[]
	},
	created: function (){
		this.f5Data();
	},
	methods: {
		f5Data: function (){
			this.titleList = ['序号'];
			this.infoList = [];
			var cols = 20,rows = 60;
			for(var i=0;i<cols;i++){
				this.titleList.push("成本"+i);
			}
			for(var i=0;i<rows;i++){
				var data = [i+1];
				for(var j=0;j<cols;j++){
					data.push(Math.ceil(Math.random()*1000000));
				}
				this.infoList.push(data);
			}
			this.initList();
		},
		initList: function (){
			$(".tableSpline").hide(); 
			$(".header").scrollLeft(0);
			$(".tableInfo").scrollLeft(0);
			$(".tableInfo").scrollTop(0);
			// $('.tableInfo').perfectScrollbar("update");
		}
	}
});