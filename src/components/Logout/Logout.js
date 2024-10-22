import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsAuth}) => {
    
    const navigate = useNavigate();
    const auth = getAuth();

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate("/login")
        })
    }

    const cancel = () => {
        
    }

  return (
    <div>
        <h1>Xからログアウトしますか？</h1>
        <p>いつでも再度ログインできます。アカウントを切り替えたい場合は、既存のアカウントを追加することで切り替えることができます。 </p>
        <button onClick={logout}>ログアウト</button>
        <button onClick={cancel}>キャンセル</button>

    </div>
  )
}

export default Logout
