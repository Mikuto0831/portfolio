package repositories

import (
	"api/api/models"

	"gorm.io/gorm"
)


type ITasksRepository interface {
	Create(newItem models.Tasks) (*models.Tasks, error)
}

type TasksRepository struct {
	db *gorm.DB
}

func NewTasksRepository(db *gorm.DB) ITasksRepository {
	return &TasksRepository{db: db}
}

func (r *TasksRepository) Create(newItem models.Tasks) (*models.Tasks, error) {
	result := r.db.Create(&newItem)
	if result.Error != nil {
		return nil, result.Error
	}
	return &newItem, nil
}
