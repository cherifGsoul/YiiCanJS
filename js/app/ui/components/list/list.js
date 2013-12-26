define(['can'],function(can){
	return can.Component.extend({
		tag:'list',
		template:'<li><content></content></li>',
		scope:{
			items:[],
		},
		events:{
			init:function(){
				console.log(this.element)
			}
		}
	})
})