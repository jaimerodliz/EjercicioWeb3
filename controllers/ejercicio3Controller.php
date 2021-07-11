<?php

class ejercicio3Controller{

	function index(){
		require_once('views/layout/header.php');
		require_once('views/layout/nav.php');
		require_once('views/index/index.php');
		require_once('views/layout/footer.php');
	}

	//calcular el factorial de un número
	function calcular(){
		$numero= (is_numeric(trim($_POST['numero'])))? trim($_POST['numero']) : 0;

		$resultado=1;
		$cadena='';
		//calculo
		for($x=$numero; $x >= 1; $x--){
			$resultado= $resultado * $x;
			//crear cadena de factorial deglosado
			if($x==$numero){
				$cadena="$numero";
			}else{
				$cadena.=" * $x";
			}
		}

		if($cadena==''){
			$resultado=0;
			$cadena='0';
		}

		$res=array('cadena'=>$cadena, 'factorial'=>$resultado);
		echo json_encode($res);
	}
}

