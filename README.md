# Pub-Sub with Nestjs

이 레포지토리는 redis 와 nestjs 를 이용해 pub-sub 를 구현하는 예제를 담고 있다.

## Prerequisites

- Nodejs v12.x.x
- [Yarn](https://yarnpkg.com)
- [Nestjs](https://nestjs.com)
- [Docker](https://www.docker.com)

## 실행법

1. redis 실행하기

```
$ docker run --rm -it -p 6379:6379 -d redis:5.0.5
```

2. publisher 실행하기

터미널 1에서 아래 명령어를 실행한다.

```
$ cd publisher
$ yarn install
$ yarn start
```

3. subscriber 실행하기

터미널 2에서 아래 명령어를 실행한다.

```
$ cd subscriber
$ yarn install
$ yarn start
```

4. publish 하기

터미널 3에서 아래 명령어를 실행한다.

```
$ curl localhost:3000
```

5. 결과 확인

subscriber 를 실행시킨 터미널 2에서 아래와 같은 메시지를 확인할 수 있다.

```
received:  { content: 'Hello World!' }
```
