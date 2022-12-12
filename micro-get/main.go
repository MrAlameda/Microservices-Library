package main

import (
	b "library/booksHandle"

	"github.com/gofiber/fiber/v2"

	mess "library/structures"

	JS "encoding/json"
	db "library/database"
	mdls "library/models"
)

func main() {

	//! databaseConection
	db.Conndb()
	db.DB.AutoMigrate(mdls.Books{})

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {

		var body mess.Message

		JS.Unmarshal(c.Body(), &body)

		badMessage := mess.Message{
			Message: "escribe algo",
		}

		if body.Message == "" {
			return c.Status(fiber.ErrBadRequest.Code).JSON(badMessage)
		}

		return c.JSON(body)
	})

	books := app.Group("/books")

	books.Get("/", b.GetBookcHandle)
	books.Post("/", b.PostBookcHandle)
	books.Delete("/:id", b.DeletIdBookcHandle)
	books.Get("/:id", b.GetIdBookcHandle)
	books.Put("/:id", b.PutIdBookHandle)

	app.Listen(":8080")
}
