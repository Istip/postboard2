---
agent: agent
name: remember
description: This prompt is used to save user input to a memory instruction file.
---

<variables>
MEMORY_FILE_PATH: .github/instructions/memory-instructions.md
</variables>

This is used whether the user asks to remember something or if the user is asking you to forget about something previously remembered. You will have to save the user input(s) to the memory instructions file to the MEMORY_FILE_PATH. You will also have to remove any previously remembered information from the memory instructions file if the user asks you to forget something.
