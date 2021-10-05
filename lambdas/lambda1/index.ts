
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import GraphQueryApiFactory from "./queryCode/GraphQueryFactory"
import CypherQuery from './queryCode/cypherQueries/CypherAllQueries'
import GremlinQuery from './queryCode/gremlinQueries/GremlinAllQueries'
import IGraphAllQueries from './queryCode/abstractQueries/IGraphAllQueries';
import IGraphApiQuery from './queryCode/abstractQueries/IGraphApiQuery';


// enum Language {
//     Gremlin = "Gremlin",
//     Cypher = "Cypher"
//    }



export async function handler(event: APIGatewayProxyEvent, context: Context) {

 
    const queryCollection:IGraphApiQuery 
    = GraphQueryApiFactory.getApiQuery(process.env.NEPTUNE_ENDPOINT!)

    console.log(queryCollection.getMyApis())
  
}


