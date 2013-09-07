<?php
/**
 *
 */
class ArJsonBehavior extends CBehavior
{

  public function jsonEncodeWithRelations( $attributeNames='*' ) {
    
    $models=$this->getData();
    $modelClass=$this->getModel();
    $relations=$this->getRelations();

    if($attributeNames!='*')
      $attributes = explode( ',', $attributeNames );
    else{
      $attributes=$this->listModelAttributes();
    }

    $rows = array(); //the rows to output
    foreach ( $models as $model ) {
      $row = array(); //you will be copying in model attribute values to this array
      foreach ( $attributes as $name ) {

        $name = trim( $name ); //in case of spaces around commas

        $row[$name] = CHtml::value( $model, $name ); //this function walks the relations

      }
      $rows[] = $row;
    }
    return $rows;
  }

  public function getModel(){
    return $this->owner->model;
  }

  public function getRelations(){
    return array_keys($this->model->relations());
  }

  public function listModelAttributes(){
    $attributes=array();

    foreach ($this->getModel()->attributes as $attribute=>$value) {
      $attributes[]=$attribute;
    }

    return array_merge($attributes,$this->getRelations());
  }

  public function getData(){
    return $this->owner->getData();
  }
}
