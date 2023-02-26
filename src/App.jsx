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
import { Success } from './pages/Success'

function App() {

  return (
    <div className="App overflow-x-hidden container h-screen">
      <Routes>
        <Route path='/' element={<PublicRoute />}>

          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='forgot_password' element={<ForgetPassword />}/>
          <Route path='new_password' element={<NewPassword />}/>
          {/* protect success route later by using d query as condition*/}
          <Route path='successful_verification' element={<Success />}/>

          <Route element={<TweetLayout />}>

            <Route index element={<Home />}/>

            <Route path='/tweet' element={<ProtectedRoute />}>
              <Route path='explore' element={<Explore />}/>
              <Route path='tweetPage/:tweetId/:userId' element={<TweetPage />}/>
              <Route path='profile/:userId' element={<Profile />}/>           
            </Route>

          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
