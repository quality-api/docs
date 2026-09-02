const NAMESPACE_KEY = "cache_";

namespace Cache {

    function ensureNamespace() {
        if (!(NAMESPACE_KEY in globalThis))
            // @ts-expect-error TS2551
            globalThis[NAMESPACE_KEY] = {};
    }

    export function get<T>(key: string): T {
        ensureNamespace();

        // @ts-expect-error TS2551
        return globalThis[NAMESPACE_KEY][key];
    }

    export function set<T>(key: string, value: T) {
        ensureNamespace();

        // @ts-expect-error TS2551
        return globalThis[NAMESPACE_KEY][key] = value;
    }

}

export default Cache;