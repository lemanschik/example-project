const assign = (tagName,props) => Object.assign(document.createElement(tagName),props);
const assignStyle = (el, styleDecl) => Object.assign(el.style,styleDecl);
const createEl = (tagName,props,styleDecl) => assignStyle(assign(tagName,props),styleDecl);

// This Appends DOMNodes
document.body.appendChild;
// This appends strings and DOMNodes aka DOMNodes as String so only the outerHTML.
document.body.append;
// A DOMNode's .outerHTML represents the String Note metthods like onclick do not get serialized from alone. 

const h1 = (innerText)=>assign('h1',{innerText});
const h2 = (innerText)=>assign('h2',{innerText});
const p = (innerText)=>assign('p',{innerText})

[h1('Welcome to the Homepage'),// vs assign('h1',{ innerText: 'Welcome to the Homepage' }),
p('This is logical for me.'),
h2('Header 2.'),
p('This is logical for me.'),
]
// Render
.map(node=>document.body.appendChild(node) || node)
// SSR
.forEach(node=>console.log(node.outerHTML);
         
document.body.append(`<h1>Welcome to the Homepage</h1><p>This is logical for me.</p><h1>Header 2</h1><p>This is logical for me.</p>`);
