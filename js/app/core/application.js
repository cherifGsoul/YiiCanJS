define(['can'],function(can){
	return can.Control.extend({
		default:{
			modules:[],
			activeModule:''
		}	
	},{
		init:function(el,opts){
			console.log(opts.activeModule());
			this.on();
		},

		'{activeModule change}':function(el,ev){
			
		}
	})
})