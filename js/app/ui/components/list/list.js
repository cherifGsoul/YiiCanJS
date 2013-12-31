define(['can'],function(can){
	return can.Component.extend({
		tag:'list',
		template:'<ul>{{#each items}}<li>{{id}}</li>{{/each}}</ul>',
		scope:{
			items:[],
		},
		events:{
			init:function(){
				console.log()
			}
		}
	})
})