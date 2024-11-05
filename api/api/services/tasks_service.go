package services

import (
	"api/api/dto"
	"api/api/models"
	"api/api/repositories"
)

type ITasksService interface {
	Create(createItemInput dto.CreateTasksInput) (*models.Tasks, error)
}

type TasksService struct {
	repository repositories.ITasksRepository
}

func NewTasksService(repository repositories.ITasksRepository) ITasksService {
	return &TasksService{repository: repository}
}

func (s *TasksService) Create(createItemInput dto.CreateTasksInput) (*models.Tasks, error) {
	newTasks := models.Tasks{
		Name:        createItemInput.Name,
		Description: createItemInput.Description,
		Done:     false,
	}
	return s.repository.Create(newTasks)
}
