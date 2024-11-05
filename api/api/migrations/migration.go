package main

import (
	"api/api/infra"
	"api/api/models"
)

func main() {
    infra.Initialize()
	db := infra.SetupDB()

	if err := db.AutoMigrate(&models.Tasks{}); err != nil {
		panic("Failed to migrate database")
	}
}
