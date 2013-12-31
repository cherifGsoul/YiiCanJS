<?php
/**
* 
*/
class ShowAction extends CAction
{
	public $modelName;
	
	public function run($id)
	{
		if(!isset($id))
			throw new CHttException(404,"Error Processing Request");
		$model=$this->loadModel($id);
		echo CJSON::encode($model);
	}

	/**
		 * Returns the data model based on the primary key given in the GET variable.
		 * If the data model is not found, an HTTP exception will be raised.
		 * @param integer the ID of the model to be loaded
		 */
		public function loadModel($id)
		{
			$model=CActiveRecord::model($this->modelName)->findByPk($id);
			if($model===null)
				throw new CHttpException(404);
			return $model;
		}
}