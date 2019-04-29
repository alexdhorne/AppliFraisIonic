<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain; charset=iso-8859-1');
$host_name = 'localhost';
$database = 'gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$queryDFF = $bdd->prepare('
      SELECT *
      FROM detail_frais_forfait, frais_forfait
      WHERE detail_frais_forfait.frais_forfait_id = frais_forfait.id
      AND fiche_frais_id = :fiche_frais_id
');
$queryDFF->bindParam(':fiche_frais_id', $_GET['fiche_frais_id']);
$queryDFF->execute();
$detailFraisForfait = $queryDFF->fetchAll();

$queryDFNF = $bdd->prepare('SELECT * FROM detail_frais_non_forfait WHERE fiche_frais_id = :fiche_frais_id');
$queryDFNF->bindParam(':fiche_frais_id', $_GET['fiche_frais_id']);
$queryDFNF->execute();
$detailFraisNonForfait = $queryDFNF->fetchAll();

$total = 0;

$retour = [
      'detail_frais_forfait' => array(),
      'detail_frais_non_forfait' => array()
];

for ($i=0; $i < count($detailFraisForfait); $i++) {
      $total = $total + ($detailFraisForfait[$i]['quantite'] * $detailFraisForfait[$i]['montant'])  ;	  
}


for ($j=0; $j < count($detailFraisNonForfait); $j++) {
      $total = $total + $detailFraisNonForfait[$j]['montant'];
}


$retour['detail_frais_non_forfait']=$detailFraisNonForfait;
$retour['detail_frais_forfait'] = $detailFraisForfait;
$retour['total'] = $total;
echo json_encode($retour, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PARTIAL_OUTPUT_ON_ERROR); 
