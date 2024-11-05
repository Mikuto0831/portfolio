package models

import (
	"time"

	"gorm.io/gorm"
)

type Tasks struct {
	gorm.Model
	Name        string `gorm:"not null"`
	Description string
	Done        bool `gorm:"not null;default:false"`
	DoneAt      time.Time
}
