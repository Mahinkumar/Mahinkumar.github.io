# Build from Source


::: details Dependencies Needed {open}
1. Rust
2. Docker
:::

To build relia from source use the following commands. 


```bash
# Release Build
cargo build --release

# Development Build
cargo build
```

To run locally

```bash
# Start redis and postgres from docker compose script.
docker compose up 

# Run the server
cargo run --release  
```