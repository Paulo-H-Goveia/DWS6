CREATE TABLE user (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;
	
INSERT INTO user (name, email, password) values ('PAULO HENRIQUE', 'paulo@ifsp.edu.br', 'qwe1257e');
INSERT INTO user (name, email, password) values ('JOSE PEDRO', 'jose@ifsp.edu.br', 'qws154dr');