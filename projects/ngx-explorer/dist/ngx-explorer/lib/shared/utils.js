class Utils {
    static createNode(parentId = 0, isLeaf = false, data) {
        const id = ++this.id;
        return {
            id,
            parentId,
            data,
            isLeaf,
            children: []
        };
    }
    static buildBreadcrumbs(flatPointers, node) {
        const pieces = [];
        let currentNode = node;
        while (true) {
            pieces.unshift(currentNode);
            if (currentNode.parentId) {
                currentNode = flatPointers[currentNode.parentId];
            }
            else {
                break;
            }
        }
        return pieces;
    }
    static compareObjects(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
}
Utils.id = 0;
export { Utils };
//# sourceMappingURL=utils.js.map