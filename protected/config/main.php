<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
	'basePath'=>dirname( __FILE__ ).DIRECTORY_SEPARATOR.'..',
	'name'=>'Yii CanJS',

	// preloading 'log' component
	'preload'=>array( 'log' ),

	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.components.*',
	),

	// 'controllerMap'=>array(
	// 	'contacts'=>array(
	// 		'class'=>'application.components.JsonApiController',
	// 		'modelName'=>'Contact',
	// 	),
	// 	'posts'=>array(
	// 		'class'=>'application.components.JsonApiController',
	// 		'modelName'=>'Post',
	// 	)
	// ),

	'modules'=>array(
		// uncomment the following to enable the Gii tool

		'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>false,
			// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array( '127.0.0.1', '::1' ),
		),
		'api'

	),

	// application components
	'components'=>array(
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
		),
		// uncomment the following to enable URLs in path-format
		'clientScript'=>array(
			'scriptMap'=>array(
				'jquery'=>false,
			)
		),
		'urlManager'=>array(
			'urlFormat'=>'path',
			'showScriptName'=>false,
			'rules'=>array(

			
				array( 'api/<model>/list', 'pattern'=>'api/<model>', 'verb'=>'GET' ),
				array( 'api/<model>/show', 'pattern'=>'api/<model>/<id\d+>', 'verb'=>'GET' ),
				array( 'api/<model>/create', 'pattern'=>'api/<model>', 'verb'=>'POST' ),
				array( 'api/<model>/update', 'pattern'=>'api/<model>/<id\d+>', 'verb'=>'PUT' ),
				array( 'api/<model>/delete', 'pattern'=>'api/<model>/<id\d+>', 'verb'=>'DELETE' ),


				'<controller:\w+>/<id:\d+>'=>'<controller>/view',
				'<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
				'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
			),
		),


		// uncomment the following to use a MySQL database

		'db'=>array(
			'connectionString' => 'mysql:host=localhost;dbname=yiican',
			'emulatePrepare' => true,
			'username' => 'root',
			'password' => 'design',
			'charset' => 'utf8',
			'tablePrefix' => 'tbl_'
		),

		'errorHandler'=>array(
			// use 'site/error' action to display errors
			'errorAction'=>'site/error',
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
				// uncomment the following to show log messages on web pages
				/*
				array(
					'class'=>'CWebLogRoute',
				),
				*/
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'adminEmail'=>'webmaster@example.com',
	),
);
