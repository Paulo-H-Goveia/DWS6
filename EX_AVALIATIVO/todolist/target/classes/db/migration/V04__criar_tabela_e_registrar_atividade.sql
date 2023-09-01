CREATE TABLE task (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(100) NOT NULL,
	task_date DATE NOT NULL,
	observation VARCHAR(100) NOT NULL,
	user_id BIGINT(20) NOT NULL,
	tag_id BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id),
	FOREIGN KEY (tag_id) REFERENCES tag(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO task (description, task_date, observation, user_id, tag_id ) values ('telefonar mae', '2023-09-18', 'REQUER CELULAR', 1, 1);
INSERT INTO task (description, task_date, observation, user_id, tag_id ) values ('email fornecedor', '2023-09-16', 'REQUER COMPUTADOR', 1, 2);
INSERT INTO task (description, task_date, observation, user_id, tag_id ) values ('lavar louca', '2023-09-18', 'TEMPO',  2, 3);