import objectAssign from 'ponyfills/objectAssign';

function splitObject(instance: any, n: number): { items: any, rest: any } {
    const keys = Object.keys(instance);

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (index < n) {
                index += 1;

                return {
                    items: objectAssign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    rest: obj.rest,
                };
            }

            return {
                items: obj.items,
                rest: objectAssign({}, obj.rest, { [itemKey]: instance[itemKey] }),
            };
        },
        {
            items: {},
            rest: {},
        },
    );
}

export {
    splitObject as default,
};
