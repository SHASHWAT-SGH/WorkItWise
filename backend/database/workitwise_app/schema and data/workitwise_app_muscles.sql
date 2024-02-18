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
-- Table structure for table `muscles`
--

DROP TABLE IF EXISTS `muscles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscles` (
  `muscle_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) DEFAULT NULL,
  `muscle` varchar(255) NOT NULL,
  `is_active` bit(1) DEFAULT 1 NOT NULL,
  PRIMARY KEY (`muscle_id`),
  UNIQUE KEY `UK_mgoph3ragvgjntudcrqlnb2iw` (`muscle`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscles`
--

LOCK TABLES `muscles` WRITE;
/*!40000 ALTER TABLE `muscles` DISABLE KEYS */;
INSERT INTO `muscles`(`muscle_id`, `created_at`, `modified_at`, `muscle`) VALUES (1,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','levator scapulae'),(2,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','lats'),(3,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','spine'),(4,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','upper back'),(5,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','traps'),(6,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','cardiovascular system'),(7,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','pectorals'),(8,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','serratus anterior'),(9,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','forearms'),(10,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','calves'),(11,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','delts'),(12,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','triceps'),(13,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','biceps'),(14,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','quads'),(15,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','glutes'),(16,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','hamstrings'),(17,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','adductors'),(18,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','abductors'),(19,'2024-02-18 00:57:32.000000','2024-02-18 00:57:32.000000','abs'),(35,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','trapezius'),(36,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','sternocleidomastoid'),(37,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','rhomboids'),(38,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','core'),(39,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','shoulders'),(40,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','chest'),(41,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','rear deltoids'),(42,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','abdominals'),(43,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','deltoids'),(44,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','obliques'),(45,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','quadriceps'),(46,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','latissimus dorsi'),(47,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','back'),(48,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','brachialis'),(49,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','wrists'),(50,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','wrist flexors'),(51,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','wrist extensors'),(52,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','grip muscles'),(53,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','hands'),(54,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','ankle stabilizers'),(55,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','ankles'),(56,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','feet'),(57,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','soleus'),(58,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','shins'),(59,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','rotator cuff'),(60,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','upper chest'),(61,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','lower back'),(62,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','hip flexors'),(63,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','groin'),(64,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','lower abs'),(65,'2024-02-18 01:12:13.000000','2024-02-18 01:12:13.000000','inner thighs');
/*!40000 ALTER TABLE `muscles` ENABLE KEYS */;
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
