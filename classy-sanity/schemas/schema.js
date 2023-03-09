// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import teams from "./documents/teams";
import socialFeed from "./documents/socialFeed";
import statistics from "./documents/statistics";
import faq from "./documents/faq";
import socials from "./documents/socials";
import about from "./documents/about";

// object schemas
import mainImage from "./objects/mainImage";
import mainVimeoVideo from "./objects/mainVimeoVideo";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    teams,
    socialFeed,
    statistics,
    faq,
    socials,
    about,
    mainImage,
    mainVimeoVideo
  ]),
});
