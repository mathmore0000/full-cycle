FROM golang:1.24rc1-alpine3.21 AS builder

WORKDIR /usr/src/desafio-go

COPY . .

RUN go build -ldflags="-s -w" -v -o /usr/local/bin/app ./...

FROM scratch

COPY --from=builder /usr/local/bin/app /usr/local/bin/app

CMD ["app"]