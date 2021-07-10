package main

import (
	"context"
	"log"
	"net"

	pb "simple-media/article"

	emptypb "google.golang.org/protobuf/types/known/emptypb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) GetList(ctx context.Context, r *emptypb.Empty) (*pb.ArticleList, error) {
	articleList := []*pb.Article{
		{Id: "1", Title: "hogehoge", Contents: "hello"},
		{Id: "2", Title: "fuga", Contents: "world!"},
	}
	return &pb.ArticleList{
		Article: articleList,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()

	pb.RegisterArticleServiceServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
