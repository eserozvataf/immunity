import assign from 'ponyfills/lib/assign';

function pickFromObject(instance: any, items: Array<any>): { items: any, rest: any } {
    const keys = Object.keys(instance);

    return keys.reduce(
        (obj, itemKey) => {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    rest: obj.rest,
                };
            }

            return {
                items: obj.items,
                rest: assign({}, obj.rest, { [itemKey]: instance[itemKey] }),
            };
        },
        {
            items: {},
            rest: {},
        },
    );
}

export {
    pickFromObject as default,
};
