::: warning
The documentation for this project is currently being written<br>
Please check back later for a finished version
:::
<br>
<Badge type="warning" text="v0.4.0-beta" />
<img src="./nano_image_server.png" alt="Nano Image Server"> 
<br>

Nano Image Server is a tiny, blazingly fast service to serve images with support for image operation on fly.
Use it as an image delivery network for small to medium scale usage or use it for your home server for storing and retrieveing images.

The server is truly asynchronous, Memory safe and thread safe. Built upon axum and tokio runtime. The image processing, encoding and decoding are done by the image crate. GPU support and caching are planned before the stable release.