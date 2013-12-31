<?php

class ContactController extends Controller
{
	// Uncomment the following methods and override them if needed
	
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			//'inlineFilterName',
			array(
				'ext.rest.filters.HttpAuthFilter',
			),
		);
	}

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'list'=>array(
				'class'=>'ext.rest.actions.ListAction',
				'modelName'=>'Contact',
			),

			'show'=>array(
				'class'=>'ext.rest.actions.ShowAction',
				'modelName'=>'Contact',
			),
			'create'=>array(
				'class'=>'ext.rest.actions.CreateAction',
				'modelName'=>'Contact',
			),
			'update'=>array(
				'class'=>'ext.rest.actions.UpdateAction',
				'modelName'=>'Contact',
			),
			'delete'=>array(
				'class'=>'ext.rest.actions.DeleteAction',
				'modelName'=>'Contact',
			)
		);
	}
}