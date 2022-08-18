import React from 'react'
import { API_PATH } from '../tools/constants'
import axios from 'axios'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Verify = (props) => {
    const [passcode, setPasscode] = useState('')

    const navigate = useNavigate()

    const verify = async (e) => {
        e.preventDefault()
        await axios.post(API_PATH + '/account/verify-email/', {
            email: props.userEmail,
            otp: passcode
        })
            .then((res) => {
                console.log(res);
                navigate('/user-dashboard', { replace: true })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        !props.userEmail && navigate('/login', { replace: true })
    }, [])

    return (
        <div className='Verify py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={verify} className="cards">
                            <h1>Verify</h1>
                            <input
                                onChange={e => setPasscode(e.target.value)}
                                value={passcode}
                                required
                                type="number"
                                placeholder='Enter passcode'
                            />
                            <button type='submit'>Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userEmail: state.auth.userEmail,
        userToken: state.auth.userToken
    }
}

export default connect(mapStateToProps, null)(Verify)