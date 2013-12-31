<?php
/**
* 
*/
class ListAction extends CAction
{
	public $modelName;
	
	public function run()
	{
		$model=new $this->modelName('search');
		$model->unsetAttributes();  // clear any default values
		if(isset($_GET))
			$model->attributes=$_GET;


		
		echo CJSON::encode($model->search());
		
		
		
	}
}