package service

import (
	"context"
	"io"

	"github.com/mathmore0000/full-cycle/tree/main/comunicacao-entre-sistemas/grpc/internal/database"
	"github.com/mathmore0000/full-cycle/tree/main/comunicacao-entre-sistemas/grpc/internal/pb"
)

type CategoryService struct {
	pb.UnimplementedCategoryServiceServer
	categoryDB *database.Category
}

func NewCategoryService(categoryDB *database.Category) *CategoryService {
	return &CategoryService{categoryDB: categoryDB}
}

func (cs CategoryService) CreateCategory(ctx context.Context, creq *pb.CreateCategoryRequest) (*pb.Category, error) {
	category, err := cs.categoryDB.Create(creq.Name, creq.Description)
	if err != nil {
		return nil, err
	}
	return &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}, nil
}

func (cs CategoryService) ListCategories(ctx context.Context, req *pb.Blank) (*pb.CategoryList, error) {
	categories, err := cs.categoryDB.FindAll()
	if err != nil {
		return nil, err
	}
	var pbCategories []*pb.Category
	for _, category := range categories {
		pbCategories = append(pbCategories, &pb.Category{
			Id:          category.ID,
			Name:        category.Name,
			Description: category.Description,
		})
	}
	return &pb.CategoryList{Categories: pbCategories}, nil
}

func (cs CategoryService) GetCategory(ctx context.Context, creq *pb.CategoryGetRequest) (*pb.Category, error) {
	category, err := cs.categoryDB.FindByID(creq.Id)

	if err != nil {
		return nil, err
	}
	return &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}, nil
}

func (cs CategoryService) CreateCategoryStream(stream pb.CategoryService_CreateCategoryStreamServer) error {
	var categories []*pb.Category
	for {
		category, err := stream.Recv()
		if err == io.EOF {
			return stream.SendAndClose(&pb.CategoryList{Categories: categories})
		}

		if err != nil {
			return err
		}
		categoryResult, err := cs.CreateCategory(context.Background(), category)

		if err != nil {
			return err
		}
		categories = append(categories, categoryResult)

	}
}

func (cs CategoryService) CreateCategoryStreamBidirectional(stream pb.CategoryService_CreateCategoryStreamBidirectionalServer) error {
	for {
		category, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}
		categoryResult, err := cs.CreateCategory(context.Background(), category)

		if err != nil {
			return err
		}

		err = stream.Send(&pb.Category{
			Id:          categoryResult.Id,
			Name:        categoryResult.Name,
			Description: categoryResult.Description,
		})
		if err != nil {
			return err
		}
	}
}
