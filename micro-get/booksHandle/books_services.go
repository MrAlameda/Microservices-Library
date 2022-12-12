package bookshanle

import (
	db "library/database"
	"library/models"
	"library/structures"
	mess "library/structures"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	uuid "github.com/google/uuid"
)

func GetBookcHandle(c *fiber.Ctx) error {

	var Books []models.Books
	message := mess.Message{
		Message: "Empty",
	}

	db.DB.Find(&Books)

	if len(Books) == 0 {
		return c.Status(fiber.ErrBadRequest.Code).JSON(message)
	}

	return c.Status(fiber.StatusOK).JSON(Books)
}

func GetIdBookcHandle(c *fiber.Ctx) error {
	id := c.Params("id")

	badMessage := mess.Message{
		Message: "This id not exist",
	}

	var book models.Books

	db.DB.Where("id = ?", id).Find(&book)

	if book.Id == "" {
		return c.Status(fiber.ErrBadRequest.Code).JSON(badMessage)
	}

	return c.Status(fiber.StatusOK).JSON(book)
}

func PostBookcHandle(c *fiber.Ctx) error {

	data := new(structures.Book)

	validate := validator.New()

	c.BodyParser(data)

	err := validate.Struct(data)

	if err != nil {
		return c.Status(fiber.ErrBadRequest.Code).Send([]byte(err.Error()))
	}

	data.Id = uuid.New().String()

	db.DB.Create(data)
	return c.Status(fiber.StatusOK).JSON(data)

}

func DeletIdBookcHandle(c *fiber.Ctx) error {

	var book models.Books
	id := c.Params("id")

	db.DB.Where("id = ?", id).Delete(&book)

	goodMessage := mess.Message{
		Message: "Deleted",
	}

	return c.Status(fiber.StatusOK).JSON(goodMessage)
}

func PutIdBookHandle(c *fiber.Ctx) error {

	id := c.Params("id")

	data := new(structures.Book)

	c.BodyParser(data)

	db.DB.Where("Id = ?", id).Updates(&data)
	return c.Status(fiber.StatusOK).JSON(data)
}
