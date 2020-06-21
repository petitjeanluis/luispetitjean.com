export class Blog {
    public id: string;
    public title: string;
    public content: string;
    public author: string;
    public description: string;
    public createdOn: string;
    public lastUpdatedOn: string;
    public type: string;

    private deserialize(input: any): this {
        Object.assign(this,input)
        return this;
    }

    public deserializeItemFromDynamoDBObject(input: any): Blog {
        let transform = this.transformDynamoDBObject(input);
        return this.deserialize(transform);
    }

    private transformDynamoDBObject(obj: any) {
        let transform = {}
        Object.keys(obj).forEach(key => {
            let newKey = key.charAt(0).toLocaleLowerCase() + key.slice(1)
            transform[newKey] = obj[key]["S"];
        })
        return transform;
    }
}