CREATE TABLE tag (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(100) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tag (description) values ('REQUER CELULAR');
INSERT INTO tag (description) values ('REQUER COMPUTADOR');
INSERT INTO tag (description) values ('REQUER TEMPO');