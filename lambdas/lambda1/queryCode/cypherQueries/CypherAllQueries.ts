import CypherApiQuery from "./CypherApiQuery"
import CypherUserQuery from "./CypherUserQuery"
import GetAllQueries from '../abstractQueries/IGraphAllQueries'
import IGraphApiQuery  from '../abstractQueries/IGraphApiQuery'
import IGraphUserQuery  from '../abstractQueries/IGraphUserQuery'

export default class CypherQuery implements GetAllQueries {

public user:CypherUserQuery;
public api:CypherApiQuery;



constructor (endpoint:string){
this.user = new CypherUserQuery(endpoint)
this.api = new CypherApiQuery(endpoint)
  }

  getApiQuery():IGraphApiQuery{
    return this.api;
  }


  getUserQuery():IGraphUserQuery{
    return this.user;
  }

}
