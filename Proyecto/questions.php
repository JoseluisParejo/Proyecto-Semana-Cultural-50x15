<?php
$arrQuestions = array(
0 => array("id" => "0",
           "title" => "¿Cuál es el día internacional de los derechos humanos?",
           "answers" => array(
             0=>"10 de Diciembre",
             1=>"14 de Febrero",
             2=>"8 de Agosto",
             3=>"31 de Junio"
           ),
           "correct_answer" => "10 de Diciembre"
    ),
  1 => array("id" => "1",
             "title" => "¿Qué se define como derecho a la información?",
             "answers" => array(
               0=>"El derecho a conseguir información en poder del gobierno u admin públicas",
               1=>"El derecho de una persona de ser informada por el estado",
               2=>"El derecho de una persona a estudiar y formarse",
               3=>"El derecho de una persona a tener internet"
             ),
             "correct_answer" => "El derecho a conseguir información en poder del gobierno u admin públicas"
      ),
  2 => array("id" => "2",
             "title" => "¿Cuántos derechos humanos existen?",
             "answers" => array(
               0=>"30",
               1=>"10",
               2=>"35",
               3=>"40"
             ),
             "correct_answer" => "30"
      ),
  3 => array("id" => "3",
             "title" => "¿Cuál de estos no es un derecho humano?",
             "answers" => array(
              0=>"Derecho a protección civil",
              1=>"Todo individuo tiene derecho a la vida",
              2=>"A la libertad y a la seguridad de su persona",
              3=>"Nadie será sometido a torturas, penas o tratos crueles, inhumanos o degradantes."
             ),
             "correct_answer" => "Derecho a protección civil"
      ),
  4 => array("id" => "4",
             "title" => "¿En qué país se redacto la declaración universal de los Derechos Humanos?",
             "answers" => array(
              0=>"París",
              1=>"Madrid",
              2=>"Bruselas",
              3=>"Londres"
             ),
             "correct_answer" => "París"
      ),
  5 => array("id" => "5",
             "title" => "¿Qué país se abstuvo a firmar la declaración y adoptarla?",
             "answers" => array(
              0=>"Arabia Saudí",
              1=>"Corea del Norte",
              2=>"Cuba",
              3=>"Rusia"
             ),
             "correct_answer" => "Arabia Saudí"
      ),
  6 => array("id" => "6",
             "title" => "¿De los 30 articulos, de cuáles a cuáles recogen los derechos de carácter personal?",
             "answers" => array(
              0=>"del 3 al 11",
              1=>"del 5 al 9",
              2=>"del 3 al 10",
              3=>"del 15 al 25"
             ),
             "correct_answer" => "del 3 al 11"
      ),
  7 => array("id" => "7",
             "title" => "Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, 
               deben comportarse fraternalmente los unos con los otros,¿Que articulo es este?",
             "answers" => array(
              0=>"1",
              1=>"3",
              2=>"5",
              3=>"18"
             ),
             "correct_answer" => "1"
      ),
  8 => array("id" => "8",
             "title" => "¿Que organismo adoptó la Declaración Universal de los Derechos Humanos?",
             "answers" => array(
              0=>"La Asamblea General de las Naciones Unidas",
              1=>"Unión Europea",
              2=>"Organización para la Seguridad y la Cooperación en Europa",
              3=>"Comunidad de Estados Independientes"
             ),
             "correct_answer" => "La Asamblea General de las Naciones Unidas"
      ),
  9 => array("id" => "9",
             "title" => "¿Qué gran evento empujó a la creación de la declaración universal de los derechos humanos?",
             "answers" => array(
              0=>"La Segunda Guerra Mundial",
              1=>"La Guerra de los Balcanes",
              2=>"La Guerra de Vietnam",
              3=>"La independencia de Cataluña"
             ),
             "correct_answer" => "La Segunda Guerra Mundial"
      ),
  10 => array("id" => "10",
             "title" => "¿Cuántas personas redactaron la declaración universal de los derechos humanos?",
             "answers" => array(
              0=>"6",
              1=>"8",
              2=>"2",
              3=>"20"
             ),
             "correct_answer" => "6"
      ),
  11 => array("id" => "11",
             "title" => "¿Qué alto cargo estadounidense leyó por primera vez la declaración para todo el mundo?",
             "answers" => array(
              0=>"Eleanor Roosevelt",
              1=>"Michelle Obama",
              2=>"Ronald Reagan",
              3=>"John F. Kennedy"
             ),
             "correct_answer" => "Eleanor Roosevelt"
      ),
);
  echo json_encode($arrQuestions);
?>