function byTagName(node, tagName) {
    
    let elements = [];
  
    // Function check the node and its children
    function findMatchingNodes(currentNode) {
      // Check if the current node is an element node
      if (currentNode.nodeType === Node.ELEMENT_NODE) {
        // Compare the nodeName (in uppercase) with the tag name
        if (currentNode.nodeName.toLowerCase() === tagName.toLowerCase()) {
          elements.push(currentNode); // Add matching element to the array
        }
        // Recurse for each child node of the current node
        for (let child of currentNode.childNodes) {
          findMatchingNodes(child);
        }
      }
    }
  
    // Start the recursion from the provided node
    findMatchingNodes(node);
  
    return elements;
  }
  
  console.log(byTagName(document.body, "h1").length); // → 1
  console.log(byTagName(document.body, "span").length); // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length); 