import { useHistory, Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <form>

                <label></label>
                <input></input>
                
                <div className="sign-login">
                    <p>Already have an account? <Link to="/login" id="link">Sign in here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
