package dto

type CreateTasksInput struct {
	Name        string `json:"name" biding:"required,min=2"`
	Description string `json:"description"`
	Done        bool   `json:"Done"`
}
