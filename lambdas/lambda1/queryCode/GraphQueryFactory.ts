import CypherQuery from "./cypherQueries/CypherAllQueries";
import GremlinQuery from "./gremlinQueries/GremlinAllQueries";
import GremlinApiQuery from "./gremlinQueries/GremlinApiQuery";
import CypherApiQuery from "./cypherQueries/CypherApiQuery";
import IGraphApiQuery from "./abstractQueries/IGraphApiQuery";


// enum Language {
//     Gremlin = "Gremlin",
//     Cypher = "Cypher",
//     GQL = "GQL"
// }

export default class GraphQueryApiFactory {

    //private language:Language;

    private constructor() {

        //this.language = Language.Cypher
    }

    public static getApiQuery( endpoint: string):IGraphApiQuery {

        // switch (language) {
        //     case Language.Gremlin:
                return new GremlinApiQuery(endpoint);

        //     case Language.Cypher:
        //         return new CypherApiQuery(endpoint);

        //     default:
        //         throw new Error('Language not set')

        // }
    }
}