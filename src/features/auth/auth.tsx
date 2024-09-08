import { useEffect, useRef, useState } from "react";
import { supabase } from "../../db/supabase";



export default function Auth() {
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSignUp= async (event: any) => {
    event.preventDefault()

    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email, password, options: {
        emailRedirectTo:"http://localhost:5173/login"
      }
    })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert(data)
      console.log(data, 'data is showing heheheheh');

    }
    setLoading(false)
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <form className="form-widget" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              ref={inputRef}
              className="inputField" type="email" placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password"
              className="inputFie ld"
              value={password}
              placeholder="Your Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              name=""
              id="" />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send Otp</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
