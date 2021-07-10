package article

import (
	"os"
	"reflect"
	pb "simple-media/articlepb"
	"testing"
)


func TestArticleRepository(t *testing.T) {
	os.Setenv("ENV", "test")
	var articleRepository = NewArticleRepository()
	expect := []*pb.Article{
		{Id: "1", Title: "hoge", Contents: "hello"},
		{Id: "2", Title: "fuga", Contents: "world!"},
	}
	actual := articleRepository.GetList()
	if !reflect.DeepEqual(&actual, &expect) {
		t.Errorf("actual %v\nwant %v", reflect.ValueOf(actual), reflect.ValueOf(expect))
	}
}