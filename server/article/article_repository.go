package article

import (
	"os"
	pb "simple-media/articlepb"
	"simple-media/mysql"

	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
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
	db, err := mysql.NewMysqlConnector()
	if err != nil {
        panic(err.Error())
    }
	defer db.Close()

	result := []*mysql.Articles{}
	err = db.Find(&result).Error
	if err != nil {
		panic(err.Error())
	}

	articleList := []*pb.Article{}
	for _, article := range result {
		articleList = append(articleList,
			&pb.Article{
				Id: article.ID,
				Title: article.Title,
				Contents: article.Contents,
				CreatedAt: timestamppb.New(article.CreatedAt),
				UpdatedAt: timestamppb.New(article.UpdatedAt),
			},
		)
	}
	return articleList
}