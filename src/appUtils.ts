const initialText = `# Heading 1 ✨

Alt Heading 1
===

## Heading 2

Alt Heading 2
---

### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 ✨

Regular paragraph
as multiine 🧶

horizontal rule

-------------------

**NESTED LISTS**

**Mixed UL and OL and CheckBox**
- list item
- [x] **Chekced** list item
- [ ] **Unchecked** list item
- list continues
  1. list item
  2. list item
  3. list item
    - [x] list item
    - [ ] list item
      - list item
      - list item
- [ ] list item
- list item

**Unordered**
-  list item
- list item
  - list item
  - list item
    - list item
- list item
- list item

**Ordered List**
1. **Ordered** list item 1, arbitrary start number support
  1. sublist item
  2. sublist item
    1. more nesting
2. list item
3. list item

**CheckBoxes**
- [x] list item
- [ ] list item
  - [ ] list item
  - [x] list item
    - [ ] list item
- [ ] list item
- [x] list item

**Definition List**
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

**Details**
<details>
<summary>Details Title: Click to Expand</summary>

Detailed content goes here
- Can include multiple paragraphs
- Lists
- Code blocks
- Other markdown elements
</details>

**Link to [GOOGLE](https://www.google.com "link title") with title**

Direct link: www.google.com

**Email "mailto":** oludave0511@gmail.com

**Images**
![Ocean line](https://kids.kiddle.co/images/thumb/6/63/Nice-seafront.jpg/300px-Nice-seafront.jpg "image title")

**resize image**
![Blue Butterflies](/butterflies.png "image title")
![Blue Butterflies](/butterflies.png "image title width=50%")
![Blue Butterflies](/butterflies.png "image title width=50")
![Blue Butterflies](/butterflies.png "image title width=100% height=100")

I need H~2~O (H~water~) not H^2^O (H^~~not water~~^) ==hightlight this==

**Tables!  supports alignment syntax🏓**
| First |Second | Third | Fourth |
|:-|:----:|---:|
|left aligned|center aligned|right aligned|no alignment|
|\`code!\` | and| see | how |
| **bold!!**| really| works | well |
| *italics*| intentionally | |skipped |
| ~~striked~~ | just |works||
| go | on | and | on |

This is **bold**, still works **bold*bold**

This is *italic*

This is ***bold and italic*** 🎃

This is ~~striked through~~

> 🎯A blockqoute here
>> can be nested
>> Quite a site ^right?^
>> - list item
>> - list item
>>   1. list item
>>     - [ ] sdfsdf
>>     - [x] sdfsdf
>> - list item
>> **Anything!!, even tables!!**
>> |see| this | work |
>> |:---|:--:|--:|
>> | first|row right |here|
>> |second|row|right here|
>>> as much as *would* be **enough**
>>> \`\`\`javascript
>>> let works = 'it Works!'
>>> console.log('awesome')
>>> \`\`\`

A \`Code\` 🧨 between texts

**Code block with syntax highlighting!**

\`\`\`javascript
// sample javascript
let x = 5;
var y = 'it works *like* /123';
const z = [\`arr\`, 4, {}, true]

y = y.replace(/\\*/, '');
y = y.replace(/\\/\\d+/, 'abc');

console.log(z.length); //4

function add (a, b) {
  return a + b;
}

add(8,7);  // '5it works'
\`\`\`
\`\`\`typescript
// sample typescript

type StringLiteral = 'tsts' | 'sflksjf';
let x: number = 5;
let y: string = 'it works *like* /123';
const z: (string | number | object | boolean)[] = ['arr', 4, {}, true];

y = y.replace(/\\*/, '');
y = y.replace(/\\/\\d+/, 'abc');

console.log(z.length); //4

function add(a: number, b: number): number {
  return a + b;
}

add(8, 7); // returns 15
\`\`\`
\`\`\`json
// sample json
{
"test": 1,
"test": "test",
"more": false
"nested": [1,2,3]
}
\`\`\`
\`\`\`html
<!-- sample html -->
<p> test</p>
<div>
<span> yes</span>
<div>
><strong>Mixed UL and OL and CheckBox</strong></p>
<ul class="top">
<li> list item</li>
<li class="checkbox-item"><input checked="" class="item-checkbox" disabled="" type="checkbox"> <strong>Chekced</strong> list item</li>
<li class="checkbox-item"><input class="item-checkbox" disabled="" type="checkbox"> <strong>Unchecked</strong> list item</li>
<li> list continues
<ol start="1">
<li> list item</li>
<li> list item</li>
<li> list item
<ul>
\`\`\`
\`\`\`cpp
// sample cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    int x = 5;
    std::string y = "it works *like* /123";
    std::vector<std::string> z = {"arr"};
    z.push_back("4");
    z.push_back("{}");
    z.push_back("true");

    // String replacement operations would use string methods in C++
    y.replace(y.find("*"), 1, "");
    y.replace(y.find("/123"), 4, "abc");

    std::cout << z.size() << std::endl; // 4

    int add(int a, int b) {
        return a + b;
    }

    std::cout << add(8, 7) << std::endl; // 15
    return 0;
}
\`\`\`
\`\`\`markdown
<!-- sample markdown -->
### Heading
## next one
**bold**
> block
> quote
- list
- [ ] checkList
\`\`\`
\`\`\`css
/* sample css */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.button {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 25px;
  background: linear-gradient(to right, #6c5ce7, #a55eea);
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
}
\`\`\`
`;

export default initialText;
