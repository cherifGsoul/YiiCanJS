<?php
/**
 *
 */
class ContactApi extends CApplicationComponent
{

	function loadAll($params=array()) {
		

		$cmd=Yii::app()->db->createCommand();
		$cmd->select()->from( '{{contact}}' );
		$count=Yii::app()->db->createCommand( 'SELECT COUNT(*) FROM ('.$cmd->text.') as contactsCount' )->queryScalar();

		return new CSqlDataProvider( $cmd, array(
				'totalItemCount'=>$count,
				'pagination'=>array(
					'pageSize'=>isset($params['limit']) ? (int)$params['limit'] : 10,
				),
			) );
	}
}
