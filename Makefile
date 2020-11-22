.PHONY: build docker

all: build docker

build:
	@yarn build

docker:
	@docker build -t blog-fe .
	@docker tag blog-fe yokooll/blog-fe
	@docker push yokooll/blog-fe