import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const { users, loading, count } = useContext(GithubContext)

  if (!loading) {
    return (
      <div>
        <div className='my-2'>
          {count}
          {count === 1 ? <span> Result</span> : <span> Results</span>}
        </div>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults
