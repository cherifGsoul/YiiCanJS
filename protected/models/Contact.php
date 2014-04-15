<?php

/**
 * This is the model class for table "{{contact}}".
 *
 * The followings are the available columns in table '{{contact}}':
 * @property integer $id
 * @property string $firstname
 * @property string $lastname
 * @property string $email
 * @property integer $company_id
 * @property integer $category_id
 * @property integer $location_id
 * @property integer $user_id
 * @property integer $create_time
 * @property integer $update_time
 *
 * The followings are the available model relations:
 * @property User $user
 * @property Category $category
 * @property Company $company
 * @property Location $location
 */
class Contact extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{contact}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('company_id, category_id, location_id, user_id, create_time, update_time', 'numerical', 'integerOnly'=>true),
			array('firstname, lastname, email', 'length', 'max'=>255),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, firstname, lastname, email, company_id, category_id, location_id, user_id, create_time, update_time', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'user' => array(self::BELONGS_TO, 'User', 'user_id'),
			'category' => array(self::BELONGS_TO, 'Category', 'category_id'),
			'company' => array(self::BELONGS_TO, 'Company', 'company_id'),
			'location' => array(self::BELONGS_TO, 'Location', 'location_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'firstname' => 'Firstname',
			'lastname' => 'Lastname',
			'email' => 'Email',
			'company_id' => 'Company',
			'category_id' => 'Category',
			'location_id' => 'Location',
			'user_id' => 'User',
			'create_time' => 'Create Time',
			'update_time' => 'Update Time',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('t.id',$this->id);
		$criteria->compare('firstname',$this->firstname,true);
		$criteria->compare('lastname',$this->lastname,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('company_id',$this->company_id);
		$criteria->compare('category_id',$this->category_id);
		$criteria->compare('location_id',$this->location_id);
		$criteria->compare('user_id',$this->user_id);
		$criteria->compare('create_time',$this->create_time);
		$criteria->compare('update_time',$this->update_time);

		return $this->export('t.id,t.lastname,t.firstname',
			array(
				'category'=>array(
					'select'=>'name'
					),
				'company'=>array(
					'select'=>'c.name'
					),
				'location'=>array(
					'select'=>'name'
					)
				),$criteria
			);
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Contact the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function behaviors(){
		return array(
			'json'=>array(
				'class'=>'ext.behaviors.EJsonBehavior'
				),
			'exportJSON'=>array(
				'class'=>'ext.rest.behaviors.models.ActiveExportHelper',
				),
			);
	}

	// public function relatedArs($attributes='*',$relations=array())
	// {
		
	// 	$criteria=$this->getDbCriteria();
	// 	if($attributes!='*')
	// 		$select=explode(',', $attributes);
	// 	else
	// 		$select=$criteria->select;

	// 	if(empty($relations))
	// 		$with=$criteria->with;
	// 	else
	// 		$with=$relations;

	// 	$criteria->mergeWith(array(
	// 			'with'=>$with,
	// 			'select'=>$select
	// 			));



	// 	return $this;
	// }

	// public function exportJSON($attributes='*',$relations=array()){
	// 	$models=self::model()->relatedArs($attributes,$relations)->findAll();
	// 	$list=new CList();
	// 	foreach ($models as $model) {
	// 		$data=new CMap();
	// 		foreach ($model->attributes as $key => $value) {
	// 			$data->add($key,$value);

	// 			foreach ($relations as $k=>$v) {
	// 				if(is_integer($k))
	// 					$relation=$v;
	// 				elseif(is_string($k))
	// 					$relation=$k;
	// 				$data->add($relation,$model->getRelated($relation));
	// 			}
	// 		}
	// 		$list->add($data);
	// 	}
	// 	return CJSON::encode($list->toArray());
	// }
}
