define(['can','can/control/plugin'],function(can,plugin){
	can.Control('Navigation',{
			pluginName:'navigation'
		},{
			init:function(element,options){
				console.log(options);
			}
		}
	);

	return Navigation;
});