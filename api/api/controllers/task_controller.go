package controllers

import (
	"api/api/dto"
	"api/api/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ITasksController interface {
	Create(ctx *gin.Context)
}

type TasksController struct {
	service services.ITasksService
}

func NewTasksController(service services.ITasksService) ITasksController {
	return &TasksController{service: service}
}

func (c *TasksController) Create(ctx *gin.Context) {
	var input dto.CreateTasksInput
	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newTasks, err := c.service.Create(input)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"data": newTasks})
}