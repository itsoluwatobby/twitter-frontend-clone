import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import NewPassword from './pages/NewPassword'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'
import { TweetPage } from './pages/TweetPage'
import { Routes, Route } from 'react-router-dom'
import { TweetLayout } from './components/TweetLayout'
import { Profile } from './pages/Profile'
import { ProtectedRoute } from './components/ProtectedRoute'
import { PublicRoute } from './components/PublicRoute'

function App() {

  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path='/' element={<PublicRoute />}>

          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='forgot_password' element={<ForgetPassword />}/>
          <Route path='new_password' element={<NewPassword />}/>

          <Route element={<TweetLayout />}>

            <Route index element={<Home />}/>

            <Route path='/tweet' element={<ProtectedRoute />}>
              <Route path='explore' element={<Explore />}/>
              <Route path='tweetPage' element={<TweetPage />}/>
              <Route path='profile' element={<Profile />}/>
            </Route>

          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
