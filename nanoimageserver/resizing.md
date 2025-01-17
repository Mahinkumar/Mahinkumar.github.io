# Resizing

1. If needed resizing use queries resx and resy `/image/Nature.jpg?resx=1920&resy=1080`
2. When resizing use query resfilter `/image/Nature.jpg?resx=1920&resy=1080&resfilter=lanczos`
3. If specified size is 0 or left unspecified they display original size of the image
4. If resfilter query is unspecified, nearest is chosen by default
5. Choose from several resize algorithms for resizing using the resfilter query.<br>
    Availible resize algorithms are,
    - Nearest
    - Triangle
    - Catmullrom
    - Gaussian
    - Lanczos