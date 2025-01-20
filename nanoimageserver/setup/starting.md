# Start the server

::: info
Make sure that port 8000 is free before starting the server
If you need to use a custom port use the -p flag. Refer [flags](./flags) section
:::

## Start the server in linux

```bash
./nano_image_server #refer flags for all flags that can be passed.
```

## Start the server in windows

```bash
start nano_image_server.exe  #refer flags for all flags that can be passed
```

## Accessing the server

Access the server from specified port (default is 8000).<br>
Expose the port if you need to use the server in a network.

To get image go to `/image/<imagename>.<format>`