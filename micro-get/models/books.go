package models

import (
	"gorm.io/gorm"
)

type Books struct {
	gorm.Model

	Id          string `gorm:"not null;unique_index"`
	Title       string `gorm:"not null"`
	Description string `gorm:"not null"`
	Price       string `gorm:"not null"`
	Author      string `gorm:"not null"`
	UserName    string `gorm:"not null"`
	UserId      string `gorm:"not null"`
}
