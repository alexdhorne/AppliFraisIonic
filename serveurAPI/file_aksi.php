<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "config.php";
$postjson = json_decode(file_get_contents('php://input'), true);
if($postjson['aksi']=="ajoutUtilisateur"){
	$mdp = md5($postjson['mdp']);
	$query = mysqli_query($mysqli, "INSERT INTO visiteur SET 
	login = '$postjson[login]',
	mdp = '$postjson[mdp]',
	nom = '$postjson[nom]',
	prenom = '$postjson[prenom]',
	groupe = '$postjson[groupe]',
	adresse = '$postjson[adresse]',
	cp = '$postjson[cp]',
	ville = '$postjson[ville]',
	dateEmbauche = '$postjson[dateEmbauche]'
	");

	if ($query) $result = json_encode(array('success'=>true));
	else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

	echo $result;
}


elseif($postjson['aksi']=="connexion"){
	//$mdp = md5($postjson['mdp']);
	$query = mysqli_query($mysqli, "SELECT * FROM visiteur WHERE login='$postjson[login]' AND mdp='$postjson[mdp]'");
	$check = mysqli_num_rows($query);

	if($check>0){
		$data = mysqli_fetch_array($query);
		$datauser = array(
			'id' => $data['id'],
			'prenom' => $data['prenom'],
			'nom' => $data['nom'],
			'login' => $data['login'],
			'mdp' => $data['mdp'],
			'groupe' => $data['groupe'],
			'adresse' => $data['adresse'],
			'cp' => $data['cp'],
			'ville' => $data['ville'],
			'dateEmbauche' => $data['dateEmbauche']
		);

		if ($query) $result = json_encode(array('success'=>true, 'result'=>$datauser));
	    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

	}else{
		$result = json_encode(array('success'=>false, 'msg'=>'Compte inconnu'));
	}

	echo $result;
}