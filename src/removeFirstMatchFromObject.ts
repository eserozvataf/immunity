import objectAssign from 'ponyfills/objectAssign';

function removeFirstMatchFromObject(instance: any, predicate: (value: any, index: any, object: any) => any): any {
    let notFound = true;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (notFound && predicate(instance[itemKey], itemKey, obj)) {
                notFound = false;

                return obj;
            }

            return objectAssign({}, obj, {
                [itemKey]: instance[itemKey],
            });
        },
        {},
    );
}

export {
    removeFirstMatchFromObject as default,
};
