upstream my_server {
    ip_hash;
    server 127.0.0.1:3000
}
server {
    listen 80;
    # set $https_redirect 0;
    # if ($server_port = 80) {
    #     set $https_redirect 1;
    # }
    # if ($https_redirect = 1) {
    #     return 301 https://publisher.nhadatmoi.net$request_uri;
    # }
    server_name _;
    keepalive_timeout 600;
    large_client_header_buffers 8 32k;
    client_max_body_size 200M; #200mb
    location / {
        proxy_read_timeout 18000;
        proxy_connect_timeout 10800;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_buffers 8 32k;
        proxy_buffer_size 64k;
        proxy_pass http://my_server;
        proxy_redirect off;
        proxy_http_version 1.1;
    }
}