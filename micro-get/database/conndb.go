package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var dsn = "host=localhost user=postgres password=123123/ dbname=Library port=5432"
var DB *gorm.DB

func Conndb() {
	var error error
	DB, error = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("Db connected")
	}
}
