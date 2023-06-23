# programming_list_js

javascript プログラミング集

# web_server 説明

$ cd web_server

Dockerファイルがディリクトリでビルドを行う
$ docker build -t dev_serv_image .

コンテナを立ち上げる
$ docker run --name dev_serv -d -p 8080:80 dev_serv_image

ブラウザにてhttp://localhost:8080 でアクセスする

参照：
https://hub.docker.com/_/nginx
https://qiita.com/hgoehgoeajfljsfalfjladf/items/4a3b6183f2e3fb8e4e53

# node バージョン管理

　・nを使う場合
　　n --stable 安定バージョンの確認
    n stable 安定バージョンのインストール

    cf．https://parashuto.com/rriver/tools/updating-node-js-and-npm

# node_dev chaiの使い方

$ mocha src/test.mjs

# TODO
