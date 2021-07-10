package mysql

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func NewMysqlConnector() (database *gorm.DB, err error) {
	DBMS := "mysql"
    USER := "media"
    PASS := "user"
    PROTOCOL := "tcp(localhost:3306)"
    DBNAME := "media"
 
    CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
    return gorm.Open(DBMS, CONNECT)
}