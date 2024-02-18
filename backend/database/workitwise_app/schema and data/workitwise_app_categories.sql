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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `modified_at` datetime(6) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `is_active` bit(1) DEFAULT 1 NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `UK_5ky4frjmcobbiayt5jyx53mff` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories`(`category_id`, `created_at`, `modified_at`, `category`, `image_url`) VALUES (21,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','back','muscle-grp-category/back'),(22,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','cardio','muscle-grp-category/cardio'),(23,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','chest','muscle-grp-category/chest'),(24,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','lower arms','muscle-grp-category/lowerarms'),(25,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','lower legs','muscle-grp-category/lowerlegs'),(26,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','neck','muscle-grp-category/neck'),(27,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','shoulders','muscle-grp-category/shoulders'),(28,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','upper arms','muscle-grp-category/upperarms'),(29,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','upper legs','muscle-grp-category/upperlegs'),(30,'2024-02-18 00:54:45.000000','2024-02-18 00:54:45.000000','waist','muscle-grp-category/waist');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
