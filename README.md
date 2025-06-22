# Minecraft MCP Bot

A modular, agentic Minecraft bot built with [mineflayer](https://github.com/PrismarineJS/mineflayer), designed to act as a lifelike, autonomous player. The bot can explore, mine, build, farm, fight, and progress through the game as a real player would, with advanced memory and learning capabilities.

## Features
- **Goal-driven agentic architecture**: Modular world model, goal manager, and decision loop
- **Exploration, mining, farming, building, and combat**
- **Context-aware chat and episodic/semantic memory**
- **Resource gathering, crafting, and home-building**
- **Adaptive stripmining and ore-level awareness**
- **CLI and HTTP API for remote control**
- **Ready for LLM/AI integration**

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/TBrantl/minecraft-mcp-bot.git
   cd minecraft-mcp-bot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the bot server:
   ```sh
   node index.js
   ```

## Usage
- The bot exposes an HTTP API (default: `localhost:3000`).
- To connect the bot to a Minecraft server, send a POST request to `/connect`:
  ```sh
  curl -X POST http://localhost:3000/connect \
    -H "Content-Type: application/json" \
    -d '{"host":"your.server.address","port":25565,"username":"BotName"}'
  ```
- Use the `/cli` endpoint to send commands (mine, build, patrol, etc).

## Contributing
Pull requests and issues are welcome! Please:
- Keep code modular and well-documented
- Avoid committing secrets or sensitive data
- Open issues for bugs, feature requests, or questions

## License
[ISC](LICENSE) 