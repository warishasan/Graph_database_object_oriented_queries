import CypherQuery from "./cypherQueries/CypherAllQueries";
import GremlinQuery from "./gremlinQueries/GremlinAllQueries";

enum Language {
   Gremlin = "Gremlin",
   Cypher = "Cypher"
  }

export default class GraphQueryFactory{
private static instance: GraphQueryFactory;
public readonly language: Language;
public readonly endpoint:string;

private constructor (language:Language, endpoint:string){

    this.language = language
    this.endpoint = endpoint
}

public static getInstance (){
    if (!this.instance){
        throw new Error ('Please run createInstance first to initialize the constructor')
    }
    else{

        return this.instance;
    }
}

public static createInstance (language: Language, endpoint:string){
    if (!this.instance){
        this.instance = new GraphQueryFactory(language,endpoint)
        return this.instance
    }

    else {
        return this.instance
    }
}

    getQuery(){
        if(this.language === Language.Gremlin){
            return new GremlinQuery(this.endpoint);
        }
        else if(this.language === Language.Cypher){
            return new CypherQuery(this.endpoint);
        }
        else{
            throw new Error('Language not set')
        }
    }
}