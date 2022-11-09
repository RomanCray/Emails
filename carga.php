<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$sheet->setCellValue('A1', 'Hello World !');

$writer = new Xlsx($spreadsheet);
$writer->save('hello world.xlsx');

// $inputFileName = './sampleData/example1.xls';

// /**  Identify the type of $inputFileName  **/
// $inputFileType = \PhpOffice\PhpSpreadsheet\IOFactory::identify($inputFileName);
// /**  Create a new Reader of the type that has been identified  **/
// $reader = \PhpOffice\PhpSpreadsheet\IOFactory::createReader($inputFileType);
// /**  Load $inputFileName to a Spreadsheet Object  **/
// $spreadsheet = $reader->load($inputFileName);

?>