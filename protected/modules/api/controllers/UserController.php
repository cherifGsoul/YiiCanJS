<?php
/**
* 
*/
class UserController extends ApiController
{
	
	public function actionLogin() {
		$model=new LoginForm;
		if ( isset( $_POST ) ) {
			$model->attributes=$_POST;
			if ( $model->validate() && $model->login() ) {
				$this->sendResponse( 200, CJSON::encode( array(
							'id'=>Yii::app()->user->id,
							'username'=>Yii::app()->user->name,
						) ) );

			}else {
				$this->sendResponse( 400 );
			}
		}
	}

	public function actionLogout()
	{
		Yii::app()->user->logout(false);
		$this->sendResponse(200,CJSON::encode(array(
			'loggedout'=>true,
			)));
	}
}