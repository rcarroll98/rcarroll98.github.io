DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers (
	id int AUTO_INCREMENT,
    burger_name varchar(30),
    devoured boolean DEFAULT false,
	PRIMARY KEY(id)
);



