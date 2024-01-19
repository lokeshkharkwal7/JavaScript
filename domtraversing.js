
// Understanding RootNodes 
const root_node = document.getRootNode()

// traversing through each component 
const html_child_of_root = root_node.childNodes[0]

console.log('Child node html',html_child_of_root)
const head_node = html_child_of_root.childNodes[0]
console.log('Child node of html',head_node)
const text_node = html_child_of_root.childNodes[1]
console.log('Child node of html',text_node)
const body_node = html_child_of_root.childNodes[2]
console.log('Child node of html',body_node)

const bodychilds = body_node.childNodes
console.log('body Childs', bodychilds)
console.log('Childs of Body tag : ')

for (let element of bodychilds){
    console.log(element)
}
// getting child of the div class 
console.log('Getting Child of Div Class')
const divtag = bodychilds[1]
console.log(divtag.childNodes)
// traversing the text and element nodes of the dom tree
console.log('elements of the head class')
// root node 
const rnode = document.getRootNode()
// head node 
const hnode = rnode.childNodes[0]
console.log(hnode.childNodes)
// body node 
const bnode = hnode.childNodes[2].childNodes
console.log('Body Nodes',bnode)
// div node 
const divnode = hnode.childNodes[2].childNodes[1].childNodes
console.log(divnode)

// TRAVERSING OF THE DOM TREE ELEMINATING TEXT NODE 

const domRNode = document.getRootNode()
console.log('Html node ',domRNode.children)

const domHtml = document.getRootNode().children[0]
console.log('Children of html node ',domHtml.children)

const domHead = domHtml.children[0]
console.log('Children of head node ',domHead.children)

const domtitle = domHead.children[0]
console.log('children of title ', domtitle.childNodes[0]) //for getting text node childNodes is used 

const domBody = domHtml.children[1]
console.log('Childrens of body ',domBody.children)

const domBodyDiv = domBody.children[0]
console.log('Children of Section (div)' ,domBodyDiv.children)
console.log(domBodyDiv.children[1])

let root = document.getRootNode().childNodes
console.log(root)

console.log(root[0].childNodes)

let head = root[0].childNodes[2]
console.log(head.childNodes)

