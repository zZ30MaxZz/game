-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2016 a las 07:05:15
-- Versión del servidor: 10.0.17-MariaDB
-- Versión de PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_gameboy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_datos_usuario`
--

CREATE TABLE `tb_datos_usuario` (
  `codigo_datos` int(100) NOT NULL,
  `nombre` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `sexo` char(1) COLLATE latin1_spanish_ci NOT NULL,
  `departamento` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `colores` int(10) NOT NULL,
  `nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tb_datos_usuario`
--

INSERT INTO `tb_datos_usuario` (`codigo_datos`, `nombre`, `sexo`, `departamento`, `ciudad`, `colores`, `nacimiento`) VALUES
(1, 'max', 'v', 'Apurimac', 'Abancay', 1100, '2016-06-13'),
(2, 'vic', 'v', 'Apurimac', 'Abancay', 1001, '2016-06-06'),
(3, 'ronald', 'm', 'Apurimac', 'Grau', 1001, '2000-07-20'),
(4, 'brad', 'v', 'Apurimac', 'Abancay', 1111, '2016-06-16'),
(5, 'sond', 'm', 'Apurimac', 'Abancay', 1111, '2016-06-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_ingreso`
--

CREATE TABLE `tb_ingreso` (
  `codigo_ingreso` int(100) NOT NULL,
  `nombre` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tb_ingreso`
--

INSERT INTO `tb_ingreso` (`codigo_ingreso`, `nombre`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 'max', '2016-06-19 21:41:34', '2016-06-19 21:42:00'),
(4, 'vic', '2016-06-19 21:55:20', '2016-06-19 21:55:32'),
(5, 'ronald', '2016-06-19 21:58:39', '2016-06-19 21:59:04'),
(6, 'max', '2016-06-19 23:15:54', '2016-06-19 23:15:58'),
(7, 'max', '2016-06-19 23:16:24', '2016-06-19 23:17:15'),
(8, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(9, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(10, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(11, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(12, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(13, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(14, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(15, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(16, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(17, 'max', '2016-06-19 23:20:29', '2016-06-19 23:20:32'),
(18, 'max', '2016-06-19 23:29:33', '2016-06-19 23:29:38'),
(19, 'max', '2016-06-19 23:32:33', '2016-06-19 23:32:41'),
(20, 'brad', '2016-06-19 23:36:53', '2016-06-19 23:36:58'),
(21, 'brad', '2016-06-19 23:41:24', '2016-06-19 23:41:30'),
(22, 'max', '2016-06-19 23:43:23', '2016-06-19 23:45:06'),
(23, 'brad', '2016-06-19 23:45:42', '2016-06-19 23:45:46'),
(24, 'max', '2016-06-19 23:46:56', '2016-06-19 23:58:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `nombre` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `imagen` varchar(4) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tb_usuario`
--

INSERT INTO `tb_usuario` (`nombre`, `imagen`) VALUES
('brad', 'a7'),
('max', 'a1'),
('ronald', 'a6'),
('sond', 'a8'),
('vic', 'a7');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_datos_usuario`
--
ALTER TABLE `tb_datos_usuario`
  ADD PRIMARY KEY (`codigo_datos`);

--
-- Indices de la tabla `tb_ingreso`
--
ALTER TABLE `tb_ingreso`
  ADD PRIMARY KEY (`codigo_ingreso`);

--
-- Indices de la tabla `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_datos_usuario`
--
ALTER TABLE `tb_datos_usuario`
  MODIFY `codigo_datos` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `tb_ingreso`
--
ALTER TABLE `tb_ingreso`
  MODIFY `codigo_ingreso` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
