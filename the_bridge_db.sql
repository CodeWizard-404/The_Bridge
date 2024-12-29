-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2024 at 01:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `the_bridge_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `submitted_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `message`, `name`, `submitted_at`) VALUES
(4, 'sofienlaghouanem@gmail.com', 'Test Email 1', 'Sofien Laghouanem', '2024-12-29 01:28:09.000000'),
(5, 'sofienlaghouanem@gmail.com', 'Test Email 2', 'Sofien Laghouanem', '2024-12-29 01:28:23.000000'),
(6, 'sofienlaghouanem@gmail.com', 'Test Email 3', 'Sofien Laghouanem', '2024-12-29 01:28:31.000000');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `created_at`, `description`, `duration`, `image_url`, `price`, `status`, `title`, `updated_at`) VALUES
(11, '2024-12-29 01:25:02.000000', 'Spring Boot / Angular', 40, 'http://localhost:8080/uploads/cbe7c95b-82b5-4451-a974-85180cd83974_Angular_SpringBoot.png', 350, 'active', 'Spring Boot / Angular', '2024-12-29 01:25:02.000000'),
(12, '2024-12-29 01:25:35.000000', 'Node JS / React', 40, 'http://localhost:8080/uploads/ef1a0e3b-33b9-443d-8586-21c10bc2dad8_NodeJS_React.png', 350, 'active', 'Node JS / React', '2024-12-29 01:25:35.000000'),
(13, '2024-12-29 01:26:05.000000', 'Flutter / Firebase', 40, 'http://localhost:8080/uploads/6ccbc034-2702-4e2e-b9c2-4f4306e2fcbb_Flutter_Firebase.png', 350, 'active', 'Flutter / Firebase', '2024-12-29 01:26:05.000000'),
(14, '2024-12-29 01:26:35.000000', 'Business Intelligence', 40, 'http://localhost:8080/uploads/34edbcb4-1329-4db5-b3df-e07da092a509_Business Intelligence.png', 350, 'active', 'Business Intelligence', '2024-12-29 01:26:35.000000'),
(15, '2024-12-29 01:26:59.000000', 'Artificial Intelligence', 40, 'http://localhost:8080/uploads/fb95fe9a-d102-422b-8047-cb0b0b07aee6_Artificial Intelligence.png', 350, 'active', 'Artificial Intelligence', '2024-12-29 01:26:59.000000'),
(16, '2024-12-29 01:27:20.000000', 'Devops', 40, 'http://localhost:8080/uploads/fadfc514-7ab0-4f18-8c29-a9ef5be1c49e_Devops.png', 350, 'active', 'Devops', '2024-12-29 01:27:20.000000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`, `role`, `username`) VALUES
(1, '$2a$10$weC.VIDdgJbS2r2Zv.znCus/hfF3jIrZzv0mcVpFejQ2BvDWQHSaW', 'ROLE_ADMIN', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
