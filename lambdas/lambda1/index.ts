
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import GraphQueryFactory from "./queryCode/GraphQueryFactory"
  


enum Language {
    Gremlin = "Gremlin",
    Cypher = "Cypher"
   }



export async function handler(event: APIGatewayProxyEvent, context: Context) {

 
    const query = GraphQueryFactory.getQuery(Language.Cypher, process.env.NEPTUNE_ENDPOINT!)

    console.log(query.api.createAPI())
    console.log(query.user.getUser('abc'))   
  
}


