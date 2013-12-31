<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->

	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />
	

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>
<body>

	<div class="container" id="page">
	<div id="app">
		<div id="contacts">
			
		</div>
		<div id="pager"></div>
	</div>
</div><!-- page -->

<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/bower_components/requirejs/require.js" data-main="/js/app.js"></script>

<script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/require-config.js"></script>
	
</body>
</html>