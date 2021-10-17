import { Transformer } from 'https://jspm.dev/markmap-lib';

const transformer = new Transformer();
const markmapPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    if (token.info === 'mindmap') {
      try { 
        const {root , _} = transformer.transform(token.content.trim());
        return `<svg class="markmap-svg" data-json='${JSON.stringify(root)}' style="width: 100%; height: 400px; border-style: double;"></svg>`;
      } catch (ex) {
        return `<pre>${ex}</pre>`
      }
    }
    return temp(tokens, idx, options, env, slf)
  };
};

export default markmapPlugin
