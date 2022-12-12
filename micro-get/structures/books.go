package structures

type Book struct {
	Id          string
	Title       string `validate:"required"`
	Description string `validate:"required"`
	Price       string `validate:"required"`
	Author      string `validate:"required"`
	UserName    string `validate:"required"`
	UserId      string `validate:"required"`
}
