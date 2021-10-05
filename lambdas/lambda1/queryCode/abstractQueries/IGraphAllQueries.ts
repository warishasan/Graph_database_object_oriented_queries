import iGraphUserQuery from '../abstractQueries/IGraphUserQuery'
import iGraphApiQuery from '../abstractQueries/IGraphApiQuery'

export default interface IGraphAllQueries{
    getApiQuery():iGraphApiQuery
    getUserQuery():iGraphUserQuery

}
