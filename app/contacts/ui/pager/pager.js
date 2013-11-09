steal('can','./init.mustache', function(can, initView){
    /**
     * @class contacts/ui/pager
	 * @alias Pager   
     */
    return can.Control(
	/** @Static */
	{
		pluginName:"pager",
		defaults : {}
	},
	/** @Prototype */
	{
		init : function(){
			var self=this;

			var pages=this.options.pages;
			this.element.html(initView({
				count: pages.count
			},{
				helpers:{
					pages:function(count,options){
						
							var pagesNumber=[];
							for(var i=1;i<=count();i++){
								pagesNumber.push(i);
							}
							return pagesNumber;
						// console.log(pagesNumber);
						}
						
					}
				}

			}));
		}
	});
});