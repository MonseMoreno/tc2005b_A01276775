
DROP DATABASE IF EXISTS laboratorios;
CREATE DATABASE laboratorios;
USE laboratorios;

    CREATE TABLE Videojuegos(
        idVideojuego integer NOT NULL AUTO_INCREMENT,
        nombre varchar(30),
        descripcion varchar(500),
        imagen varchar(500),
        
        PRIMARY KEY(idVideojuego)
    );

        CREATE TABLE Personajes(
        idPersonaje integer NOT NULL AUTO_INCREMENT,
        nombre varchar(30),
        descripcion varchar(500),
        imagen varchar(500),
        
        PRIMARY KEY(idPersonaje)
    );


        CREATE TABLE Animalitos(
        idAnimalito integer NOT NULL AUTO_INCREMENT,
        nombre varchar(30),
        descripcion varchar(500),
        imagen varchar(500),
        
        PRIMARY KEY(idAnimalito)
    );


