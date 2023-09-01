package br.edu.ifsp.arq.dw2s6.todolist.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.arq.dw2s6.todolist.domain.model.Task;
import br.edu.ifsp.arq.dw2s6.todolist.repository.TaskRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/task")
public class TaskResource {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping
	public List<Task> list(){
		return taskRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Task> findById(@PathVariable Long id) {
		Optional<Task> activity = taskRepository.findById(id);
		if(activity.isPresent()) {
			return ResponseEntity.ok(activity.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Task create(@Valid @RequestBody Task activity) {
		return taskRepository.save(activity);
	}
}
