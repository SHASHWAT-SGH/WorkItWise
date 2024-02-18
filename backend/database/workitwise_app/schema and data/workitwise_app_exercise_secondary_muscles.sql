CREATE DATABASE  IF NOT EXISTS `workitwise_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `workitwise_app`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: workitwise_app
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercise_secondary_muscles`
--

DROP TABLE IF EXISTS `exercise_secondary_muscles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise_secondary_muscles` (
  `exercise_id` int NOT NULL,
  `muscle_id` int NOT NULL,
  PRIMARY KEY (`exercise_id`,`muscle_id`),
  KEY `FKpldwc2qnsdo0bkluy64w0r5pt` (`muscle_id`),
  CONSTRAINT `FKolmxptl2fw1ewqkl0jgk7ir16` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`),
  CONSTRAINT `FKpldwc2qnsdo0bkluy64w0r5pt` FOREIGN KEY (`muscle_id`) REFERENCES `muscles` (`muscle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise_secondary_muscles`
--

LOCK TABLES `exercise_secondary_muscles` WRITE;
/*!40000 ALTER TABLE `exercise_secondary_muscles` DISABLE KEYS */;
INSERT INTO `exercise_secondary_muscles`(`exercise_id`, `muscle_id`) VALUES (1235,2),(497,4),(498,4),(499,4),(500,4),(502,4),(507,4),(508,4),(509,4),(511,4),(512,4),(513,4),(514,4),(521,4),(533,4),(543,4),(544,4),(562,4),(563,4),(576,4),(579,4),(581,4),(582,4),(590,4),(598,4),(608,4),(612,4),(613,4),(615,4),(617,4),(624,4),(625,4),(627,4),(628,4),(629,4),(630,4),(632,4),(635,4),(429,5),(497,5),(504,5),(505,5),(516,5),(517,5),(518,5),(519,5),(527,5),(528,5),(531,5),(538,5),(547,5),(550,5),(552,5),(557,5),(558,5),(565,5),(569,5),(570,5),(579,5),(580,5),(584,5),(586,5),(592,5),(593,5),(611,5),(613,5),(615,5),(631,5),(636,5),(637,5),(638,5),(4,9),(5,9),(6,9),(7,9),(8,9),(10,9),(12,9),(13,9),(14,9),(21,9),(23,9),(26,9),(27,9),(28,9),(31,9),(32,9),(34,9),(37,9),(38,9),(43,9),(44,9),(49,9),(50,9),(51,9),(52,9),(53,9),(54,9),(55,9),(58,9),(59,9),(61,9),(63,9),(64,9),(65,9),(71,9),(72,9),(75,9),(77,9),(78,9),(79,9),(80,9),(81,9),(88,9),(89,9),(90,9),(101,9),(106,9),(107,9),(108,9),(109,9),(110,9),(112,9),(113,9),(115,9),(118,9),(119,9),(120,9),(122,9),(123,9),(125,9),(126,9),(128,9),(129,9),(134,9),(135,9),(136,9),(138,9),(139,9),(140,9),(141,9),(145,9),(147,9),(149,9),(150,9),(151,9),(152,9),(153,9),(155,9),(156,9),(157,9),(160,9),(164,9),(166,9),(169,9),(171,9),(172,9),(176,9),(184,9),(186,9),(187,9),(188,9),(189,9),(190,9),(191,9),(192,9),(193,9),(196,9),(199,9),(401,9),(410,9),(504,9),(520,9),(523,9),(524,9),(586,9),(587,9),(605,9),(606,9),(611,9),(614,9),(633,9),(639,9),(642,9),(644,9),(645,9),(647,9),(648,9),(650,9),(659,9),(664,9),(665,9),(667,9),(668,9),(669,9),(671,9),(673,9),(674,9),(676,9),(677,9),(680,9),(681,9),(682,9),(685,9),(687,9),(688,9),(689,9),(690,9),(691,9),(692,9),(697,9),(698,9),(700,9),(701,9),(702,9),(703,9),(704,9),(705,9),(707,9),(708,9),(709,9),(710,9),(712,9),(713,9),(714,9),(715,9),(716,9),(717,9),(721,9),(722,9),(723,9),(724,9),(725,9),(726,9),(728,9),(730,9),(731,9),(732,9),(737,9),(738,9),(739,9),(740,9),(741,9),(742,9),(743,9),(744,9),(745,9),(746,9),(747,9),(748,9),(749,9),(750,9),(751,9),(754,9),(755,9),(756,9),(760,9),(761,9),(762,9),(763,9),(764,9),(765,9),(766,9),(767,9),(768,9),(770,9),(777,9),(783,9),(785,9),(786,9),(788,9),(790,9),(792,9),(795,9),(796,9),(797,9),(798,9),(799,9),(800,9),(801,9),(802,9),(804,9),(805,9),(806,9),(808,9),(809,9),(810,9),(811,9),(812,9),(813,9),(814,9),(815,9),(816,9),(817,9),(821,9),(822,9),(824,9),(825,9),(826,9),(828,9),(829,9),(831,9),(832,9),(835,9),(839,9),(840,9),(841,9),(843,9),(844,9),(845,9),(847,9),(848,9),(849,9),(851,9),(856,9),(857,9),(858,9),(866,9),(868,9),(869,9),(870,9),(875,9),(876,9),(877,9),(879,9),(881,9),(883,9),(888,9),(889,9),(890,9),(891,9),(893,9),(894,9),(895,9),(906,9),(910,9),(912,9),(924,9),(925,9),(929,9),(930,9),(932,9),(1039,9),(1235,9),(1239,9),(1258,9),(1301,9),(207,10),(208,10),(210,10),(212,10),(214,10),(215,10),(216,10),(217,10),(219,10),(220,10),(221,10),(222,10),(223,10),(224,10),(225,10),(226,10),(227,10),(228,10),(229,10),(231,10),(232,10),(233,10),(234,10),(235,10),(935,10),(941,10),(942,10),(950,10),(952,10),(955,10),(956,10),(958,10),(960,10),(961,10),(962,10),(963,10),(964,10),(965,10),(969,10),(970,10),(971,10),(972,10),(973,10),(974,10),(975,10),(977,10),(979,10),(980,10),(982,10),(983,10),(986,10),(987,10),(989,10),(990,10),(991,10),(992,10),(993,10),(994,10),(998,10),(999,10),(1000,10),(1003,10),(1005,10),(1010,10),(1011,10),(1012,10),(1013,10),(1014,10),(1016,10),(1017,10),(1020,10),(1021,10),(1025,10),(1026,10),(1027,10),(1028,10),(1029,10),(1030,10),(1034,10),(1037,10),(1039,10),(1041,10),(1042,10),(1043,10),(1048,10),(1049,10),(1052,10),(1053,10),(1055,10),(1056,10),(1057,10),(1058,10),(1059,10),(1060,10),(1061,10),(1065,10),(1070,10),(1073,10),(1079,10),(1081,10),(1083,10),(1085,10),(1086,10),(1089,10),(1090,10),(1091,10),(1093,10),(1095,10),(1104,10),(1107,10),(1108,10),(1110,10),(1117,10),(1118,10),(1119,10),(1120,10),(1121,10),(1122,10),(1123,10),(1124,10),(1125,10),(1126,10),(1128,10),(1130,10),(1131,10),(1132,10),(1133,10),(1134,10),(1136,10),(1137,10),(1138,10),(1139,10),(1141,10),(1142,10),(1143,10),(1146,10),(1149,10),(1150,10),(1154,10),(1155,10),(1156,10),(1157,10),(1158,10),(1159,10),(1160,10),(1327,10),(22,12),(24,12),(25,12),(29,12),(30,12),(47,12),(56,12),(93,12),(97,12),(98,12),(100,12),(116,12),(117,12),(132,12),(146,12),(147,12),(148,12),(159,12),(185,12),(186,12),(194,12),(209,12),(212,12),(215,12),(218,12),(236,12),(237,12),(238,12),(239,12),(240,12),(241,12),(242,12),(243,12),(244,12),(245,12),(246,12),(247,12),(248,12),(250,12),(251,12),(252,12),(253,12),(254,12),(255,12),(256,12),(257,12),(258,12),(259,12),(260,12),(261,12),(262,12),(263,12),(264,12),(265,12),(266,12),(267,12),(268,12),(269,12),(270,12),(272,12),(273,12),(274,12),(275,12),(276,12),(277,12),(279,12),(280,12),(281,12),(282,12),(283,12),(284,12),(285,12),(286,12),(287,12),(288,12),(289,12),(290,12),(291,12),(293,12),(295,12),(297,12),(298,12),(299,12),(300,12),(303,12),(304,12),(306,12),(307,12),(308,12),(309,12),(311,12),(312,12),(313,12),(314,12),(315,12),(317,12),(318,12),(319,12),(320,12),(321,12),(322,12),(323,12),(324,12),(325,12),(326,12),(327,12),(328,12),(329,12),(330,12),(331,12),(332,12),(333,12),(334,12),(335,12),(337,12),(338,12),(339,12),(340,12),(341,12),(342,12),(343,12),(344,12),(345,12),(346,12),(347,12),(348,12),(349,12),(350,12),(352,12),(353,12),(354,12),(356,12),(357,12),(358,12),(359,12),(360,12),(361,12),(362,12),(363,12),(364,12),(365,12),(366,12),(367,12),(368,12),(369,12),(371,12),(372,12),(373,12),(374,12),(375,12),(376,12),(377,12),(378,12),(379,12),(380,12),(381,12),(382,12),(383,12),(384,12),(386,12),(387,12),(388,12),(389,12),(391,12),(392,12),(393,12),(394,12),(395,12),(396,12),(399,12),(400,12),(402,12),(415,12),(430,12),(431,12),(434,12),(435,12),(437,12),(498,12),(500,12),(502,12),(503,12),(507,12),(508,12),(509,12),(510,12),(511,12),(512,12),(513,12),(514,12),(521,12),(523,12),(524,12),(527,12),(528,12),(532,12),(533,12),(539,12),(540,12),(541,12),(542,12),(543,12),(544,12),(548,12),(549,12),(551,12),(554,12),(559,12),(562,12),(563,12),(564,12),(573,12),(575,12),(576,12),(580,12),(581,12),(582,12),(585,12),(587,12),(589,12),(590,12),(591,12),(595,12),(596,12),(597,12),(598,12),(599,12),(600,12),(601,12),(602,12),(603,12),(604,12),(606,12),(607,12),(608,12),(609,12),(612,12),(614,12),(616,12),(617,12),(620,12),(621,12),(622,12),(624,12),(625,12),(627,12),(628,12),(629,12),(630,12),(632,12),(634,12),(635,12),(957,12),(1088,12),(1192,12),(1201,12),(1234,12),(1238,12),(1256,12),(1261,12),(1263,12),(1282,12),(1286,12),(1290,12),(1295,12),(1308,12),(3,13),(4,13),(5,13),(6,13),(7,13),(8,13),(10,13),(12,13),(13,13),(14,13),(15,13),(16,13),(17,13),(18,13),(21,13),(23,13),(26,13),(27,13),(28,13),(31,13),(32,13),(34,13),(35,13),(36,13),(37,13),(38,13),(39,13),(40,13),(41,13),(42,13),(43,13),(44,13),(45,13),(46,13),(48,13),(49,13),(50,13),(51,13),(52,13),(53,13),(54,13),(55,13),(57,13),(58,13),(59,13),(60,13),(61,13),(62,13),(63,13),(64,13),(65,13),(67,13),(68,13),(69,13),(70,13),(71,13),(72,13),(73,13),(74,13),(75,13),(76,13),(77,13),(78,13),(79,13),(80,13),(81,13),(84,13),(87,13),(88,13),(89,13),(90,13),(101,13),(103,13),(106,13),(107,13),(108,13),(109,13),(110,13),(112,13),(113,13),(115,13),(116,13),(118,13),(119,13),(120,13),(122,13),(123,13),(124,13),(127,13),(128,13),(129,13),(130,13),(131,13),(133,13),(134,13),(135,13),(136,13),(138,13),(139,13),(140,13),(141,13),(145,13),(146,13),(147,13),(149,13),(150,13),(151,13),(152,13),(153,13),(154,13),(155,13),(156,13),(157,13),(160,13),(162,13),(164,13),(166,13),(169,13),(170,13),(171,13),(172,13),(176,13),(179,13),(180,13),(184,13),(185,13),(186,13),(187,13),(188,13),(189,13),(190,13),(191,13),(192,13),(193,13),(195,13),(196,13),(197,13),(198,13),(199,13),(402,13),(403,13),(404,13),(405,13),(406,13),(407,13),(408,13),(409,13),(411,13),(412,13),(414,13),(415,13),(416,13),(417,13),(419,13),(420,13),(421,13),(422,13),(423,13),(424,13),(425,13),(426,13),(427,13),(430,13),(433,13),(434,13),(435,13),(437,13),(501,13),(503,13),(506,13),(516,13),(517,13),(518,13),(519,13),(525,13),(526,13),(529,13),(530,13),(535,13),(538,13),(545,13),(546,13),(553,13),(574,13),(578,13),(588,13),(592,13),(593,13),(614,13),(626,13),(631,13),(633,13),(638,13),(1239,13),(9,15),(20,15),(99,15),(104,15),(105,15),(114,15),(121,15),(142,15),(158,15),(163,15),(165,15),(174,15),(175,15),(181,15),(200,15),(201,15),(202,15),(203,15),(204,15),(205,15),(208,15),(211,15),(213,15),(214,15),(217,15),(225,15),(226,15),(231,15),(232,15),(234,15),(441,15),(446,15),(447,15),(450,15),(451,15),(457,15),(459,15),(460,15),(461,15),(467,15),(468,15),(470,15),(474,15),(476,15),(484,15),(485,15),(486,15),(487,15),(491,15),(494,15),(495,15),(496,15),(515,15),(610,15),(852,15),(934,15),(938,15),(939,15),(940,15),(941,15),(942,15),(946,15),(949,15),(955,15),(956,15),(957,15),(979,15),(980,15),(986,15),(987,15),(989,15),(991,15),(992,15),(993,15),(996,15),(998,15),(1005,15),(1007,15),(1016,15),(1018,15),(1025,15),(1029,15),(1030,15),(1034,15),(1038,15),(1041,15),(1046,15),(1047,15),(1051,15),(1052,15),(1053,15),(1059,15),(1064,15),(1066,15),(1067,15),(1071,15),(1074,15),(1077,15),(1078,15),(1090,15),(1092,15),(1095,15),(1098,15),(1108,15),(1110,15),(1111,15),(1112,15),(1113,15),(1114,15),(1116,15),(1118,15),(1128,15),(1135,15),(1139,15),(1141,15),(1142,15),(1143,15),(1144,15),(1145,15),(1147,15),(1148,15),(1149,15),(1157,15),(1160,15),(1180,15),(1189,15),(1201,15),(1248,15),(1270,15),(1280,15),(1281,15),(1282,15),(1289,15),(1296,15),(1302,15),(9,16),(20,16),(104,16),(105,16),(114,16),(121,16),(142,16),(158,16),(163,16),(174,16),(175,16),(181,16),(200,16),(201,16),(202,16),(203,16),(204,16),(205,16),(207,16),(208,16),(210,16),(211,16),(212,16),(213,16),(214,16),(215,16),(217,16),(219,16),(220,16),(221,16),(222,16),(223,16),(224,16),(225,16),(226,16),(227,16),(228,16),(229,16),(231,16),(232,16),(233,16),(234,16),(235,16),(439,16),(441,16),(443,16),(444,16),(446,16),(447,16),(448,16),(450,16),(451,16),(453,16),(454,16),(455,16),(456,16),(457,16),(458,16),(459,16),(460,16),(461,16),(464,16),(465,16),(466,16),(467,16),(468,16),(469,16),(470,16),(472,16),(474,16),(476,16),(479,16),(480,16),(482,16),(483,16),(484,16),(485,16),(486,16),(487,16),(488,16),(490,16),(491,16),(494,16),(495,16),(496,16),(515,16),(778,16),(852,16),(934,16),(935,16),(936,16),(937,16),(939,16),(940,16),(941,16),(942,16),(943,16),(944,16),(945,16),(946,16),(947,16),(948,16),(949,16),(950,16),(951,16),(952,16),(953,16),(954,16),(955,16),(956,16),(957,16),(958,16),(959,16),(960,16),(961,16),(962,16),(963,16),(964,16),(965,16),(966,16),(967,16),(969,16),(970,16),(971,16),(972,16),(973,16),(974,16),(975,16),(976,16),(977,16),(978,16),(979,16),(980,16),(981,16),(982,16),(983,16),(984,16),(985,16),(986,16),(987,16),(988,16),(989,16),(990,16),(991,16),(992,16),(993,16),(994,16),(995,16),(997,16),(998,16),(999,16),(1000,16),(1001,16),(1003,16),(1004,16),(1006,16),(1008,16),(1009,16),(1010,16),(1011,16),(1012,16),(1013,16),(1014,16),(1015,16),(1016,16),(1017,16),(1019,16),(1020,16),(1021,16),(1022,16),(1023,16),(1024,16),(1025,16),(1026,16),(1027,16),(1028,16),(1029,16),(1030,16),(1031,16),(1032,16),(1033,16),(1034,16),(1035,16),(1036,16),(1037,16),(1041,16),(1042,16),(1043,16),(1044,16),(1045,16),(1048,16),(1049,16),(1050,16),(1051,16),(1054,16),(1055,16),(1056,16),(1057,16),(1058,16),(1060,16),(1061,16),(1062,16),(1063,16),(1065,16),(1067,16),(1068,16),(1069,16),(1070,16),(1072,16),(1075,16),(1076,16),(1077,16),(1078,16),(1080,16),(1081,16),(1082,16),(1083,16),(1084,16),(1085,16),(1086,16),(1087,16),(1089,16),(1091,16),(1092,16),(1093,16),(1094,16),(1096,16),(1097,16),(1098,16),(1099,16),(1100,16),(1101,16),(1102,16),(1103,16),(1105,16),(1106,16),(1113,16),(1115,16),(1117,16),(1119,16),(1120,16),(1121,16),(1122,16),(1123,16),(1124,16),(1125,16),(1126,16),(1127,16),(1128,16),(1129,16),(1130,16),(1131,16),(1132,16),(1133,16),(1134,16),(1135,16),(1136,16),(1137,16),(1138,16),(1139,16),(1141,16),(1142,16),(1143,16),(1144,16),(1145,16),(1148,16),(1149,16),(1150,16),(1151,16),(1152,16),(1153,16),(1154,16),(1155,16),(1156,16),(1157,16),(1158,16),(1159,16),(1201,16),(1248,16),(1249,16),(1250,16),(1257,16),(1270,16),(1280,16),(1289,16),(1302,16),(1327,16),(1,35),(2,35),(94,35),(249,35),(271,35),(310,35),(355,35),(385,35),(499,35),(501,35),(506,35),(522,35),(525,35),(526,35),(529,35),(530,35),(534,35),(535,35),(536,35),(537,35),(545,35),(546,35),(548,35),(549,35),(553,35),(555,35),(556,35),(559,35),(560,35),(561,35),(566,35),(567,35),(568,35),(571,35),(572,35),(574,35),(577,35),(578,35),(583,35),(588,35),(594,35),(605,35),(618,35),(619,35),(623,35),(626,35),(639,35),(1,36),(2,36),(3,37),(15,37),(16,37),(41,37),(42,37),(48,37),(57,37),(62,37),(67,37),(73,37),(82,37),(83,37),(103,37),(124,37),(131,37),(133,37),(161,37),(162,37),(180,37),(197,37),(322,37),(501,37),(505,37),(506,37),(522,37),(526,37),(529,37),(530,37),(531,37),(534,37),(535,37),(537,37),(550,37),(555,37),(556,37),(557,37),(558,37),(561,37),(565,37),(566,37),(567,37),(568,37),(569,37),(570,37),(571,37),(572,37),(577,37),(583,37),(618,37),(619,37),(623,37),(626,37),(636,37),(637,37),(10,38),(92,38),(95,38),(102,38),(111,38),(116,38),(143,38),(144,38),(167,38),(209,38),(212,38),(215,38),(218,38),(230,38),(236,38),(285,38),(321,38),(327,38),(332,38),(334,38),(337,38),(343,38),(347,38),(362,38),(363,38),(364,38),(366,38),(367,38),(368,38),(369,38),(371,38),(373,38),(378,38),(379,38),(390,38),(391,38),(429,38),(504,38),(510,38),(515,38),(520,38),(539,38),(564,38),(584,38),(585,38),(589,38),(597,38),(599,38),(600,38),(601,38),(602,38),(603,38),(604,38),(605,38),(607,38),(609,38),(610,38),(634,38),(639,38),(759,38),(884,38),(885,38),(909,38),(915,38),(958,38),(960,38),(961,38),(962,38),(963,38),(964,38),(965,38),(967,38),(970,38),(980,38),(999,38),(1019,38),(1033,38),(1036,38),(1039,38),(1045,38),(1062,38),(1063,38),(1080,38),(1087,38),(1088,38),(1091,38),(1130,38),(1140,38),(1142,38),(1144,38),(1145,38),(1151,38),(1290,38),(11,39),(17,39),(18,39),(19,39),(30,39),(33,39),(35,39),(36,39),(39,39),(40,39),(45,39),(47,39),(56,39),(60,39),(66,39),(68,39),(69,39),(70,39),(72,39),(74,39),(76,39),(82,39),(83,39),(84,39),(85,39),(86,39),(87,39),(91,39),(92,39),(93,39),(94,39),(95,39),(96,39),(97,39),(98,39),(102,39),(111,39),(114,39),(116,39),(117,39),(125,39),(126,39),(130,39),(132,39),(137,39),(141,39),(143,39),(144,39),(146,39),(148,39),(154,39),(159,39),(160,39),(167,39),(168,39),(173,39),(176,39),(177,39),(179,39),(182,39),(183,39),(185,39),(186,39),(194,39),(195,39),(198,39),(209,39),(210,39),(212,39),(215,39),(218,39),(230,39),(236,39),(237,39),(238,39),(239,39),(240,39),(241,39),(242,39),(243,39),(244,39),(245,39),(247,39),(248,39),(250,39),(251,39),(252,39),(253,39),(254,39),(255,39),(257,39),(258,39),(259,39),(266,39),(270,39),(272,39),(273,39),(274,39),(279,39),(280,39),(281,39),(282,39),(283,39),(284,39),(285,39),(286,39),(287,39),(288,39),(290,39),(291,39),(292,39),(293,39),(294,39),(295,39),(296,39),(297,39),(298,39),(299,39),(300,39),(301,39),(302,39),(303,39),(305,39),(306,39),(307,39),(308,39),(309,39),(311,39),(312,39),(313,39),(314,39),(315,39),(316,39),(317,39),(318,39),(319,39),(320,39),(321,39),(323,39),(324,39),(325,39),(327,39),(329,39),(331,39),(332,39),(334,39),(335,39),(336,39),(337,39),(338,39),(339,39),(340,39),(341,39),(342,39),(343,39),(344,39),(345,39),(346,39),(347,39),(348,39),(349,39),(350,39),(352,39),(353,39),(354,39),(356,39),(357,39),(358,39),(359,39),(360,39),(361,39),(362,39),(363,39),(364,39),(366,39),(368,39),(369,39),(371,39),(372,39),(373,39),(374,39),(377,39),(379,39),(380,39),(381,39),(382,39),(383,39),(384,39),(386,39),(387,39),(388,39),(389,39),(390,39),(391,39),(392,39),(393,39),(394,39),(395,39),(396,39),(400,39),(404,39),(407,39),(414,39),(416,39),(417,39),(422,39),(426,39),(427,39),(429,39),(431,39),(640,39),(641,39),(643,39),(645,39),(646,39),(649,39),(651,39),(652,39),(653,39),(654,39),(655,39),(656,39),(657,39),(658,39),(660,39),(661,39),(662,39),(663,39),(666,39),(670,39),(672,39),(675,39),(678,39),(679,39),(681,39),(682,39),(683,39),(684,39),(686,39),(693,39),(694,39),(695,39),(696,39),(699,39),(704,39),(705,39),(706,39),(711,39),(718,39),(719,39),(720,39),(724,39),(727,39),(728,39),(729,39),(733,39),(734,39),(735,39),(736,39),(742,39),(744,39),(745,39),(751,39),(752,39),(753,39),(757,39),(758,39),(759,39),(769,39),(771,39),(772,39),(773,39),(774,39),(775,39),(776,39),(779,39),(780,39),(781,39),(782,39),(784,39),(787,39),(789,39),(791,39),(793,39),(794,39),(803,39),(807,39),(818,39),(819,39),(820,39),(823,39),(827,39),(829,39),(830,39),(833,39),(834,39),(835,39),(836,39),(837,39),(838,39),(842,39),(846,39),(850,39),(853,39),(854,39),(855,39),(856,39),(859,39),(860,39),(861,39),(862,39),(863,39),(864,39),(865,39),(867,39),(871,39),(872,39),(873,39),(874,39),(878,39),(882,39),(884,39),(885,39),(886,39),(887,39),(888,39),(889,39),(892,39),(896,39),(897,39),(898,39),(899,39),(900,39),(901,39),(902,39),(903,39),(904,39),(905,39),(907,39),(908,39),(909,39),(910,39),(911,39),(913,39),(914,39),(915,39),(916,39),(917,39),(918,39),(919,39),(920,39),(921,39),(922,39),(923,39),(926,39),(927,39),(928,39),(930,39),(957,39),(1088,39),(1140,39),(1167,39),(1168,39),(1184,39),(1190,39),(1192,39),(1197,39),(1199,39),(1201,39),(1203,39),(1230,39),(1234,39),(1235,39),(1236,39),(1237,39),(1238,39),(1249,39),(1250,39),(1255,39),(1256,39),(1257,39),(1258,39),(1259,39),(1261,39),(1263,39),(1277,39),(1280,39),(1282,39),(1286,39),(1289,39),(1290,39),(1295,39),(1301,39),(1306,39),(1307,39),(1308,39),(1318,39),(1330,39),(11,40),(22,40),(24,40),(25,40),(29,40),(30,40),(96,40),(100,40),(146,40),(183,40),(185,40),(210,40),(431,40),(542,40),(551,40),(573,40),(575,40),(591,40),(595,40),(596,40),(620,40),(621,40),(622,40),(641,40),(643,40),(649,40),(651,40),(652,40),(653,40),(654,40),(656,40),(662,40),(666,40),(678,40),(679,40),(683,40),(684,40),(734,40),(735,40),(736,40),(752,40),(753,40),(757,40),(769,40),(771,40),(772,40),(781,40),(789,40),(793,40),(807,40),(855,40),(860,40),(861,40),(871,40),(874,40),(882,40),(885,40),(886,40),(887,40),(892,40),(896,40),(898,40),(899,40),(900,40),(902,40),(904,40),(905,40),(907,40),(908,40),(909,40),(911,40),(913,40),(916,40),(917,40),(918,40),(919,40),(920,40),(923,40),(926,40),(927,40),(928,40),(1140,40),(1184,40),(1190,40),(1234,40),(1237,40),(1238,40),(1263,40),(1286,40),(1307,40),(1308,40),(15,41),(41,41),(42,41),(46,41),(48,41),(57,41),(62,41),(67,41),(73,41),(86,41),(103,41),(124,41),(127,41),(131,41),(133,41),(162,41),(170,41),(180,41),(197,41),(534,41),(99,42),(178,42),(161,43),(246,43),(249,43),(256,43),(260,43),(261,43),(262,43),(263,43),(264,43),(265,43),(267,43),(268,43),(269,43),(271,43),(275,43),(276,43),(277,43),(278,43),(304,43),(310,43),(333,43),(355,43),(365,43),(367,43),(375,43),(376,43),(385,43),(399,43),(165,44),(177,44),(1002,44),(1111,44),(1114,44),(1153,44),(1164,44),(1166,44),(1172,44),(1174,44),(1179,44),(1180,44),(1182,44),(1185,44),(1186,44),(1187,44),(1189,44),(1193,44),(1194,44),(1198,44),(1199,44),(1200,44),(1203,44),(1204,44),(1206,44),(1207,44),(1208,44),(1209,44),(1210,44),(1211,44),(1212,44),(1213,44),(1214,44),(1216,44),(1218,44),(1219,44),(1228,44),(1229,44),(1230,44),(1236,44),(1244,44),(1247,44),(1252,44),(1255,44),(1256,44),(1259,44),(1262,44),(1265,44),(1266,44),(1267,44),(1268,44),(1275,44),(1276,44),(1284,44),(1292,44),(1294,44),(1296,44),(1297,44),(1298,44),(1303,44),(1304,44),(1309,44),(1312,44),(1313,44),(1316,44),(1320,44),(1321,44),(1322,44),(1323,44),(1324,44),(1325,44),(1328,44),(207,45),(208,45),(210,45),(211,45),(212,45),(213,45),(214,45),(215,45),(216,45),(217,45),(219,45),(220,45),(221,45),(222,45),(223,45),(224,45),(225,45),(226,45),(227,45),(228,45),(229,45),(231,45),(232,45),(233,45),(234,45),(235,45),(444,45),(448,45),(450,45),(456,45),(464,45),(465,45),(466,45),(474,45),(479,45),(483,45),(515,45),(610,45),(778,45),(852,45),(935,45),(944,45),(945,45),(948,45),(950,45),(951,45),(952,45),(958,45),(960,45),(961,45),(962,45),(963,45),(964,45),(965,45),(969,45),(970,45),(971,45),(972,45),(973,45),(974,45),(975,45),(976,45),(977,45),(978,45),(982,45),(983,45),(990,45),(994,45),(997,45),(999,45),(1003,45),(1006,45),(1007,45),(1009,45),(1011,45),(1012,45),(1013,45),(1014,45),(1017,45),(1019,45),(1020,45),(1021,45),(1026,45),(1027,45),(1028,45),(1033,45),(1035,45),(1036,45),(1042,45),(1043,45),(1044,45),(1048,45),(1049,45),(1050,45),(1054,45),(1055,45),(1056,45),(1057,45),(1058,45),(1059,45),(1060,45),(1061,45),(1063,45),(1064,45),(1065,45),(1068,45),(1070,45),(1081,45),(1083,45),(1084,45),(1085,45),(1086,45),(1089,45),(1090,45),(1091,45),(1096,45),(1101,45),(1102,45),(1103,45),(1104,45),(1107,45),(1112,45),(1115,45),(1116,45),(1117,45),(1119,45),(1120,45),(1121,45),(1122,45),(1123,45),(1124,45),(1125,45),(1126,45),(1129,45),(1130,45),(1131,45),(1132,45),(1133,45),(1134,45),(1136,45),(1137,45),(1138,45),(1150,45),(1151,45),(1152,45),(1154,45),(1155,45),(1156,45),(1158,45),(1159,45),(1160,45),(1173,45),(1175,45),(1196,45),(1201,45),(1232,45),(1262,45),(1270,45),(1280,45),(1281,45),(1327,45),(289,46),(322,46),(326,46),(328,46),(330,46),(315,47),(711,47),(776,47),(819,47),(820,47),(837,47),(838,47),(951,47),(1167,47),(1168,47),(1277,47),(403,48),(405,48),(406,48),(408,48),(409,48),(411,48),(412,48),(419,48),(420,48),(421,48),(423,48),(424,48),(425,48),(433,48),(410,49),(432,49),(436,49),(413,50),(428,50),(413,51),(418,51),(428,52),(432,53),(436,53),(438,54),(471,54),(473,54),(475,54),(440,55),(442,55),(449,55),(452,55),(462,55),(463,55),(477,55),(478,55),(481,55),(492,55),(493,55),(440,56),(442,56),(449,56),(452,56),(477,56),(478,56),(481,56),(493,56),(471,57),(472,57),(473,57),(475,57),(492,58),(532,59),(536,59),(547,59),(554,59),(560,59),(594,59),(540,60),(541,60),(616,60),(938,61),(943,61),(947,61),(953,61),(954,61),(959,61),(966,61),(968,61),(978,61),(981,61),(984,61),(985,61),(988,61),(995,61),(996,61),(997,61),(1006,61),(1008,61),(1015,61),(1022,61),(1023,61),(1024,61),(1031,61),(1032,61),(1038,61),(1046,61),(1075,61),(1076,61),(1094,61),(1099,61),(1100,61),(1127,61),(1129,61),(1152,61),(1163,61),(1169,61),(1171,61),(1174,61),(1178,61),(1191,61),(1193,61),(1194,61),(1197,61),(1198,61),(1202,61),(1206,61),(1214,61),(1216,61),(1217,61),(1225,61),(1227,61),(1242,61),(1254,61),(1264,61),(1265,61),(1271,61),(1278,61),(1279,61),(1284,61),(1303,61),(1304,61),(1306,61),(1317,61),(1318,61),(1319,61),(1320,61),(1321,61),(1323,61),(1324,61),(1325,61),(1326,61),(1002,62),(1040,62),(1163,62),(1165,62),(1169,62),(1170,62),(1171,62),(1172,62),(1173,62),(1176,62),(1177,62),(1179,62),(1181,62),(1183,62),(1188,62),(1195,62),(1196,62),(1200,62),(1202,62),(1205,62),(1215,62),(1217,62),(1218,62),(1220,62),(1221,62),(1222,62),(1223,62),(1224,62),(1225,62),(1226,62),(1227,62),(1231,62),(1232,62),(1233,62),(1240,62),(1241,62),(1242,62),(1243,62),(1245,62),(1246,62),(1247,62),(1251,62),(1253,62),(1254,62),(1260,62),(1264,62),(1268,62),(1269,62),(1271,62),(1272,62),(1273,62),(1274,62),(1278,62),(1283,62),(1285,62),(1287,62),(1288,62),(1291,62),(1293,62),(1297,62),(1298,62),(1299,62),(1300,62),(1305,62),(1309,62),(1310,62),(1311,62),(1312,62),(1313,62),(1314,62),(1315,62),(1317,62),(1319,62),(1322,62),(1329,62),(1330,62),(1331,62),(1004,63),(1040,64),(1240,65);
/*!40000 ALTER TABLE `exercise_secondary_muscles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-18 14:50:31
