# upstream my_server {
#     ip_hash;
#     server 127.0.0.1:3001;
# }
# server {
#     listen 80;
#     server_name _;
#     keepalive_timeout 600;
#     large_client_header_buffers 8 32k;
#     client_max_body_size 200M; #200mb
#     location / {
#         proxy_read_timeout 18000;
#         proxy_connect_timeout 10800;
#         proxy_set_header X-Real-IP $remote_addr;
#         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#         proxy_set_header Host $http_host;
#         proxy_set_header X-NginX-Proxy true;
#         proxy_buffers 8 32k;
#         proxy_buffer_size 64k;
#         proxy_pass http://my_server;
#         proxy_redirect off;
#         proxy_http_version 1.1;
#     }
# }
upstream my_server {
    ip_hash;
    server 127.0.0.1:3000;
}
server {
    listen 80;
    listen 443 ssl;

    server_name ngongochung.xyz;
    keepalive_timeout 600;
    large_client_header_buffers 8 32k;
    client_max_body_size 200M;
        #200mb
    # SSL 
    ssl_certificate /etc/letsencrypt/live/ngongochung.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ngongochung.xyz/privkey.pem;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5; # mã hóa kiểu md5
#   Redirect to the correct place, if needed
    set $https_redirect 0;
    if ($server_port = 80) { set $https_redirect 1; }
    if ($https_redirect = 1) {
    return 301 https://ngongochung.xyz$request_uri;
        }
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