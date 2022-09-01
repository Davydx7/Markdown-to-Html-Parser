# Custom full featured markdown parser

## TODO

marked signals priority

- [x] Write Tests
- [x] syntax highlighting
- [x] setup Jest with Vite
- [ ] ctrl + s parses markdown
- [ ] support table without enclosing '|'
- [x] support text aligns in table
- [x] support comfort space bars in table (e.g end of line)
- [ ] implement optional live parsing
- [ ] support check lists
- [x] support code syntax highlighting (separate module)
- [x] support multilevel lists
- [ ] support multilevel blockquotes (recurse the whole parsing function)
- [ ] support \<details>\</details>

## Done

- [x] support tables
- [x] support escaping characters (\\)
- [x] support lists
- [x] support images
- [x] support links

## Intensional Behaviours

- table free support for uneven heading to body
- inline stylings spanning multiple lines (e.g. _bold_ or _italic_) in the same paragraph
