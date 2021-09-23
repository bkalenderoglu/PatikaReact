import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';

function Signup() {
    const {handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
        initialValues:{
          email: '',
          password:'',
          passwordConfirm:'',
          
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
      });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

            <label>Email</label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.email && touched.email && <div className="error" >{errors.email}</div>}

            <br/>
            <br/>


            <label>Password</label>
            <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

            {errors.password && touched.password && <div className="error" >{errors.password}</div>}

            <br/>
            <br/>

            <label>Confirm password</label>
            <input name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />

            {errors.passwordConfirm && touched.passwordConfirm && <div className="error" >{errors.passwordConfirm}</div>}

            {/* <br/>
            <br/>

            <span>Male</span>
            <input type="radio" name="gender" value="male"  onChange={handleChange} checked={values.gender === 'male'}/>

            <span>Female</span>
            <input type="radio" name="gender" value="female"  onChange={handleChange} checked={values.gender === 'female'} />
            <br/>
            <br/>

            <div>
              <input type="checkbox" name="hobbies" value="Football" onChange={handleChange} />
              Football
            </div>

            <div>
              <input type="checkbox" name="hobbies" value="Photography" onChange={handleChange} />
              Photography
            </div>

            <div>
              <input type="checkbox" name="hobbies" value="Drawing" onChange={handleChange} />
              Drawing
            </div>

            <br/>

            <select name="country" onChange={handleChange} value={values.country}>
              <option value="turkey">Turkey</option> 
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select> */}

            <br/>
            <br/>

            <button type="submit">Submit</button>

            <br/>
            <br/>

            { JSON.stringify(values) }
          </form>
        </div>
    )
}

export default Signup
