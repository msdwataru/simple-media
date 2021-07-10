package mysql

import "time"

type Articles struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Contents  string    `json:"contents"`
	CreatedAt time.Time `json:"createdAt" sql:"not null;type:date"`
	UpdatedAt time.Time `json:"updatedAt" sql:"not null;type:date"`
}