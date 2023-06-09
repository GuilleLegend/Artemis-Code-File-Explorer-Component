export class Utils {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbmd4LWV4cGxvcmVyL25neC1leHBsb3Jlci9wcm9qZWN0cy9uZ3gtZXhwbG9yZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sS0FBSztJQUlkLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLElBQVU7UUFDdEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE9BQU87WUFDSCxFQUFFO1lBQ0YsUUFBUTtZQUNSLElBQUk7WUFDSixNQUFNO1lBQ04sUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUErQixFQUFFLElBQVc7UUFDaEUsTUFBTSxNQUFNLEdBQUcsRUFBYSxDQUFDO1FBQzdCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixPQUFPLElBQUksRUFBRTtZQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO2dCQUN0QixXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDSCxNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O0FBN0JjLFFBQUUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTm9kZSwgRGljdGlvbmFyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaWQgPSAwO1xuXG4gICAgc3RhdGljIGNyZWF0ZU5vZGUocGFyZW50SWQgPSAwLCBpc0xlYWYgPSBmYWxzZSwgZGF0YT86IGFueSk6IElOb2RlIHtcbiAgICAgICAgY29uc3QgaWQgPSArK3RoaXMuaWQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBhcmVudElkLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGlzTGVhZixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBidWlsZEJyZWFkY3J1bWJzKGZsYXRQb2ludGVyczogRGljdGlvbmFyeTxJTm9kZT4sIG5vZGU6IElOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlcyA9IFtdIGFzIElOb2RlW107XG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBwaWVjZXMudW5zaGlmdChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudE5vZGUucGFyZW50SWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGZsYXRQb2ludGVyc1tjdXJyZW50Tm9kZS5wYXJlbnRJZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaWVjZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbXBhcmVPYmplY3RzKGE6IGFueSwgYjogYW55KSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYik7XG4gICAgfVxufVxuIl19