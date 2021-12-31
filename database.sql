-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: connecus_db
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `ceus_funding`
--

DROP TABLE IF EXISTS `ceus_funding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_funding` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `joiner_interest` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `link` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `funding_money` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `wallet_address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `token_address` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_funding`
--

LOCK TABLES `ceus_funding` WRITE;
/*!40000 ALTER TABLE `ceus_funding` DISABLE KEYS */;
INSERT INTO `ceus_funding` VALUES (41,'Funding Post','Funding Post 2021','Tham gia họp fam đầu năm 2022','/pk-wealth-management-400x400y.jpg','1000','2021-12-31 13:23:22','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','0x948a735dEad0edD562CA3723D5afE577ED5ba7F6','2021-12-19 04:24:04'),(42,'Fan club 2022','Fan club tổ chức tại Hà Nội đầu năm 2022','Tham gia gặp mặt các nghệ sỹ nổi tiếng vùng với viruss','/viruss-fan.jpg','1000','2021-12-31 13:30:42','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','0x948a735dEad0edD562CA3723D5afE577ED5ba7F6','2021-12-19 04:31:41');
/*!40000 ALTER TABLE `ceus_funding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_task`
--

DROP TABLE IF EXISTS `ceus_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_task` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `link` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `wallet_address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `token_address` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_task`
--

LOCK TABLES `ceus_task` WRITE;
/*!40000 ALTER TABLE `ceus_task` DISABLE KEYS */;
INSERT INTO `ceus_task` VALUES (41,'Nhiệm vụ nhận quà cuối năm 2021','Nhiệm vụ nhận quà miễn phí cuối năm 2021, thông qua việc tương tác với các kênh cộng đồng','/pk-wealth-management-400x400y.jpg','2021-12-31 14:04:19','2021-12-19 05:06:24','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','0x948a735dEad0edD562CA3723D5afE577ED5ba7F6');
/*!40000 ALTER TABLE `ceus_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_task_option`
--

DROP TABLE IF EXISTS `ceus_task_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_task_option` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `task_id` int DEFAULT NULL,
  `reward` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_task_option`
--

LOCK TABLES `ceus_task_option` WRITE;
/*!40000 ALTER TABLE `ceus_task_option` DISABLE KEYS */;
INSERT INTO `ceus_task_option` VALUES (1,'12',31,'12'),(2,'123',32,'23'),(3,'123123',33,'23'),(4,'123',33,'123'),(5,'123',33,'123'),(6,'123',33,'123'),(7,'123123',34,'23'),(8,'123',34,'123'),(9,'123',34,'123'),(10,'123',34,'123'),(11,'123',35,'11'),(12,'123',35,'123'),(13,'12',36,'10'),(14,'12',36,'12'),(15,'23',36,'12'),(16,'24',36,'12'),(17,'11',37,'1'),(18,'12',37,'12'),(19,'12',37,'3'),(20,'12',37,'0'),(21,'1',38,'21'),(22,'12',38,'12'),(23,'3',38,'11'),(24,'12',39,'12'),(25,'12',39,'12'),(26,'12',39,'12'),(27,'Like fanpage Facebook',40,'10'),(28,'Đăng ký, theo dõi kênh Youtube',40,'10'),(29,'Tham gia cộng đồng Discord',40,'10'),(30,'Tham gia cộng đồng Telegram',40,'10'),(31,'Like fanpage Facebook',41,'10'),(32,'Đăng ký, theo dõi kênh Youtube',41,'10'),(33,'Tham gia cộng đồng Discord',41,'10'),(34,'Tham gia cộng đồng Telegram',41,'0');
/*!40000 ALTER TABLE `ceus_task_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_token`
--

DROP TABLE IF EXISTS `ceus_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token_name` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `symbol` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `token_description` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `token_address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `wallet_address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `link` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `total_supply` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `facebook_url` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_token`
--

LOCK TABLES `ceus_token` WRITE;
/*!40000 ALTER TABLE `ceus_token` DISABLE KEYS */;
INSERT INTO `ceus_token` VALUES (8,'Chi Pu Token','CPT','Chi Pu Token Cocial Token Club','0xFB4eb86b92FD0792a31DC65955a3A8505ff9cbe3','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','/Chipu.png','2000','2021-12-19 04:10:35','https://www.facebook.com/chipupu93'),(9,'Son Tung MTP','STM','Son Tung MTP Social Token Fan Club','0xCe053890C038a7489B39665430F3bF20FB8810c4','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','/SongTungMTP.png','2000','2021-12-19 04:13:55','https://www.facebook.com/MTP.Fan'),(10,'Do Mixi Gaming','DMG','Do Mixi Gaming Social Token Club','0x29bF0B03Db1c8C92ABab515c28317B331a20AF3F','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','/DoMixi.png','2000','2021-12-19 04:16:57','https://www.facebook.com/MixiGaming'),(11,'ViruSs Gaming Token','VGT','ViruSs Gaming Social Token Fan Club','0x948a735dEad0edD562CA3723D5afE577ED5ba7F6','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','/Virus.png','10000','2021-12-19 04:23:12','https://www.facebook.com/ViruSsOP');
/*!40000 ALTER TABLE `ceus_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_user_voting`
--

DROP TABLE IF EXISTS `ceus_user_voting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_user_voting` (
  `id` int NOT NULL,
  `user_wallet_address` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `voting_id` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `voting_option` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_user_voting`
--

LOCK TABLES `ceus_user_voting` WRITE;
/*!40000 ALTER TABLE `ceus_user_voting` DISABLE KEYS */;
/*!40000 ALTER TABLE `ceus_user_voting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_voting`
--

DROP TABLE IF EXISTS `ceus_voting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_voting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `description` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `link` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `time` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `wallet_address` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `token_address` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_voting`
--

LOCK TABLES `ceus_voting` WRITE;
/*!40000 ALTER TABLE `ceus_voting` DISABLE KEYS */;
INSERT INTO `ceus_voting` VALUES (36,'Chọn địa điểm tổ chức TalkShow metaverse','Chọn địa điểm tổ chức TalkShow metaverse đầu năm 2022','/voting.jpg','2021-12-31 13:33:15','2021-12-19 04:35:20','0xA65210931E5FfC65A8543D290edF7e9eE5A71266','0x948a735dEad0edD562CA3723D5afE577ED5ba7F6');
/*!40000 ALTER TABLE `ceus_voting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceus_voting_option`
--

DROP TABLE IF EXISTS `ceus_voting_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceus_voting_option` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `voting_id` int DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceus_voting_option`
--

LOCK TABLES `ceus_voting_option` WRITE;
/*!40000 ALTER TABLE `ceus_voting_option` DISABLE KEYS */;
INSERT INTO `ceus_voting_option` VALUES (62,'Hà nội',36,'2021-12-19 04:35:20'),(63,'Hồ Chí Minh',36,'2021-12-19 04:35:20'),(64,'Huế',36,'2021-12-19 04:35:20'),(65,'Đà Nẵng',36,'2021-12-19 04:35:20');
/*!40000 ALTER TABLE `ceus_voting_option` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-19 14:45:08
