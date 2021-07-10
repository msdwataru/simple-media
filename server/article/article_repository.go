package article

import (
	"os"
	pb "simple-media/articlepb"
)

type IArticleRepository interface {
	GetList() []*pb.Article;
}

func NewArticleRepository() IArticleRepository {
	if os.Getenv("ENV") == "test" {
		return InmemoryArticleRepository{}
	} else {
		return MysqlArticleRepository{}
	}
}

type InmemoryArticleRepository struct {
}

func (r InmemoryArticleRepository) GetList() []*pb.Article {
	return []*pb.Article{
		{Id: "1", Title: "hoge", Contents: "hello"},
		{Id: "2", Title: "fuga", Contents: "world!"},
	}
}

type MysqlArticleRepository struct {
}

func (r MysqlArticleRepository) GetList() []*pb.Article {
	return []*pb.Article{
		{Id: "1", Title: "hoge", Contents: "aaa"},
		{Id: "2", Title: "fuga", Contents: "bbb"},
	}
}