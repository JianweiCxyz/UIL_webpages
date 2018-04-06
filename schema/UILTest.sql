-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 02, 2018 at 05:00 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `utw10792`
--

-- --------------------------------------------------------

--
-- Table structure for table `Votes`
--

DROP TABLE IF EXISTS `Votes`;
CREATE TABLE IF NOT EXISTS `votes` (
  `geoid` bigint(20) NOT NULL,
  `vote` tinyint(1) NOT NULL,
  `option1` tinyint(1) NOT NULL,
  `option2` tinyint(1) NOT NULL,
  `option3` tinyint(1) NOT NULL,
  `option4` tinyint(1) NOT NULL,
  `reason` varchar(280) NOT NULL,
  `time` datetime NOT NULL,
  `ip` varchar(16) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
