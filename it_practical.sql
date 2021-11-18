-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2021 at 05:30 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it practical`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'Admin-San', 'admin@gmail.com', '$2a$08$FGM2g912bNi1iIKq6mEPWuAFbiaYV0iseh73UIFOsHTIILc7kBuvm');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `rollno` varchar(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`rollno`, `name`, `email`, `password`, `dob`, `score`) VALUES
('2019CSC1016', 'Sharvansh Shukla', 'sharvanshshukla99@gmail.com', '$2a$08$rCbVwEV3ntf8QCGUcknxq.tlkAf4BRs2xBtE.E6AS9dBeFo3nmYzy', '2001-01-03', 100),
('2019CSC1038', 'Siddharth Balyan', 'siddharthbalyan@gmail.com', '$2a$08$3tqeOgkL91YdGIdxdXGFSu460yGDYLQXnbcrBJGlPNx3kj4D4/EDa', '2000-10-03', 99),
('AMITYSUS280', 'Chinmay Shukla', 'chinmayshukla2003@gmail.com', '$2a$08$gGMXkm4YUbA0smEv6HfVOeC7c9GdpuxG8JYGFK.H90.aWEnwcB6NC', '2003-04-28', 85),
('VITLOL1215', 'Shivansh Tiwari', 'strtiwari8@gmail.com', '$2a$08$FyNSCUH9uy86vcQthE1xWuRj2xUBWTmNbbeIwYIBvADIn4OG00GUm', '2000-11-28', 89);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `email`, `password`) VALUES
(1, 'Puja Munjal', 'puja@gmail.com', '$2a$08$FGM2g912bNi1iIKq6mEPWuAFbiaYV0iseh73UIFOsHTIILc7kBuvm'),
(2, 'Sakeena Shahid', 'sakeena@gmail.com', '$2a$08$4BsDBfqlFvzkDbCa4b7qMuA/HyHWyAq0TtHhgwTfI9bWHb7sRVgKm'),
(3, 'Vidhi Vig', 'vidhi@gmail.com', '$2a$08$aUFDzdn.kW.Y85ZsDhPp.eTyRKusyzmshyymCFBWWCdM8P3bOSJES'),
(4, 'PD Sharma', 'pdsylin@yahoo.com', '$2a$08$tSg.R.zJNYxgGKTgise5suUDwaDc3aCZyxMYsk9xVUryoHCDAjIOq'),
(5, 'Sid', 'siddharth.balyan2000@gmail.com', '$2a$08$1/5QhHg.UHItzFC9MNS7/e52hGzRjq2oatarc4DTwf7o3Mlzjzw1O');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
