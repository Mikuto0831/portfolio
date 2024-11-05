package main

import (
	"api/api/controllers"
	"api/api/infra"
	"api/api/repositories"
	"api/api/services"

	"github.com/gin-gonic/gin"
)

func main() {
	infra.Initialize()
	db := infra.SetupDB()
	
	tasksRepository := repositories.NewTasksRepository(db)
	tasksService := services.NewTasksService(tasksRepository)
	itemController := controllers.NewTasksController(tasksService)

	r := gin.Default()
    // Postリクエスト(Createメソッド)のルーティング
	r.POST("/tasks", itemController.Create)
    r.Run("localhost:8080")
}