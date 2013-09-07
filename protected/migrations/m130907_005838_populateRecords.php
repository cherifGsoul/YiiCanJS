<?php
Yii::import( 'system.utils.CPasswordHelper' );
class m130907_005838_populateRecords extends CDbMigration
{


	// Use safeUp/safeDown to do migration with transaction
	public function safeUp() {
		$this->insert( '{{user}}', array(
				'username'=>'superUser',
				'password'=>CPasswordHelper::hashPassword( 'canlsPs' ),
				'create_time'=>time(),
				'update_time'=>time(),
			) );

		$this->insert( '{{user}}', array(
				'username'=>'cherif',
				'password'=>CPasswordHelper::hashPassword( 'canlsPs' ),
				'create_time'=>time(),
				'update_time'=>time(),
			) );
		$this->insert( '{{user}}', array(
				'username'=>'super',
				'password'=>CPasswordHelper::hashPassword( 'canlsPs' ),
				'create_time'=>time(),
				'update_time'=>time(),
			) );

		$this->insert( '{{user}}', array(
				'username'=>'simple',
				'password'=>CPasswordHelper::hashPassword( 'canlsPs' ),
				'create_time'=>time(),
				'update_time'=>time(),
			) );

		$this->insert( '{{user}}', array(
				'username'=>'simple2',
				'password'=>CPasswordHelper::hashPassword( 'canlsPs' ),
				'create_time'=>time(),
				'update_time'=>time(),
			) );

		$this->insert( '{{company}}', array(
				"name"=>"Jupiter Consulting",
				"url"=> "http://jupiterjs.com",
				'create_time'=>time(),
				'update_time'=>time()
			) );
		$this->insert( '{{company}}', array(
				"name"=>"Jupiter Consulting",
				"url"=> "http://jupiterjs.com",
				'create_time'=>time(),
				'update_time'=>time()
			) );
		$this->insert( '{{company}}', array(
				"name"=>"Cengage Learning",
				"url"=> "http://www.cengage.com/us/",
				'create_time'=>time(),
				'update_time'=>time()
			) );
		$this->insert( '{{company}}', array(
				"name"=>"Microsoft",
				"url"=> "http://microsoft.com",
				'create_time'=>time(),
				'update_time'=>time()
			) );
		$this->insert( '{{company}}', array(
				"name"=>"Mindjet",
				"url"=> "http://mindjet.com",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"Friends",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"Familly",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"College",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"High School",
				'create_time'=>time(),
				'update_time'=>time()
			) );


		$this->insert( '{{category}}', array(
				"name"=>"Work",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"Enemies",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{category}}', array(
				"name"=>"Volunteer",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Chicago",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Los Angeles",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"San Fransisco",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Boston",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"New York",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Berlin",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Kansas City",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Paris",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"London",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Miami",
				'create_time'=>time(),
				'update_time'=>time()
			) );
		$this->insert( '{{location}}', array(
				"name"=>"Annaba",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		$this->insert( '{{location}}', array(
				"name"=>"Algeirs",
				'create_time'=>time(),
				'update_time'=>time()
			) );

		for ( $i=1;$i<1000;$i++ ) {
			$this->insert( '{{contact}}', array(
					'firstname'=>'Firstname ' . $i,
					'lastname'=>'Lastname ' . $i,
					'email'=>'conact'.$i.'@site.com',
					'location_id'=>rand( 1, 12 ),
					'category_id'=>rand( 1, 7 ),
					'company_id'=>rand( 1, 5 ),
					'user_id'=>rand( 1, 5 ),
					'create_time'=>time(),
					'update_time'=>time()
				) );
		}
	}

	public function safeDown() {
		echo "Not supported";
	}
}
