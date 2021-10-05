import IGraphApiQuery from "../abstractQueries/IGraphApiQuery";
import IGraphUserQuery from "../abstractQueries/IGraphUserQuery";
import GremlinApiQuery from "./GremlinApiQuery"
import GremlinUserQuery from "./GremlinUserQuery"
import GetAllQueries from '../abstractQueries/IGraphAllQueries'

export default class GremlinQuery implements GetAllQueries{

public user:GremlinUserQuery;
public api:GremlinApiQuery;


constructor (endpoint:string){
this.user = new GremlinUserQuery(endpoint)
this.api = new GremlinApiQuery(endpoint)
  }

  getApiQuery():IGraphApiQuery{
    return this.api;
  }


  getUserQuery():IGraphUserQuery{
    return this.user;
  }

}
