<?php
/**
* 
*/
class ActiveExportHelper extends CActiveRecordBehavior
{
	public function filterScope($attributes='*',$relations=array())
	{
		$owner=$this->getOwner();

		$criteria=$this->getOwner()->getDbCriteria();
		if($attributes!='*')
			$select=explode(',', $attributes);
		else
			$select=$criteria->select;

		if(empty($relations))
			$with=$criteria->with;
		else
			$with=$relations;

		$criteria->mergeWith(array(
				'with'=>$with,
				'select'=>$select
				));



		return $this->getOwner();
	}

	public function export($attributes='*',$relations=array(), $additionalParams=array()){
		$models=$this->filterScope($attributes,$relations)->findAll($additionalParams);
		$list=new CList();
		foreach ($models as $model) {
			$data=new CMap();
			foreach ($model->attributes as $key => $value) {
				$data->add($key,$value);
				foreach ($relations as $k=>$v) {
					if(is_integer($k))
						$relation=$v;
					elseif(is_string($k))
						$relation=$k;
					$data->add($relation,$model->getRelated($relation));
				}
			}
			$list->add($data);
		}
		return $list->toArray();
	}

	// public function JSONExport($attributes='*',$relations=array(), $additionalParams=array()){
	// 	$data=$this->ArrayExport($attributes,$relations, $additionalParams);
	// 	return CJSON::encode($this);
	// }

	// public function export($attributes='*',$relations=array(), $additionalParams=array()){

	// }
}