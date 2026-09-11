import { RELEASE_NOTE_LIST_CACHED_DATA_CACHE_KEY, RELEASE_NOTE_LIST_LAST_CACHE_AT_CACHE_KEY } from "@/globals/cache-keys,globals";
import authenticate from "@/middlewares/authenticate";
import Cache from "@/utils/Cache";
import QualityApi from "@quality-api/core";

export const GET =
    QualityApi.start()
        .add(authenticate)
        .end(() => {

            Cache.set(RELEASE_NOTE_LIST_LAST_CACHE_AT_CACHE_KEY, null);
            Cache.set(RELEASE_NOTE_LIST_CACHED_DATA_CACHE_KEY, null);

            return new Response(null, { status: 204 });
        });