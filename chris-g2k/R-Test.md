```typescript
const RenderContent: React.FC<Props> = ({ text, markdown = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  const parsed = useMemo(() => DOMPurify.sanitize(parseMd(text)), [text]);

  // const parsed = useMemo(() => parseMd(text), [text]);

  useEffect(() => {
    if (ref.current) {
      if (markdown) {
        ref.current.innerHTML = parsed;
      } else {
        ref.current.innerText = parsed;
      }
    }
  }, [markdown, parsed]);

  return <div className="output" ref={ref} />;
};
```

```python
console.log('wow');

function test(one) {
  const c = new Class();
}
```

Markdonasdf
sdfsd
more
=====90
=

dfg

Markdonasdf
sdfsd
more
====

This is *bo\*\*ld*contine\*\*

> A blockqoute here
> spans multiline as well
> styled accordingly

A blockqoute here
spans multiline as well
styled accordingly

<h1 style="color: red;">this <br> works</h1>

<div contenteditable=true >yep</div>

sdkf#ksdf

```java
this righht here
<br>
```

```
jgjkgjkgj
<br>
```

dsf sdfdsf d
when will it stop
