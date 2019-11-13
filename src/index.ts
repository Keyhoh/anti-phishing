import Domain from "./Domain";

import { whiteList } from "./whiteList";
import Result from "./Result";

module.exports.check = (url: string) =>
    whiteList.sites.map(site =>
        new Result(
            site.url,
            site.title,
            new Domain(site.url).similarlyWith(new Domain(url)))
    );
