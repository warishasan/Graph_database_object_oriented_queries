import CypherQuery from "./cypherQueries/CypherAllQueries";
import GremlinQuery from "./gremlinQueries/GremlinAllQueries";

enum Language {
    Gremlin = "Gremlin",
    Cypher = "Cypher"
}

export default class GraphQueryFactory {

    private constructor() {

    }

    public static getQuery(language: Language, endpoint: string) {

        switch (language) {
            case Language.Gremlin:
                return new GremlinQuery(endpoint);

            case Language.Cypher:
                return new CypherQuery(endpoint);

            default:
                throw new Error('Language not set')

        }
    }
}