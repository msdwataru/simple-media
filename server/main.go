package main

import (
	"context"
	"log"
	"net"

	pb "./hello"

	"google.golang.org/grpc"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) SayHello(ctx context.Context, r *pb.HelloRequest) (*pb.HelloResponse, error) {
	log.Pintln("Recieved : %s", r.GetName())
	return &pb.HelloResponse{Message: "Hello" + r.GetName() + "!"}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterHelloServiceServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %c", err)
	}
}
