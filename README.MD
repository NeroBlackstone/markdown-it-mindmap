# markdown-it-mindmap

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin add latest [markmap](https://markmap.js.org/) support.

## Usage

### Deno

> This package has only been tested on Deno. But it should also work with node.js.

Import the module from [deno.land/x](https://deno.land/x/markdown_it_mindmap@0.1.0):

``` js
import markmap from "https://deno.land/x/markdown_it_mindmap@0.1.0/index.js"

const mdi = markdownIt();
mdi.use(markmap);

let mindmapContent = `
\`\`\`mindmap
## Links
- <https://markmap.js.org/>
- [GitHub](https://github.com/gera2ld/markmap)
## Related
- [coc-markmap](https://github.com/gera2ld/coc-markmap)
- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)
## Features
- links
- **inline** ~~text~~ *styles*
- multiline
  text
- `inline code`
\`\`\``;

console.log(mdi.render(mindmapContent));
```

Add needed libraries in browser:

``` html
<script src="https://cdn.jsdelivr.net/npm/d3"></script>
<script type="module">
    import { Markmap, } from 'https://jspm.dev/markmap-view';
    const mindmaps = document.querySelectorAll('.markmap-svg');
    for(const mindmap of mindmaps) {
        Markmap.create(mindmap,null,JSON.parse(mindmap.getAttribute('data-json')));
    }
</script>
```

## Output

![output](https://res.cloudinary.com/neroblackstone/image/upload/v1634449419/markdown-it-mindmap_hpsv9q.png)
