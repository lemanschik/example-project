const assign = (tagName,props) => Object.assign(document.createElement(tagName),props);
const style = (el, styleDecl) => Object.assign(el.style,styleDecl);
const createEl = (tagName,{style,...props}) => !style ? assign(tagName,props) : assignStyle(assign(tagName,props),style);

// This Appends DOMNodes
document.body.appendChild;
// This appends strings and DOMNodes aka DOMNodes as String so only the outerHTML.
document.body.append;
// A DOMNode's .outerHTML represents the String Note metthods like onclick do not get serialized from alone. 

const h1 = (innerText,style)=>createEl('h1',{innerText,style});
const h2 = (innerText,style)=>createEl('h2',{innerText,style});
const p = (innerText,style)=>createEl('p',{innerText,style});
const img = (src,style)=>createEl('img',{src,style});

[h1('Welcome to the Homepage'),// vs assign('h1',{ innerText: 'Welcome to the Homepage' }),
p('This is logical for me.'),
style(h2('Header 2.'), { color: 'red' }),
p('This is logical for me.'),
img('data:base64,....',{ width: '20px', height: '30px' }),
createEl({ src: 'data:base64,....',style:{ width: '20px', height: '30px' }})
]
// Render
.map(node=>document.body.appendChild(node) || node)
// SSR
.forEach(node=>console.log(node.outerHTML);

//will not work like innerHTML because the string gets auto escaped.       
//document.body.append(`<h1>Welcome to the Homepage</h1><p>This is logical for me.</p><h1>Header 2</h1><p>This is logical for me.</p>`);


