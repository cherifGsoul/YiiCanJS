<?php

class m130907_002834_initDatabase extends CDbMigration
{
	/*public function up()
	{
	}

	public function down()
	{
		echo "m130907_002834_initDatabase does not support migration down.\n";
		return false;
	}*/


	// Use safeUp/safeDown to do migration with transaction
	public function safeUp() {
		if ( Yii::app()->db->schema instanceof CMysqlSchema ) {
			$options = 'ENGINE=InnoDB DEFAULT CHARSET=utf8';
		} else {
			$options = '';
		}

		$this->createTable( '{{contact}}', array(
				'id'=>'pk',
				'firstname'=>'string',
				'lastname'=>'string',
				'email'=>'string',
				'company_id'=>'integer',
				'category_id'=>'integer',
				'location_id'=>'integer',
				'user_id'=>'integer',
				'create_time'=>'integer',
				'update_time'=>'integer',
			), $options );

		$this->createTable( '{{company}}', array(
				'id'=>'pk',
				'name'=>'string',
				'url'=>'string',
				'create_time'=>'integer',
				'update_time'=>'integer',
			), $options );
		$this->createTable( '{{category}}', array(
				'id'=>'pk',
				'name'=>'string',
				'create_time'=>'integer',
				'update_time'=>'integer',
			), $options );

		$this->createTable( '{{location}}', array(
				'id'=>'pk',
				'name'=>'string',
				'create_time'=>'integer',
				'update_time'=>'integer',
			), $options );


		$this->createTable( '{{user}}', array(
				'id'=>'pk',
				'username'=>'string',
				'password'=>'string',
				'create_time'=>'integer',
				'update_time'=>'integer',
			), $options );

		$this->addForeignKey( 'company', '{{contact}}', 'company_id', '{{company}}', 'id', 'CASCADE', 'CASCADE' );
		$this->addForeignKey( 'category', '{{contact}}', 'category_id', '{{category}}', 'id', 'CASCADE', 'CASCADE' );

		$this->addForeignKey( 'location', '{{contact}}', 'location_id', '{{location}}', 'id', 'CASCADE', 'CASCADE' );

		$this->addForeignKey( 'owner', '{{contact}}', 'user_id', '{{user}}', 'id', 'CASCADE', 'CASCADE' );
	}

	public function safeDown() {
		$this->dropTable('{{contact}}');
		$this->dropTable('{{company}}');
		$this->dropTable('{{location}}');
		$this->dropTable('{{user}}');
		$this->dropTable('{{category}}');
	}

}
