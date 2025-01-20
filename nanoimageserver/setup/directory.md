# Directory structure
Place Images you need in images folder next to the executable<br>
The directory structure should be in following manner<br>

::: warning
Both the images folder and the executable must be in same level. Otherwise the images will not be visible to the executable.
:::

```bash
nano_image_server      #Executable
images                 #Folder
|-Image1.jpg
|-Image2.svg
|-Image3.png
cache                  #Folder will be created for caching after the first start
```



To pass a custom directory for the images refer to the [flags](./flags) section.

Once this step is complete and verified you can proceed to starting the server.