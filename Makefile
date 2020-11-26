.PHONY: build docker

all: build docker

build:
	@yarn build

docker:
	@docker build -t blog-fe .
	@docker tag blog-fe yokowu/blog-fe
	@docker push yokowu/blog-fe

dev:
	@yarn build --mode=development
	@docker build -t blog-fe .
	@docker tag blog-fe yokowu/blog-fe:dev
	@docker push yokowu/blog-fe:dev