package br.edu.ifsp.arq.dw2s6.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.arq.dw2s6.todolist.domain.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
