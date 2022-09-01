# Custom full featured markdown parser

## TODO

marked signals priority

- [x] Write Tests
- [x] syntax highlighting
- [x] setup Jest with Vite
- [x] ctrl/cmd + s parses markdown
- [ ] support table without enclosing '|'
- [x] support text aligns in table
- [x] support comfort space bars in table (e.g end of line)
- [ ] implement optional live parsing (parse as you type)
- [x] support check lists
- [x] support code syntax highlighting (separate module)
- [x] support multilevel lists
- [x] support multilevel blockquotes (recurse the whole parsing function)
- [ ] support \<details>\</details>

## Done

- [x] support tables
- [x] support escaping characters (\\)
- [x] support lists
- [x] support images
- [x] support links

## Intensional Behaviours

- table free support for uneven number of columns of heading row to any body row
